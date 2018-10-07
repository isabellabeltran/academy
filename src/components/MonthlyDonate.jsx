import React, { Component } from 'react';
import axios from 'axios'; 
import { CardElement, injectStripe } from 'react-stripe-elements'; 
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';
import donate1 from '../images/donateMonthly1.jpg';
import donate2 from '../images/donateMonthly2.jpg';

class Donate extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      name: '',
      lastname: '',
      email: '',
      amount: '', 
      frequency: '',
      amount: '',
      bgColor25: 'none',
      bgColor50: 'none',
      bgColor75: 'none',
      bgColor100: 'none',
      frequency: 'monthly'
    }
  }

  handleState = (e) => {
    const {name, value} = e.target;
    this.setState(
      {[name]: value}
    );
  } 

  handleAmount(e) {
    const { name, value } = e.target; 
    this.setState({
      amount: parseInt(value) * 100,
      bgColor25: '#69C9CA',
      bgColor50: '#69C9CA',
      bgColor75: '#69C9CA',
      bgColor100: '#69C9CA'
    });
  }
    
  handleTwentyfive = () => {   
    this.setState({
      amount: 2500, 
      bgColor25: '#8F67BD',
      bgColor50: '#69C9CA',
      bgColor75: '#69C9CA',
      bgColor100: '#69C9CA'
    });
  }

  handleFifty = (e) => {  
    this.setState({
      amount: 5000,
      bgColor50: '#8F67BD',
      bgColor25: '#69C9CA',
      bgColor75: '#69C9CA',
      bgColor100: '#69C9CA'
    });
  }

  handleSeventyfive = () => {
    this.setState({
      amount: 7500,
      bgColor75: '#8F67BD',
      bgColor25: '#69C9CA',
      bgColor50: '#69C9CA',
      bgColor100: '#69C9CA'
    });
  }

  handleHundred = () => {
    this.setState({
      amount: 10000,
      bgColor100: '#8F67BD',
      bgColor25: '#69C9CA',
      bgColor50: '#69C9CA',
      bgColor75: '#69C9CA',
    });
  }

  toggleToMonthly = async() => {
    const { frequency } = this.state; 
    if (frequency === 'monthly') {
      this.setState({frequency: 'one time'});
    } else {
      this.setState({frequency: 'monthly'});
    }
  }

  submitMonthly = async(ev) => {
    ev.preventDefault(); 
    const { history } = this.props; 
    try {
      let {token} = await this.props.stripe.createToken({name: this.state.name});
      let body = {
        name: this.state.name,
        lastname: this.state.lastname, 
        email: this.state.email,
        token: token.id,
        amount: this.state.amount
      }
      let { data } = await axios.post('http://localhost:3000/api/stripe/monthlyDonation', body); 
      if (data.length) {
        alert('Thank you for your donation!'); 
        history.push('/VisitAfrica'); 
      }
    } catch(err) {
      throw err; 
    }
  }

  render() {
    return (
      <div>
        <div>
          <Navigation /> 
        </div>
        <main>
        <div className="donateBackground">
          <div className="donateBackground__heading">
            <div className="donateHeaderContainer">
              <div className="primaryHeading">
                Thank you for your donation
              </div>
              <div className="secondaryHeading">
                100% of your money empowers students through education
              </div>
            </div>
          </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="donationForm">
              <div className="donationForm__formLabel">Personal Information</div>
              <div className="donationForm__information">
                <form>
                  <input className="donationForm__information--input" placeholder="First name" name="name" required onChange={this.handleState.bind(this)} />
                  <input className="donationForm__information--input" placeholder="Last name" name="lastname" required onChange={this.handleState.bind(this)} />
                  <input className="donationForm__information--input" placeholder="Email" name="email" required onChange={this.handleState.bind(this)} />
                </form>
              </div>
              <div className="donationForm__formLabel">Payment Information</div>
              <div className="donationForm__donation">
                <div className="donationForm__amounts">
                <label className="amount__container--donationLabel">Select amount</label>
                  <div className="donationForm__amounts--btn" onClick={this.handleTwentyfive.bind(this)} style={{backgroundColor:this.state.bgColor25}}>$25</div>
                  <div className="donationForm__amounts--btn" onClick={this.handleFifty.bind(this)} style={{backgroundColor:this.state.bgColor50}}>$50</div>
                  <div className="donationForm__amounts--btn" onClick={this.handleSeventyfive.bind(this)} style={{backgroundColor:this.state.bgColor75}}>$75</div>
                  <div className="donationForm__amounts--btn" onClick={this.handleHundred.bind(this)} style={{backgroundColor:this.state.bgColor100}}>$100</div>
                  <div className="amount">
                    <form>
                    <label className="amount__container--donationLabel">Other</label>
                      <div className="amount__container">
                        <label className="amount__container--label">$</label>
                        <input className="amount__container--input" onChange={this.handleAmount.bind(this)}/>
                        <label className="amount__container--label">USD</label>
                      </div>
                      <div className="question">
                        <label className="switch">
                          <input type="checkbox" onClick={this.toggleToMonthly}/>
                          <span className="slider round"></span>
                        </label>
                        <label className="question__container">Donate monthly</label>
                      </div>
                    </form>
                  </div>
                </div>
                <CardElement style={{base: {fontSize: '15px', fontFamily: 'Ubuntu'}}}/>
              </div>
                <div className="donationForm__button" onClick={this.submitMonthly.bind(this)}>Donate</div>
            </div>
          </div>
          <div className="col-1-of-2">
          <div className="composition">
            <img className="composition__photo composition__photo--p1" src={donate1}/>
            <img className="composition__photo composition__photo--p2" src={donate2}/>
          </div>
          </div>
        </div>
        </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default injectStripe(Donate); 