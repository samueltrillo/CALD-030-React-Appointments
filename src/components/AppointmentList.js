import React, { Component } from 'react'

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
                    <button onClick={() => console.log(this.props.appointment.id)}>Update</button>
                </td>
                <td>
                    <button onClick={this.props.deleteAppointment.bind(this, id)}>Delete</button>
                </td>
            </tr>
        )
    }
}


export default AppointmentList
