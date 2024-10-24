import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'; 
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from '../config/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; 

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signUpStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    signUpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPasswordStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    resetPasswordSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    resetPasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { 
  signInStart, 
  signInSuccess, 
  signInFailure, 
  signUpStart, 
  signUpSuccess, 
  signUpFailure,
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailure
} = authSlice.actions;

export const signUp = ({ firstName, lastName, email, password, profileImage }) => async (dispatch) => {
  dispatch(signUpStart());

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      firstName,
      lastName,
      email,
      uid: user.uid,
      role: 'user',  
    });

    if (profileImage) {
      await uploadProfileImage(profileImage, user.uid);
    }

    saveUserToLocalStorage({ firstName, lastName, email, uid: user.uid });

    dispatch(signUpSuccess(user));
  } catch (error) {
    dispatch(signUpFailure(error.message));
  }
};

async function uploadProfileImage(file, userId) {
  const storage = getStorage();
  const storageRef = ref(storage, `profile-images/${userId}`);

  await uploadBytes(storageRef, file);
  
  const downloadURL = await getDownloadURL(storageRef);
  
  await setDoc(doc(db, "users", userId), { profileImageUrl: downloadURL }, { merge: true });
  
  localStorage.setItem("profileImageUrl", downloadURL);
  return downloadURL;
}

const saveUserToLocalStorage = ({ firstName, lastName, email, uid, profileImageUrl = '' }) => {
  localStorage.setItem('user', JSON.stringify({
    firstName,
    lastName,
    email,
    uid,
    profileImageUrl,
  }));
};

export const signIn = (email, password) => async (dispatch) => {
  dispatch(signInStart());

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const isAdmin = userData.role === 'admin';

      saveUserToLocalStorage({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        uid: userData.uid,
        profileImageUrl: userData.profileImageUrl || '', 
      });

      dispatch(signInSuccess({ ...user, ...userData, isAdmin }));
    } else {
      dispatch(signInFailure("User does not exist in Firestore"));
    }
  } catch (error) {
    dispatch(signInFailure(error.message));
  }
};

export const resetPassword = ({ email }) => async (dispatch) => {
  dispatch(resetPasswordStart());

  try {
    await sendPasswordResetEmail(auth, email);
    dispatch(resetPasswordSuccess());
    alert("Password reset email sent! Check your inbox.");
  } catch (error) {
    dispatch(resetPasswordFailure(error.message));
    console.error("Error sending password reset email:", error.message);
  }
};

export default authSlice.reducer;
