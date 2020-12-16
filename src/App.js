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

  addAppointment= ([
    id,
    building,
    boiler,
    technician,
    start_timestamp,
    end_timestamp,
    monthly_hours,
    maintainceType
  ]) => {
    const newAppointment = {
      id,
      building,
      boiler,
      technician,
      start_timestamp,
      end_timestamp,
      monthly_hours,
      maintainceType
    }
    this.setState({ appointments: [...this.state.appointments, newAppointment]});
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
            <AddAppointment addAppointment={this.addAppointment}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
