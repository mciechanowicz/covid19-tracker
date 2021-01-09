import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import InfoBox from './InfoBox';

import { formatDataSecondFormat } from '../utils/formatData';


const Stats = ({ countryInfo, setDataType }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <InfoBox
        type="cases"
        onClick={() => setDataType('cases')}
        title="Covid cases"
        cases={formatDataSecondFormat(countryInfo.todayCases)}
        total={formatDataSecondFormat(countryInfo.cases)}
      />
      <InfoBox
        type="recovered"
        onClick={() => setDataType('recovered')}
        title="Recovered"
        cases={formatDataSecondFormat(countryInfo.todayRecovered)}
        total={formatDataSecondFormat(countryInfo.recovered)}
      />
      <InfoBox
        type="deaths"
        onClick={() => setDataType('deaths')}
        title="Deaths"
        cases={formatDataSecondFormat(countryInfo.todayDeaths)}
        total={formatDataSecondFormat(countryInfo.deaths)}
      />
    </Box>
  );
};

export default Stats;

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
