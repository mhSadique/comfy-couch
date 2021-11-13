import { useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.init";
import { useHistory } from "react-router";

initializeFirebase();

const useFirebase = () => {
    const history = useHistory();
    const [user, setUser] = useState({});
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
    const [userIsAdmin, setUserIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();


    useEffect(() => {

        const userAdminStatus = window.localStorage.getItem('comfy_couch_is_user_admin');
        const userLoggedinStatusParsed = JSON.parse(userAdminStatus);
        if (userAdminStatus == null) {
            setUserIsAdmin(false)
        } else {
            setUserIsAdmin(userLoggedinStatusParsed.isAdmin)
        }
    }, [userIsLoggedIn]) 

    const saveUserDetailToDb = user => {
        const userDetails = {
            name: user.name,
            email: user.email,
            role: 'user'
        };

        fetch(`https://morning-harbor-64345.herokuapp.com/save-user`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };


    const registerUser = (userData) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setUserIsLoggedIn(true);
                setAuthError('');

                // save user to db
                saveUserDetailToDb(userData);
                //set the user's name to firebase
                updateProfile(auth.currentUser, {
                    displayName: userData.name,
                }).then(() => {
                    const newUser = user;
                    setUser({ ...newUser, displayName: userData.name });
                    history.replace('/');
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    };

    const loginUser = (email, password, history, location) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setUserIsLoggedIn(true);

                fetch(`https://morning-harbor-64345.herokuapp.com/user-by-email/${email}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data[0].role) {
                            if (data[0].role === 'admin') {
                                window.localStorage.setItem('comfy_couch_is_user_admin', JSON.stringify({ isAdmin: true }));
                                setUserIsAdmin(true);
                            } else {
                                window.localStorage.setItem('comfy_couch_is_user_admin', JSON.stringify({ isAdmin: false }));
                                setUserIsAdmin(false);
                            }
                        }

                    })


                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    };

    const logoutUser = () => {
        console.log('logging out');
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUserIsLoggedIn(false);
            setUserIsAdmin(false);
            window.localStorage.setItem('comfy_couch_is_user_admin', JSON.stringify({ loggedIn: false }));
        }).catch((error) => {
            // An error happened.
        }).finally(() => setLoading(false))
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setUserIsLoggedIn(true);
            } else {
                setUserIsLoggedIn(false);
                setUser({});
            }
            setLoading(false);
        });

        return () => unsubscribe;

    }, [auth]);

    return {
        user,
        loading,
        registerUser,
        loginUser,
        logoutUser,
        userIsLoggedIn,
        authError,
        userIsAdmin,
    };
};

export default useFirebase;

/*
steps for authentication
----------------
Step-1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method
------------------
Step-2: setup component
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register
------------------------
Step 3: set auth system
1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase
---------------------
Step 4: create auth context hook (useAuth)
1. create a auth context
2. Create context Provider
3. set context Provider context value
4. use Auth Provider in the app.js
5. create useAuth Hook
---------------------
Step 5: create private route
1. create private Route
2. set private route
------------------
Step-6: Redirect after login
1. after login redirect user to their desired destination
*/