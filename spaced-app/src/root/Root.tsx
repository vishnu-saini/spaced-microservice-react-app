import React from 'react';
import SearchContainer from './search/SearchContainer';
import CheckoutContainer from './checkout/CheckoutContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TicketContainer from './tickets/TicketContainer';

const Root: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact={true} component={SearchContainer} />
      <Route path="/checkout" exact={true} component={CheckoutContainer} />
      <Route path="/tickets" exact={true} component={TicketContainer} />
    </Router>
  );
};

export default Root;
