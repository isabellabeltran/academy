import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleDonation() {
    this.props.history.push('/Donate');
  }

  render() {
    return (
      <div className="header">
        <div className="header__video">
        </div>
        <div className="header__heading">
          <div className="primaryHeading">Building dreams for those without means</div>
          <div className="secondaryHeading">100% of donations educate students</div>
          <div className="header__heading--donate" onClick={this.handleDonation.bind(this)}>Give Monthly</div>
        </div>
        <div className="header__greeting">
          <div className="primaryHeading">Welcome to Jijenge</div>
          <div className="secondaryHeading">We're an East Africa-focused, digital skills vocational program </div>
          <div className="secondaryHeading">that trains students to achieve technology careers regardless of their background. </div>
          <div className="secondaryHeading">We believe education empowers and creates lasting change within a community</div>
        </div>
      </div>
    )
  }
}