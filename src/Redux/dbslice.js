import { createSlice } from "@reduxjs/toolkit";
import { getDocs, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const initialState = {
  data: [],
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
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    addBookingToState(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const { setLoading, setData, setError, addBookingToState } = dataSlice.actions;
export default dataSlice.reducer;

// Fetch Rooms
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

// Fetch Bookings for a specific user
export const fetchBookings = (userId) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const bookingsRef = collection(db, `users/${userId}/bookings`);
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

// Fetch Favorite Rooms for a specific user
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

// Adding a favorite room for a user
export const addFavoriteRoom = (userId, roomId, roomData) => async (dispatch) => {
  try {
    await setDoc(doc(db, `users/${userId}/favorites`, roomId), roomData);
    console.log("Favorite room added:", roomData);
  } catch (error) {
    console.error("Error adding favorite room:", error.message);
    dispatch(setError(error.message));
  }
};

// Adding new booking
export const addBookings = (bookingData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const docRef = await addDoc(collection(db, "bookings"), bookingData);
    console.log("Document written with ID: ", docRef.id);
    
    // Dispatching the new booking to add it to the state
    dispatch(addBookingToState({ id: docRef.id, ...bookingData }));
    dispatch(setLoading(false)); // End loading
  } catch (error) {
    console.error("Error adding booking: ", error);
    dispatch(setError(error.message));
  }
};
