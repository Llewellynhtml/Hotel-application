import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
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


export const fetchData = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const querySnapshot = await getDocs(collection(db, "Rooms"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Fetched data from Firestore: ", data); 
    dispatch(setData(data));
  } catch (error) {
    console.error("Error fetching data: ", error);
    dispatch(setError(error.message));
  }
};

// Adding new booking
export const addBookings = (bookingData) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const docRef = await addDoc(collection(db, "bookings"), bookingData);
    console.log("Document written with ID: ", docRef.id);
    
    // Dispatching the new booking to add it to the state
    dispatch(addBookingToState({ id: docRef.id, ...bookingData }));
  } catch (error) {
    console.error("Error adding booking: ", error);
    dispatch(setError(error.message));
  }
};
