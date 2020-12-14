import React, { Component } from 'react';
import AppointmentList from './AppointmentList';
import propTypes from 'prop-types';
import '../css/appointments.css'

class Appointments extends Component {
    render() {
        return (
            <div>
                <div className='app-list'>
                    <table>
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
                            <AppointmentList key={appointment.id} appointment={appointment}
                            deleteAppointment={this.props.deleteAppointment}/>
                            )}
                        </tbody>
                    </table>
                </div>
          </div>
        )
    }
}

Appointments.propTypes = {
    appointments: propTypes.array.isRequired
}

export default Appointments
