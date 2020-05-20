import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

type AppHeaderProps = {
  id: number;
  isLoggein: boolean;
  logout: () => void;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
    },
  })
);

export const AppHeader: FC<AppHeaderProps> = ({ id, isLoggein, logout }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1" className={classes.title}>
            <Link className={classes.link} to="/">
              Sample App
            </Link>
          </Typography>
          {isLoggein ? (
            <>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to={`/users/${id}`}>
                Profile
              </Button>
              <Button color="inherit" onClick={logout}>
                Log out
              </Button>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Log in
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
