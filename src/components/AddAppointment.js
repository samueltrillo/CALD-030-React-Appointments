import React, { Component } from 'react'
import '../css/add-form.css'

export class AddAppointment extends Component {
    render() {
        return (
            <div>
                <div className='add-box'>
                    <h2>
                        Add appointment
                    </h2>
                    <form>
                        <div className='form-box1'>
                            <p>
                                Id
                            </p>
                            <input />
                            <p>
                                Building
                            </p>
                            <input />
                            <p>
                                Boiler
                            </p>
                            <input />
                            <p>
                                Technician
                            </p>
                            <input type='text'/>
                        </div>
                        <div className='form-box1'>
                            <p>
                                Start time
                            </p>
                            <input type='text'/>
                            <p>
                                End time
                            </p>
                            <input type='text'/>
                            <p>
                                Monthly hours
                            </p>
                            <input type='text'/>
                            <p>
                                Maintaince type
                            </p>
                            <input type='text'/>
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
