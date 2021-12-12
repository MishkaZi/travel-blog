import React, { useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import usestyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

const Home = () => {
  const classes = usestyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
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
  );
};

export default Home;
