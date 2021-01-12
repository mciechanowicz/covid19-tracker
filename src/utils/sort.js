export const sortDescending = (data) => {
  return data.sort((a,b) => b.cases - a.cases);
};
