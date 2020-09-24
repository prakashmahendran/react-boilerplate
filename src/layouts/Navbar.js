import React, { Component } from 'react';
import { searchPeople } from '../actions/people';
import { connect } from 'react-redux';

class Navbar extends Component {
    searchPerson(e) {
        e.preventDefault();
        console.log("this.textInput.value", this.textInput.value);
        this.props.dispatch(searchPeople(this.textInput.value));
    }
    render() {
        return (
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>
                  </button>
                  <a to="/" className="navbar-brand">Home</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                  <form className="navbar-form navbar-left" role="search" onSubmit={this.searchPerson.bind(this)}>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Search" ref={(input) => { this.textInput = input; }} />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                  </form>
                </div>
              </div>
            </nav>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Navbar);
