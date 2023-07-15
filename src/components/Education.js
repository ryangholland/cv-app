import React, { Component } from "react";

class Education extends Component {
  
  render() {
    const { info } = this.props;

    return (
      <div>
        <div>
          <h3>{info.name}</h3>
          <p>
            {info.city}, {info.state}
          </p>
        </div>
        <div>
          <h4>{info.field}</h4>
          <p>{info.gradDate}</p>
        </div>
        <ul>
          {info.extraInfo.map((item) => {
            return <li key={item.id}>{item.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Education;
