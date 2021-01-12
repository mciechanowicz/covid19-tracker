import React, { useEffect, useState } from 'react';
import { Paper, Box, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { Header, Map, Stats, Sidebar } from './components';
import { BASE_API_URL, COUNTRIES, ALL } from './config/api';
import LoadingIndicator from './components/LoadingIndicator';


const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [type, setType] = useState('cases');
  const [mapCenter, setMapCenter] = useState({ lat: 34, lng: 10 });
  const [mapZoom, setMapZoom] = useState(2);
  const [mapCountries, setMapCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    setLoading(true);
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

        setCountries(countries);
        setMapCountries(data);
      });
      setLoading(false);
  }, []);

  useEffect(() => {
      fetchWorldCasesData();
  }, []);

  const fetchWorldCasesData = async () => {
    setLoading(true);
    const response = await fetch(BASE_API_URL + ALL);
    const data = await response.json();
    setCountryInfo(data);
    setLoading(false);
  };

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    
    if (countryCode !== 'worldwide') {
      setLoading(true);
      fetch(BASE_API_URL + COUNTRIES + `/${countryCode}`)
        .then(response => response.json())
        .then(data => {
          setCountry(countryCode);
          setCountryInfo(data);
          setMapCenter({ lat: data.countryInfo.lat, lng: data.countryInfo.long });
          setMapZoom(3);
        });
      setLoading(false);
    } else {
      fetchWorldCasesData();
      setCountry('worldwide');
    }
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  };

  const setDataType = (type) => {
    setType(type);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.app}>
        <LoadingIndicator loading={loading} />
        <Box className={classes.appLeftSide}>
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
  appLeftSide: {
    flex: 0.9,
  },
}));
