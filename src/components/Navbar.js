import React, { Component } from 'react'
import logo from './logo.png'

import { Link } from 'react-router-dom';
export class Navbar extends Component {

    render() {
        return (
            <div>
                <figure className="text-center">
                    <blockquote className="blockquote"  >
                        <h1 style={{ fontFamily: 'roboto,sansarif', fontSize: '64px' }}> <em style={{ color: 'red' }}><img src={logo} alt="logo" width="65" height="65"   />
                            News</em><b style={{ color: '#0B122B' }}>DAILY</b></h1>
                    </blockquote>
                    <figcaption className="blockquote-footer" style={{ fontFamily: 'droid serif' }}>
                        JOURNALISM OF COURAGE
                    </figcaption>
                </figure>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/general">
                            <img src={logo} alt="logo" width="35" height="35" style={{borderRadius:"50%"}}className="d-inline-block align-text-top" />
                        </a>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav nav-underline">
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" exact to="/general">Home</Link></li><div className="vr" style={{ backgroundColor: 'white' }}></div>
                                <li className="nav-item"><Link className="nav-link" exact to="/business">Business</Link></li><div className="vr" style={{ backgroundColor: 'white' }}></div>
                                <li className="nav-item"><Link className="nav-link" exact to="/entertainment">Entertainment</Link></li><div className="vr" style={{ backgroundColor: 'white' }}></div>
                                <li className="nav-item"><Link className="nav-link" exact to="/health">Health</Link></li><div className="vr" style={{ backgroundColor: 'white' }}></div>
                                <li className="nav-item"><Link className="nav-link" exact to="/science">Science</Link></li><div className="vr" style={{ backgroundColor: 'white' }}></div>
                                <li className="nav-item"><Link className="nav-link" exact to="/sports">Sports</Link></li><div className="vr" style={{ backgroundColor: 'white' }}></div>
                                <li className="nav-item"><Link className="nav-link" exact to="/technology">Technology</Link></li><div className="vr" style={{ backgroundColor: 'white' }}></div>
                            </ul>  
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar