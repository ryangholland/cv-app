import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <h1>John Doe</h1>
          <p>Full address - City, State, Zip - Phone Number - Email</p>
        </div>
        <hr />
        <div>
          <h2>Education:</h2>
          <div>
            <div>
              <h3>University of Minnesota</h3>
              <p>City, State</p>
            </div>
            <div>
              <h4>College of Design</h4>
              <p>May 2011</p>
            </div>
            <ul>
              <li>Bachelor of Science in Graphic Design</li>
              <li>Cumulative GPA 3.93, Dean's List</li>
              <li>Twin Cities Iron Range Scholarship</li>
            </ul>
          </div>
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
              <li>Collaborated with the store merchandiser creating displays to attract clientele</li>
              <li>Use trend awareness to assist customers in shopping experience</li>
              <li>Thoroughly scan every piece of merchandise for inventory controll</li>
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
              <li>Collaborated with the store merchandiser creating displays to attract clientele</li>
              <li>Use trend awareness to assist customers in shopping experience</li>
              <li>Thoroughly scan every piece of merchandise for inventory controll</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default App;
