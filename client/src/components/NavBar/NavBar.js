import React, { useState, useEffect } from 'react';
import travelblog from '../../images/travelblog.jpeg';
import usestyles from './styles';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';

const NavBar = () => {
  const classes = usestyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // const token = user?.token;
    //JWT

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location, user?.token]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate('/auth');
    setUser(null);
  };

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography
          className={classes.heading}
          component={Link}
          to='/'
          variant='h2'
          align='center'
        >
          Travel Blog
        </Typography>
        <img
          className={classes.image}
          src={travelblog}
          alt='travelblog'
          height='60'
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant='h6'>
              {user.result.name}
            </Typography>
            <Button
              variant='contained'
              className={classes.logout}
              color='secondary'
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to='/auth'
            variant='contained'
            color='primary'
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
