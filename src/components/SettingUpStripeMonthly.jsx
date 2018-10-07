import React, { Component } from 'react';  
import { Elements } from 'react-stripe-elements';
import MonthlyDonate from './MonthlyDonate.jsx';

class SettingUpStripeMonthly extends Component {
  constructor() {
    super();
  }

  render() {
  return (
    <div>
      <Elements>
        <MonthlyDonate history={this.props.history} /> 
      </Elements>
    </div> 
    );
  }
}

export default SettingUpStripeMonthly;