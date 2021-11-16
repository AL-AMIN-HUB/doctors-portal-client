import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
  getIdToken,
} from "firebase/auth";

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();

  //   sign in with google
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        //
        // save user to the database
        saveUser(result.user.email, result.user.displayName, "PUT");
        // ...
        const redirect_url = location?.state?.from || "/";
        navigate(redirect_url);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   create new user with email and password
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate("/");

        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        saveUser(email, name, "POST");
        // send name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        setError("");
        // Signed in
        console.log("register page", result);
      })
      .catch((error) => {
        setError(error.message);

        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   sign in user with email and password
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        setError("");
        setUser(result.user);
        const redirect_url = location?.state?.from || "/";
        navigate(redirect_url);
        // ...
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   observed user sign in or sign out
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          // most of the case idToken uses localStorage
          setToken(idToken);
          // console.log(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // admin
  useEffect(() => {
    fetch(`https://dry-sands-38758.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user.email]);

  //   signOut
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  // save users in the database

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://dry-sands-38758.herokuapp.com/users", {
      method: method,
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    token,
    admin,
    user,
    error,
    registerUser,
    logOut,
    signInWithGoogle,
    loginUser,
    isLoading,
  };
};

export default useFirebase;
