import React from 'react'
import { CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import colors from '../config/colors';

const LoadingIndicator = ({ loading }) => {
  const classes = useStyles();
  return (
    <>
      {loading &&
        <div className={classes.container}>
          <CircularProgress className={classes.loadingIndicator} />
          <Typography className={classes.text} variant="h6">
            Loading...
          </Typography>
        </div>
      }
    </>
  )
};

export default LoadingIndicator;

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(66, 66, 66, 0.4)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    zIndex: 2,
    flexDirection: 'column',
  },
  loadingIndicator: {
    color: colors.SECONDARY_GRAY,
  },
  text: {
    color: colors.SECONDARY_GRAY,
    marginTop: 10,
  },
});
