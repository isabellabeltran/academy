import React, { Component } from 'react'; 

export default class Meaning extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="section-meaning__header">
          <div className="primaryHeading">Jijenge</div>
          <div className="secondaryHeading">[ji-jehn-geh]</div>
          <div className="secondaryHeading">verb</div>
          <div className="secondaryHeading">1. build yourself, build your future</div>
        </div> 
        <div className="row">
          <div className="col-1-of-3">
            <div className="meaning-cards">
              <div className="meaning-cards__picture--1"></div>
              <div className="meaning-cards__content">
              <div className="meaning-cards__content--title">Basic Education</div>
              <div className="meaning-cards__content--subtitle">Local education partners deliver basic reading, writing and math skills</div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="meaning-cards">
              <div className="meaning-cards__picture--2"></div>
              <div className="meaning-cards__content">
                <div className="meaning-cards__content--title">Vocational Computer Training</div>
                <div className="meaning-cards__content--subtitle">Jijenge trains students in remote work computer tasks like image annotation, data entry, and ad-logging</div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="meaning-cards">
              <div className="meaning-cards__picture--3"></div>
              <div className="meaning-cards__content">
                <div className="meaning-cards__content--title">Career Acceleration</div>
                <div className="meaning-cards__content--subtitle">Jijenge works to place students in computer jobs with strong upward mobility potential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}