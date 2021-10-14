import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    navBar: {
        backgroundColor: "#3b753d",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function TopAppBar() {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <AppBar title = "Explore" position = "static" className = "navBar">
                <Toolbar>
                    <Typography variant = "h6" className = {classes.title}>Explore</Typography>
                    <Link to = '/' style= {{ textDecoration: 'none', color: 'white' }}>
                        <Button color = "inherit">Home</Button>
                    </Link>    
                    <Link to = '/find' style= {{ textDecoration: 'none', color: 'white' }}>
                        <Button color = "inherit">Find Courses</Button>
                    </Link>
                    <Link to = '/ballrecs' style= {{ textDecoration: 'none', color: 'white' }}>
                        <Button color = "inherit">Ball Reccomendations</Button>
                    </Link>
                    <Link to = '/clubrecs' style= {{ textDecoration: 'none', color: 'white' }}>
                        <Button color = "inherit">Club Reccomendations</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}