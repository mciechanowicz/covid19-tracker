import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { Table, LineGraph } from './';

const Sidebar = ({ countries, type }) => {
  return (
    <Card>
      <CardContent>
        <Table countries={countries} />
        <LineGraph type={type} />
      </CardContent>
    </Card>
  );
};

export default Sidebar;
