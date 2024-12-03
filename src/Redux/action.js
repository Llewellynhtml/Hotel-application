// Redux action to add review
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { setLoading, setUserReviews, setError } from "./dbslice";

export const addUserReview = (reviewData) => async (dispatch) => {
  const uid = auth.currentUser?.uid;
  if (!uid) {
    console.error("User is not authenticated");
    return;
  }

  dispatch(setLoading(true));

  try {
    
    const newReview = {
      ...reviewData,
      userId: uid,
      timestamp: Timestamp.fromDate(new Date()),
    };

    
    const reviewRef = doc(db, "userReviews", uid + "_" + new Date().getTime());
    await setDoc(reviewRef, newReview);

    
    dispatch(setUserReviews((prevReviews) => [...prevReviews, newReview]));
    console.log("Review added successfully!");
  } catch (error) {
    console.error("Error adding review:", error.message);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};



