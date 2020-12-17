import React, { Component } from 'react';
import appointmentData from '../src/data/appointments.json';
import Header from './components/Header';
import Appointments from './components/Appointments';
import Aside from './components/Aside';
import AddAppointment from './components/AddAppointment';
import EditAppointment from './components/EditAppointment'
import './css/app.css';


export class App extends Component {
  state={
    appointments: appointmentData,
    appointment: {},
  };

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

  selectItem = (id) => {
    const appointmentsEdit = this.state.appointments.find(appointment => appointment.id === id)
    this.setState({ appointment: appointmentsEdit });
  }

  updateItem = (appointmentUpdate) => {
    const appointmentPosition = this.state.appointments.map((appointment) => 
      appointment.id
    ).indexOf(appointmentUpdate.id)
    const appointmentsUpdate = this.state.appointments;
    appointmentsUpdate[appointmentPosition]=appointmentUpdate;
    this.setState({appointments: appointmentsUpdate})
  }
  
  render() {
    return  (
      <div className='box1'>
        <Aside />
        <div className='box2'>
          <div>
            <Header />
            <Appointments appointments={this.state.appointments}
            deleteAppointment={this.deleteAppointment}
            selectItem={this.selectItem}/>
            <AddAppointment addAppointment={this.addAppointment}
            appointments={this.state.appointments}/>
            <EditAppointment appointment={this.state.appointment}
            updateItem={this.updateItem}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
