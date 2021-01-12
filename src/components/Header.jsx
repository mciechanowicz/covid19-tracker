import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, FormControl, Select, Typography, Box, Switch } from '@material-ui/core';

const Header = ({ country, onCountryChange, countries, handleDarkMode, darkMode }) => {
  const classes = useStyles();

  const alphabeticallySortedCountries = countries.sort((a,b) =>
    (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0
  );

  return (
    <Box className={classes.container}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <img
          className={classes.image}
          src={require('../assets/images/cov-19.png')}
          width="50"
          height="50"
          alt="Covid-19"
        />
        <Typography variant="h4">Covid-19 Tracker</Typography>
      </Box>
      <Box className={classes.options}>
        <Switch
          checked={darkMode}
          onChange={handleDarkMode}
        />
        <FormControl>
          <Select
            value={country}
            variant="outlined"
            onChange={onCountryChange}
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {alphabeticallySortedCountries.map(country => (
              <MenuItem key={country.name} value={country.code}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Header;


const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  image: {
    marginRight: '10px',
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
