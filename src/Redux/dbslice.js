import { createSlice } from "@reduxjs/toolkit";
import { getDocs, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db, auth } from "../config/firebase";

const initialState = {
  data: [],
  userBookings: [] ,
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload || true;
      state.error = null;
    },
    setData(state, action) {
      state.data = action.payload;
      state.loading = false;
    },

    setUserBookings(state, action) {
      state.userBookings = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    addBookingToState(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const { setLoading, setData, setError, addBookingToState,  setUserBookings } = dataSlice.actions;
export default dataSlice.reducer;

export const fetchRooms = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const querySnapshot = await getDocs(collection(db, "Rooms"));
    const rooms = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Fetched rooms:", rooms);
    dispatch(setData(rooms));
  } catch (error) {
    console.error("Error fetching rooms:", error.message);
    dispatch(setError(error.message));
  }
};

export const fetchBookings = (userId) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const bookingsRef = collection(db, `users/${userId}/Bookings`); 
    const querySnapshot = await getDocs(bookingsRef);
    const bookings = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Fetched bookings:", bookings);
    dispatch(setData(bookings));
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    dispatch(setError(error.message));
  }
};

export const fetchFavorites = (userId) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const favoritesRef = collection(db, `users/${userId}/favorites`);
    const querySnapshot = await getDocs(favoritesRef);
    const favorites = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Fetched favorites:", favorites);
    dispatch(setData(favorites));
  } catch (error) {
    console.error("Error fetching favorites:", error.message);
    dispatch(setError(error.message));
  }
};

export const addFavoriteRoom = (userId, roomId, roomData) => async (dispatch) => {
  try {
    await setDoc(doc(db, `users/${userId}/favorites`, roomId), roomData);
    console.log("Favorite room added:", roomData);
  } catch (error) {
    console.error("Error adding favorite room:", error.message);
    dispatch(setError(error.message));
  }
};

export const addUserBookings = (bookingDetails) => async (dispatch) => {
  const uid = auth.currentUser?.uid; 
  console.log(uid);
  
  if (!uid) {
    console.error("User is not authenticated");
    return; 
  }

  dispatch(setLoading());

  try {
  
    const bookingRef = await addDoc(collection(db, "users", uid, "Bookings"), bookingDetails);
    
    
    dispatch(addBookingToState({ id: bookingRef.id, ...bookingDetails }));
    console.log("Booking successfully added to Firestore under user:", uid);
  } catch (error) {
    console.error("Error saving booking under user:", error.message);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};



export const fetchBookingToFirestore =  () => async (dispatch) => {
  const uid = auth.currentUser.uid;
  dispatch(setLoading());
  try {
      const bookingsRef = collection(db,  "users", uid, "Bookings");
      const querySnapshot = await getDocs(bookingsRef);
      console.log(querySnapshot)
      const userBookings = querySnapshot.docs
          .map((doc) => ({
              id: doc.id,
              ...doc.data(),
          }))

          console.log(userBookings)
       dispatch( setUserBookings(userBookings))
  } catch (error) {
      dispatch(setError(error.message));
  }
};