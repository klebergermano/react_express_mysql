import React, { Component } from "react";
class Services extends Component {
  constructor() {
    super();
    this.state = {
      services: []
    };
  }

  componentDidMount() {
    fetch("/api/services")
      .then(res => res.json())
      .then(services => this.setState({ services }));
  }

  render() {
    return (
      <div>
        <h1>Services</h1>
        <ul>
          {this.state.services.map(service => (
            <li key={service.id}>{service.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Services;
