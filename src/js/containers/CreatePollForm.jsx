import React from "react";
import InputWithControls from "../components/InputWithControls.jsx";
import DropdownInput from "../components/DropdownInput.jsx";
import PollSettings from "./PollSettings.jsx";

class CreatePollForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      last: 2,
      inputs: [<InputWithControls first={true}/>, <InputWithControls/>, <InputWithControls/>]
    }

    this.componentWillMount = this.componentWillMount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addInput = this.addInput.bind(this);
  }

  componentWillMount(){

  }

  onSubmit(event){
    event.preventDefault()
  }

  addInput(){
    let tmp = this.state.inputs;
    tmp.push(<InputWithControls/>);
    this.setState({
      inputs: tmp
    })
  }

  render(){
    return <div className="create-poll-form">
      <form onSubmit={this.onSubmit}>
        <label className="label" htmlFor="question">Question*</label>
        <p className="control">
          <input className="input main" id="question" type="text" placeholder="Write your question?"></input>
        </p>
        <div className="options">
          <label className="label">Options*</label>
          {this.state.inputs}
          <span className="ion-android-add-circle add-input-icon" onClick={this.addInput}></span>
        </div>
        <PollSettings show={true}/>
        <div className="subtitle" style={{marginTop: "10px"}}>
          <button type="submit" className="button no-border is-large btn full-width">
            Create Poll
          </button>
        </div>
      </form>
    </div>
  }
}

export default CreatePollForm;
