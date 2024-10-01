import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Added signInWithEmailAndPassword
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from '../config/firebase';

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
  },
});

export const { 
  signInStart, 
  signInSuccess, 
  signInFailure, 
  signUpStart, 
  signUpSuccess, 
  signUpFailure 
} = authSlice.actions;


export const signUp = ({ firstName, lastName, email, password }) => async (dispatch) => {
  dispatch(signUpStart());

  try {
  
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user info to Firestore using the uid as the document ID
    await setDoc(doc(db, "users", user.uid), {
      firstName,
      lastName,
      email,
      uid: user.uid,
      role: 'user',  // Assign a default role, can be 'user' or 'admin'
    });

    dispatch(signUpSuccess(user));
  } catch (error) {
    dispatch(signUpFailure(error.message));
  }
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
      dispatch(signInSuccess({ ...user, isAdmin }));
    } else {
      dispatch(signInSuccess(user)); 
    }

  } catch (error) {
    dispatch(signInFailure(error.message));
  }
};

export default authSlice.reducer;
