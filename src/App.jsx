import React, { useEffect } from "react";
import { Outlet,useNavigate } from "react-router-dom";
import { addUser, removerUser } from "./Components/toolkit/userSlice"
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Utils/firebase";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        dispatch(removerUser());
        navigate("/")
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
  <Outlet />
  )
}

export default App;
