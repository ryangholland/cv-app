import React, { Component } from "react";
import uniqid from "uniqid";
import "./App.css";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        name: "John Doe",
        address: "555 Street Ln.",
        city: "Cityville",
        state: "FL",
        zip: "12345",
        phone: "(555) 555-5555",
        email: "john@doe.com",
      },
      education: [
        {
          id: uniqid(),
          name: "Fake University",
          city: "Faketown",
          state: "FL",
          field: "Computer Science",
          gradDate: "May 2016",
          extraInfo: [
            {
              id: uniqid(),
              text: "Bachelor of Science",
            },
            {
              id: uniqid(),
              text: "4.0 GPA",
            },
            {
              id: uniqid(),
              text: "Smart Person Club President",
            },
          ],
        },
      ],
      workExperience: [{}],
    };
  }

  render() {
    return (
      <>
        <GeneralInfo info={this.state.generalInfo} />
        <hr />
        <div>
          <h2>Education:</h2>
          {this.state.education.map((school) => {
            return <Education key={school.id} info={school} />;
          })}
        </div>
        <hr />
        <div>
          <h2>Work Experience:</h2>
          <div>
            <div>
              <h3>American Eagle</h3>
              <p>City, State</p>
            </div>
            <div>
              <h4>Sales Associate</h4>
              <p>July 2009 - Present</p>
            </div>
            <ul>
              <li>
                Collaborated with the store merchandiser creating displays to
                attract clientele
              </li>
              <li>
                Use trend awareness to assist customers in shopping experience
              </li>
              <li>
                Thoroughly scan every piece of merchandise for inventory
                controll
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h3>Wendy's</h3>
              <p>City, State</p>
            </div>
            <div>
              <h4>Sales Associate</h4>
              <p>July 2004 - July 2009</p>
            </div>
            <ul>
              <li>
                Collaborated with the store merchandiser creating displays to
                attract clientele
              </li>
              <li>
                Use trend awareness to assist customers in shopping experience
              </li>
              <li>
                Thoroughly scan every piece of merchandise for inventory
                controll
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default App;
