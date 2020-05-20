import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import { TypeUser } from '../../../modules/user';

type UserProps = {
  user: TypeUser;
};

const useStyles = makeStyles(() =>
  createStyles({
    avatar: {
      width: '100px',
      height: '100px',
    },
    icon: {
      width: '100%',
      height: 'auto',
    },
  })
);

export const User: FC<UserProps> = ({ user }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container spacing={4}>
        <Grid item>
          <Avatar variant="rounded" className={classes.avatar}>
            <PersonIcon className={classes.icon} />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography gutterBottom>{user.name}</Typography>
          <Typography gutterBottom>{user.email}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
