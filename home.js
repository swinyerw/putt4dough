import React from 'react';
import './index.css';
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase';
import Button from '@material-ui/core/Button'
import { Menu } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';
import betterOldWell from './betterOldWell.jpg'


firebase.initializeApp({
    apiKey: "AIzaSyC5shR-cAvml_cR4jHmq8Xzn92qQ57lEOY",
    authDomain: "putt4dough-69750.firebaseapp.com",
    projectId: "putt4dough-69750",
    storageBucket: "putt4dough-69750.appspot.com",
    messagingSenderId: "732144577",
    appId: "1:732144577:web:f8f22b3772e86365948540",
    measurementId: "G-475M5EBPE2"
})

const auth = firebase.auth();
export const db = firebase.firestore();

const useStyles = makeStyles((theme) => ({
    login: {
        backgroundColor: "#3b753d",
        color: "#fcfcfc",
    },
}));

export default function Home() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    return(
        <body style = {{height: "100vh"}} className = "homeBody">
            <Button variant = "contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="loginbtn">
                    Login
                    <LaunchIcon />
            </Button>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={signInWithGoogle}>Login with Google</MenuItem>
                <MenuItem onClick={handleClose}>Login with Email</MenuItem>
            </Menu>
            <img src = {betterOldWell} alt = "Old Well" />
            <div className = "homeContent">
                <h1 className = "welcome">
                    Welcome to Putt4Dough
                </h1>
                <p>
                    Created by a UNC student, for UNC students!
                    Take a look at the Find Courses Page to see courses near campus, and check out our Ball and Club Reccomendations to see if any suit your eye!
                    And as always it's a GDTBATH
                </p>
            </div>
        </body>
    );
}