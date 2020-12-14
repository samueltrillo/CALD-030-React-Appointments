import React, { Component } from 'react';
import AppointmentList from './AppointmentList';
import propTypes from 'prop-types';

class Appointments extends Component {
    render() {
        console.log(this.props.appointments)
        return (
            <div>
                <table style = {{ width: '100%'}}>
                        <tr>
                            <th>Id</th>
                            <th>Building</th>
                            <th>Boiler</th>
                            <th>Technician</th>
                            <th>Start time</th>
                            <th>End time</th>
                            <th>Montlhy hours</th>
                            <th>Maintaince type</th>
                        </tr>
                    <tbody>
                        {this.props.appointments.map((appointment) => 
                        <AppointmentList key={appointment.building} appointment={appointment}
                        deleteAppointment={this.props.deleteAppointment}/>
                        )}
                    </tbody>
                </table>
          </div>
        )
    }
}

Appointments.propTypes = {
    appointments: propTypes.array.isRequired
  }

export default Appointments
