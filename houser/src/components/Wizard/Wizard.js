import React, { Component } from "react";
import { Link } from "react-router-dom";
class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleAddressChange(e) {
    this.setState({
      address: e.target.value
    });
  }

  handleCityChange(e) {
    this.setState({
      city: e.target.value
    });
  }

  handleStateChange(e) {
    this.setState({
      state: e.target.value
    });
  }

  handleZipcodeChange(e) {
    this.setState({
      zipcode: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={e => this.handleNameChange(e)} />
          <input onChange={e => this.handleAddressChange(e)} />
          <input onChange={e => this.handleCityChange(e)} />
          <input onChange={e => this.handleStateChange(e)} />
          <input onChange={e => this.handleZipcodeChange(e)} />
        </form>

        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
