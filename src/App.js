import React, { useEffect, useState } from 'react';
import { Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { Header, Map, Stats, Sidebar } from './components';
import { BASE_API_URL, COUNTRIES, ALL } from './config/api';


const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [type, setType] = useState('cases');
  const [mapCenter, setMapCenter] = useState({ lat: 34, lng: 10 });
  const [mapZoom, setMapZoom] = useState(2);
  const [mapCountries, setMapCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    fetch(BASE_API_URL + COUNTRIES)
      .then(response => response.json())
      .then(data =>  {
        const countries = data.map(country => (
          {
            name: country.country,
            code: country.countryInfo.iso2,
            cases: country.cases,
          }
        ));

        setCountries(countries)
        setMapCountries(data);
      })
  }, []);

  useEffect(() => {
    fetch(BASE_API_URL + ALL)
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data);
      });
  }, []);

  const onCountryChange = (event) => {
    const contryCode = event.target.value;

    fetch(BASE_API_URL + COUNTRIES + `/${contryCode}`)
      .then(response => response.json())
      .then(data => {
        setCountry(contryCode);
        setCountryInfo(data);
        setMapCenter({ lat: data.countryInfo.lat, lng: data.countryInfo.long });
        setMapZoom(3);
      });
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const setDataType = (type) => {
    setType(type);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.app}>
        <Box className={classes.app_left_side}>
          <Header
            countries={countries}
            country={country}
            onCountryChange={onCountryChange}
            handleDarkMode={handleDarkMode}
            darkMode={darkMode}
          />
          <Stats
            setDataType={setDataType}
            countryInfo={countryInfo}
          />
          <Map
            casesType={type}
            countries={mapCountries}
            mapCenter={mapCenter}
            mapZoom={mapZoom}
          />
        </Box>
        <Sidebar
          countries={countries}
          type={type}
        />
      </Paper>
    </ThemeProvider>
  );
};

export default App;

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flex: 1,
    padding: '20px',
    height: '100vh',
   [ theme.breakpoints.down('sm')]: {
     flexDirection: 'column',
     height: '100%',
   },
  },
  app_left_side: {
    flex: 0.9,
  },
}));
