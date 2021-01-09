import React from 'react'
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { formatData } from '../utils/formatData';

const Table = ({ countries }) => {
  const classes = useStyles();
  const sortedData = countries.sort((a,b) => b.cases - a.cases);

  return (
    <Box>
      <Typography variant="h6">Live Cases by Country</Typography>
      <Box className={classes.table}>
        <table>
          <tbody>
            {sortedData.map(country => (
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
    color: '#6a5d5d',
  },
  tr: {
    display: 'flex',
    justifyContent: 'space-between',
    '&:nth-of-type(odd)': {
      backgroundColor: '#f3f2f8',
    },
  },
  td: {
    padding: '0.5rem',
  },
});