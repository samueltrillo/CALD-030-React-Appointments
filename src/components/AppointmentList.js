import React, { Component } from 'react';
import '../css/appointments.css';
import propTypes from 'prop-types';

export class AppointmentList extends Component {
    render() {
        const {
            id,
            building,
            boiler,
            technician,
            start_timestamp,
            end_timestamp,
            monthly_hours,
            maintainceType
        } = this.props.appointment;
        return  (
            <tr style={{height: '40px', textAlign: 'center'}}>
                <td>{id}</td>
                <td>{building}</td>
                <td>{boiler}</td>
                <td>{technician}</td>
                <td>{start_timestamp}</td>
                <td>{end_timestamp}</td>
                <td>{monthly_hours}</td>
                <td>{maintainceType}</td>
                <td>
                    <button onClick={() => this.props.selectItem(id)}>Update</button>
                </td>
                <td>
                    <button onClick={() => this.props.deleteAppointment(id)}>Delete</button>
                </td>
            </tr>
        )
    }
}

AppointmentList.propTypes = {
    appointment: propTypes.array.isRequired
}

export default AppointmentList
