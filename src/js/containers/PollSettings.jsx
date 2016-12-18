import React from "react";
import InputWithControls from "../components/InputWithControls.jsx";
import DropdownInput from "../components/DropdownInput.jsx";
import CountryList from "../data/countryList.jsx";

class PollSettings extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      telegramInput: <InputWithControls first={true} placeholder="@telegramusername"/>,
      emailInput: <InputWithControls first={true} placeholder="myemail@example.com"/>,
      countryInput: <DropdownInput data={CountryList}/>
    };
  }

  render(){
    if(this.props.show){
      return <div className="settings">
        <label className="label">Your telegram username(for notifications)</label>
        {this.state.telegramInput}
        <label className="label">Your e-mail(for notifications)</label>
        {this.state.emailInput}
        <label className="label">Only for this country</label>
        {this.state.countryInput}
        <p className="control" style={{marginTop: "5px"}}>
          <label className="checkbox" htmlFor="ispublic">
            <input type="checkbox" onChange={()=>{}} id="ispublic" defaultChecked={true}></input>
            Is public
          </label>
        </p>
      </div>
    }

    return false;
  }
}

export default PollSettings;
