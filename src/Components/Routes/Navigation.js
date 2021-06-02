import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages';
import Routing from './Routing';

class Navigation extends Component {
  render(){
    return(
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
            <div className="container">
                <a className="navbar-brand text-uppercase fw-bold d-lg-none" href="index.html">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Pages />
                </div>
            </div>
        </nav>
        <Routing />
      </BrowserRouter>
    )
  }
}
export default Navigation;