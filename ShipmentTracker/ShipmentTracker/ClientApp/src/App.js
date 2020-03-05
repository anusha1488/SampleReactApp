import React from 'react';
import { Route } from 'react-router';
import '@progress/kendo-theme-default/dist/all.css';
import Layout from './components/Layout';
import { ShipmentDetail } from './components/ShipmentDetail';
import { ShipmentList } from './components/ShipmentList';

export default () => (
    <Layout>
        <Route exact path='/' component={ShipmentList} />
        <Route path='/ShipmentDetail' component={ShipmentDetail} />
    </Layout>
);
