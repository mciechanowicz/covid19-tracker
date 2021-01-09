import numeral from 'numeral';

export const formatData = (data) => {
  return numeral(data).format("0,0");
};

export const formatDataSecondFormat = (data) => {
  return numeral(data).format("+0.0a");
};

export const formatDataThirdFormat = (data) => {
  return numeral(data).format("+0,0");
};
 
export const formatDataFourthFormat = (data) => {
  return numeral(data).format("0a");
};