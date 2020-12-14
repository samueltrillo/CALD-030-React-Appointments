import React, { Component } from 'react'
import '../css/aside.css';

export class Aside extends Component {
    render() {
        return (
            <aside>
                <div className='caldar'>
                    <h3>
                        CaldAR
                    </h3>
                </div>
                <div className='nav'>
                    <ol>
                        <li>
                            <a href="#">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Technicians
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Customers
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Reports
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Settings
                            </a>
                        </li>
                    </ol>
                </div>
            </aside>
        )
    }
}

export default Aside
