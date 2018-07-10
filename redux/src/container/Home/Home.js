import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
      return (
    <div className="template-page sidebar-collapse">
        <nav className="navbar navbar-expand-lg bg-primary fixed-top " color-on-scroll="400">
        <div className="container">
            <div className="navbar-translate">
                <a className="navbar-brand" href="http://demos.creative-tim.com/now-ui-kit/index.html" rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom">
                    Coin Marketcap
                </a>
                <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="../assets/img/blurred-image-1.jpg">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/api">
                            <p>Profile</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Login">
                            <p>Login</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim">
                            <i className="fab fa-twitter fa-2x"></i>
                            <p className="d-lg-none d-xl-none">&nbsp;&nbsp;Twitter</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim">
                            <i className="fab fa-facebook-square fa-2x"></i>
                            <p className="d-lg-none d-xl-none">&nbsp;&nbsp;Facebook</p>
                        </a>   
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial">
                            <i className="fab fa-instagram fa-2x"></i>
                            <p className="d-lg-none d-xl-none">&nbsp;&nbsp;Instagram</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
      );
    }
  }
  
  export default Home;