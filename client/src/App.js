import './App.css';
import React, { useEffect } from 'react';
import usestyles from './styles';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import travelblog from './images/travelblog.jpeg';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { getPosts } from './actions/posts';

const App = () => {
  const classes = usestyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>
          <Typography className={classes.heading} variant='h2' align='center'>
            Travel Blog
          </Typography>
          <img
            className={classes.image}
            src={travelblog}
            alt='travelblog'
            height='60'
          />
        </div>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent='space-between'
            className={classes.mainContainer}
            alignItems='stretch'
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
