import React, { Component } from 'react'
import '../css/add-form.css'

export class AddAppointment extends Component {
    state = {
        id: '',
        building: '',
        boiler: '',
        technician:'',
        start_timestamp:'',
        end_timestamp:'',
        monthly_hours:'',
        maintainceType:''
    }

    onSubmit = (e) => {
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
                <div className='add-box'>
                    <h2>
                        Add appointment
                    </h2>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-box1'>
                            <p>
                                Id
                            </p>
                            <input name='id' value={this.state.id} onChange={this.onChange}/>
                            <p>
                                Building
                            </p>
                            <input name='building' value={this.state.building} onChange={this.onChange}/>
                            <p>
                                Boiler
                            </p>
                            <input name='boiler' value={this.state.boiler} onChange={this.onChange}/>
                            <p>
                                Technician
                            </p>
                            <input name='technician' type='text' value={this.state.technician} onChange={this.onChange}/>
                        </div>
                        <div className='form-box1'>
                            <p>
                                Start time
                            </p>
                            <input name='start_timestamp' type='text' value={this.state.start_timestamp} onChange={this.onChange}/>
                            <p>
                                End time
                            </p>
                            <input name='end_timestamp' type='text' value={this.state.end_timestamp} onChange={this.onChange}/>
                            <p>
                                Monthly hours
                            </p>
                            <input name='monthly_hours' type='text' value={this.state.monthly_hours} onChange={this.onChange}/>
                            <p>
                                Maintaince type
                            </p>
                            <input name='maintainceType' type='text' value={this.state.maintainceType} onChange={this.onChange}/>
                        </div>
                    </form>
                    <div className='btn'>
                        <input type='submit' value='Add appointment'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAppointment
