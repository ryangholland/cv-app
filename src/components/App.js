import React, { Component } from "react";
import uniqid from "uniqid";
import "./App.css";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        name: "John Doe",
        address: "555 Street Ln.",
        city: "New Fake City",
        state: "NY",
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
      workExperience: [
        {
          id: uniqid(),
          name: "Fake Workplace",
          city: "Notrealshire",
          state: "FL",
          title: "Grunt",
          startDate: "February 2013",
          endDate: "June 2016",
          extraInfo: [
            {
              id: uniqid(),
              text: "Slaved away for the boss",
            },
            {
              id: uniqid(),
              text: "Did work-related things",
            },
            {
              id: uniqid(),
              text: "Three-time employee of the month",
            },
          ],
        },
        {
          id: uniqid(),
          name: "Another Fake Workplace",
          city: "New Fake City",
          state: "NY",
          title: "CEO",
          startDate: "July 2016",
          endDate: "Present",
          extraInfo: [
            {
              id: uniqid(),
              text: "Made difficult fake decisions",
            },
            {
              id: uniqid(),
              text: "Raised profits by an arbitrary percent",
            },
            {
              id: uniqid(),
              text: "Led the merger and acquistion of Fake Workplace",
            },
          ],
        },
      ],
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
          {this.state.workExperience.map((workplace) => {
            return <WorkExperience key={workplace.id} info={workplace} />;
          })}
        </div>
      </>
    );
  }
}

export default App;
