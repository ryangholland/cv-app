import React, { Component } from "react";

class GeneralInfo extends Component {
  render() {
    const { info } = this.props;

    return (
      <div>
        <h1>{info.name}</h1>
        <p>
          {info.address} - {info.city}, {info.state} {info.zip} - {info.phone} -{" "}
          {info.email}
        </p>
      </div>
    );
  }
}

export default GeneralInfo;
