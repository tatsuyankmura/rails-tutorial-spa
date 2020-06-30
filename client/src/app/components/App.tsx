import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { AppHeaderContainer } from '../containers/AppHeaderContainer';
import { Root } from './pages/Root';
import { User as UserContainer } from '../containers/UserContainer';
import { SignUp as SignUpContainer } from '../containers/SignUpContainer';
import { Login as LoginContainer } from '../containers/LoginContainer';
import { UserEdit as UserEditContainer } from '../containers/UserEditContainer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(2, 0),
    },
  })
);

export const App: FC = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <CssBaseline />
      <AppHeaderContainer />
      <Container maxWidth="md" className={classes.container}>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route exact path="/users/:id" component={UserContainer} />
          <Route exact path="/users/:id/edit" component={UserEditContainer} />
          <Route path="/signup" component={SignUpContainer} />
          <Route path="/login" component={LoginContainer} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
