import React from 'react'
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { formatData } from '../utils/formatData';
import { sortDescending } from '../utils/sort';
import colors from '../config/colors';

const Table = ({ countries }) => {
  const classes = useStyles();
  const sortedCountries = sortDescending(countries);

  return (
    <Box>
      <Typography variant="h6">Live Cases by Country</Typography>
      <Box className={classes.table}>
        <table>
          <tbody>
            {sortedCountries.map(country => (
              <tr key={country.name} className={classes.tr}>
                <td className={classes.td}>{country.name}</td>
                <td className={classes.td}>
                  <strong>{formatData(country.cases)}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  )
}

export default Table

const useStyles = makeStyles({
  table: {
    marginTop: '20px',
    marginBottom: '20px',
    overflowY: 'scroll',
    height: '300px',
    backgroundColor: '#fff',
    color: colors.PRIMARY_GRAY,
  },
  tr: {
    display: 'flex',
    justifyContent: 'space-between',
    '&:nth-of-type(odd)': {
      backgroundColor: colors.BACKGROUND_LIGHT,
    },
  },
  td: {
    padding: '0.5rem',
  },
});