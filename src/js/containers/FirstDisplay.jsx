import React from "react";
import CreatePollForm from "./CreatePollForm.jsx";

class FirstDisplay extends React.Component {
  render(){
    return <div className="hero-head first-display">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Create poll and share it EASILY!
          </h1>
          <CreatePollForm/>
        </div>
      </div>
    </div>
  }
}

export default FirstDisplay;
