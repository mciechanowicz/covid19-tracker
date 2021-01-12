import React from 'react'
import { Box, Typography } from '@material-ui/core';
import { Map as LeafletMap, TileLayer, Circle, Popup } from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';

import { formatData } from '../utils/formatData';
import colors from '../config/colors';

const casesTypes = {
  cases: {
    color: colors.PRIMARY_RED,
    multiplier: 600,
  },
  recovered: {
    color: colors.PRIMARY_GREEN,
    multiplier: 1000,
  },
  deaths: {
    color: colors.SECONDARY_RED,
    multiplier: 1800,
  },
};



const showDataOnMap = (data, casesType = 'cases') => (
  data.map((country) => (
    <Circle
      key={country.country}
      center={{ lat: country.countryInfo.lat, lng: country.countryInfo.long }}
      color={casesTypes[casesType].color}
      fillColor={casesTypes[casesType].color}
      fillOpacity={0.4}
      radius={Math.sqrt(country[casesType]) * casesTypes[casesType].multiplier}
    >
      <Popup>
        <Box>
          <Box
            style={{ backgroundImage: `url(${country.countryInfo.flag})`, ...flagStyles }}
          />
          <Typography variant="subtitle2">{country.country}</Typography>
          <Typography variant="subtitle2">Cases: {formatData(country.cases)}</Typography>
          <Typography variant="subtitle2">Recovered: {formatData(country.recovered)}</Typography>
          <Typography variant="subtitle2">Deaths: {formatData(country.deaths)}</Typography>
        </Box>
      </Popup>
    </Circle>
  ))
);

const Map = ({ mapCenter, mapZoom, countries, casesType }) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.container}
    >
      <LeafletMap
        className={classes.map}
        style={{height: '100%'}}
        center={mapCenter}
        zoom={mapZoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </Box>
  )
};

export default Map

const useStyles = makeStyles((theme) => ({
  container: {
    height: '350px',
    padding: '1rem',
    borderRadius: '20px',
    marginTop: '16px',
    boxShadow: '0 0 8px -4px rgba(0, 0, 0, 0.5)',
    backgroundColor: theme.palette.type !== 'light' ? colors.BACKGROUND : '#fff',
  },
  map: {
    height: '100%',
    borderRadius: '12px',
  },
}));

const flagStyles = {
  height: '80px',
  width: '100%',
  backgroundSize: 'contain',
  marginBottom: '5px',
  backgroundRepeat: 'no-repeat',
};
