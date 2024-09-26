import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase"; 

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <p>Please log in to access your account</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <p>This is the user dashboard for managing your hotel bookings.</p>
    </div>
  );
};

export default User;
