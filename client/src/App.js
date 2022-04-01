import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { createTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts.js"
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import memories from "./images/memories.png";

import useStyles from "./styles.js";

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    const classes = useStyles();
    const theme = createTheme();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} sx={{flexDirection: "row"}} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid sx={{[theme.breakpoints.down("sm")]: {flexDirection: "column-reverse"}}} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;