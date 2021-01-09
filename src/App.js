import React, { useEffect, useState } from 'react';
import { Card, CardContent, Paper, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Map from './components/Map';
import Table from './components/Table'
import LineGraph from './components/LineGraph'
import Header from './components/Header';
import Stats from './components/Stats';
import "leaflet/dist/leaflet.css";

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'


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
    fetch('https://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(data =>  {
        const countries = data.map(country => (
          {
            name: country.country,
            code: country.countryInfo.iso2,
            cases: country.cases,
          }
        ))
        setCountries(countries)
        setMapCountries(data);
      })
  }, []);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data);
      });
  }, []);

  const onCountryChange = async (event) => {
    const contryCode = event.target.value;
  
    if (contryCode === 'worldwide') {
      setCountry('worldwide');
      return false;
    };

    fetch(`https://disease.sh/v3/covid-19/countries/${contryCode}`)
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
        <Container className={classes.app_left_side}>
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
        </Container>
        <Card>
          <CardContent>
            <Table countries={countries} />
            <Typography variant="h6">
              Worldwide new cases
            </Typography>
            <LineGraph type={type} />
          </CardContent>
        </Card>
      </Paper>
    </ThemeProvider>
  );
};

export default App;

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    justifyContent: 'space-evenly',
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
