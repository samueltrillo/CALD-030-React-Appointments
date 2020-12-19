import React, { Component } from 'react'
import '../css/add-edit-form.css'

export class EditAppointment extends Component {
    state = {
        id: '',
        building: '',
        boiler: '',
        technician:'',
        start_timestamp:'',
        end_timestamp:'',
        monthly_hours:'',
        maintainceType:'',
        appointment: {},
    }

    componentDidUpdate (prevProps) { 
        if (this.props.appointment !== prevProps.appointment) {
            this.setState({
                id: this.props.appointment.id,
                building: this.props.appointment.building,
                boiler: this.props.appointment.boiler,
                technician: this.props.appointment.technician,
                start_timestamp: this.props.appointment.start_timestamp,
                end_timestamp: this.props.appointment.end_timestamp,
                monthly_hours: this.props.appointment.monthly_hours,
                maintainceType: this.props.appointment.maintainceType
            })
        } 
    }


    onSubmit = (e) => {
        if (!this.state.id) {
            e.preventDefault();
            this.props.addAppointment([
                this.state.id,
                this.state.building,
                this.state.boiler,
                this.state.technician,
                this.state.start_timestamp,
                this.state.end_timestamp,
                this.state.monthly_hours,
                this.state.maintainceType
            ]);
        } else {
            console.log('Update function');
            e.preventDefault();
            this.props.updateItem(
                this.state
            );
        }  
        this.setState({
            id: '',
            building: '',
            boiler: '',
            technician:'',
            start_timestamp:'',
            end_timestamp:'',
            monthly_hours:'',
            maintainceType:''
        });
    }

    onChange = (e) => this.setState({ 
        [e.target.name]: e.target.value
    });
    
    render() {
        return (
            <div>
                <div>
                <div className='add-box'>
                    <h2>
                        Edit appointment
                    </h2>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-box1'>
                            <p>
                                Building
                            </p>
                            <input
                                name='building'
                                value={this.state.building}
                                onChange={this.onChange}
                            />
                            <p>
                                Boiler
                            </p>
                            <input
                                name='boiler'
                                value={this.state.boiler}
                                onChange={this.onChange}
                            />
                            <p>
                                Technician
                            </p>
                            <input
                                name='technician'
                                type='text' value={this.state.technician}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className='form-box1'>
                            <p>
                                Start time
                            </p>
                            <input
                                name='start_timestamp'
                                type='text' value={this.state.start_timestamp}
                                onChange={this.onChange}
                            />
                            <p>
                                End time
                            </p>
                            <input
                                name='end_timestamp'
                                type='text' value={this.state.end_timestamp}
                                onChange={this.onChange}
                            />
                            <p>
                                Monthly hours
                            </p>
                            <input
                                name='monthly_hours'
                                type='text' value={this.state.monthly_hours}
                                onChange={this.onChange}
                            />
                            <p>
                                Maintaince type
                            </p>
                            <input
                                name='maintainceType'
                                type='text' value={this.state.maintainceType}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className='btn'>
                        <input type='submit' value='Submit'/>
                    </div>
                    </form>
                </div>
            </div>
                
            </div>
        )
    }
}

export default EditAppointment
