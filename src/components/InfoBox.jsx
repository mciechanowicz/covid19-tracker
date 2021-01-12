import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import colors from '../config/colors';

const InfoBox = ({ title, cases, total, onClick, type }) => {
  const classes = useStyles();

  const typesColors = {
    cases: colors.PRIMARY_RED,
    recovered: colors.PRIMARY_GREEN,
    deaths: colors.SECONDARY_RED,
  };

  return (
    <Card onClick={onClick} className={classes.InfoBoxCard}>
      <CardContent>
        <Typography
          className={classes.InfoBoxCardText}
          color="textSecondary"
        >
          {title}
        </Typography>
        <Typography
          className={classes.InfoBoxCardText}
          style={{ color: typesColors[type] }}
          variant="h5"
        >
          {cases}
        </Typography>
        <Typography color="textSecondary">
          {total}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default InfoBox

const useStyles = makeStyles({
  InfoBoxCard: {
    flex: 1,
    marginRight: '10px',
    '&:last-child': {
      marginRight: 0,
    },
  },
  InfoBoxCardText: {
    fontWeight: 600,
  },
});
