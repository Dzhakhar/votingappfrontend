import React from "react";

class InputWithControls extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      show: true
    }
  }

  render(){
    if(this.state.show){
      return <p className="control">
        <input {...this.props} className="input" id="question" type="text" placeholder={(this.props.placeholder) ? this.props.placeholder : "Option"}></input>
        {(!this.props.first) ? <span onClick={()=>{this.setState({show: false})}} className="icon ion-android-cancel"></span> : false}
      </p>
    }

    return false;
  }
}

export default InputWithControls;
