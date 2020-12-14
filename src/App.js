import React, { Component } from 'react';
import appointments from '../src/data/appointments.json';
import Header from './components/Header';
import Appointments from './components/Appointments';
import Aside from './components/Aside';
import AddAppointment from './components/AddAppointment';
import './css/app.css';


export class App extends Component {
  state={appointments};

  deleteAppointment= (id) => {
    this.setState({appointments: [...this.state.appointments.filter(appointments =>
      appointments.id !== id)]});
  }
  
  render() {
    return  (
      <div className='box1'>
        <Aside />
        <div className='box2'>
          <div>
            <Header />
            <Appointments appointments={this.state.appointments}
            deleteAppointment={this.deleteAppointment}/>
            <AddAppointment />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
