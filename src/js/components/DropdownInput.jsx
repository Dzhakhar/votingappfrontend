import React from "react";
import InputWithControls from "./InputWithControls.jsx";

class DropdownInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dataList: this.props.data || [],
      filtered: [],
      showFiltered: true,
      selected: false
    }

    this.filter = this.filter.bind(this);
    this.itemSelected = this.itemSelected.bind(this);
    this.renderFiltered = this.renderFiltered.bind(this);
  }

  filter(event){
    this.setState({
      selected: event.target.value
    })
    let searchWord = event.target.value.toLowerCase();

    if(searchWord.length > 0){
      this.setState({
        showFiltered: true
      })
    } else {
      this.setState({
        showFiltered: false
      })
    }

    let filtered = this.state.dataList.filter((item, i)=>{
      return item.en.toLowerCase().indexOf(searchWord) > -1;
    })

    this.setState({
      filtered: filtered
    })
  }

  itemSelected(item){
    this.setState({
      showFiltered: false,
      selected: item
    })
  }

  renderFiltered(){
    if(this.state.filtered.length > 0){
      return this.state.filtered.map((item, i)=>{
        return <div className="item" onClick={()=>{this.itemSelected(item)}}>
          {item.en}
        </div>
      })
    }

    return false;
  }

  render(){
    return <div className="dropdown-input">
      <InputWithControls first={true} value={(this.state.selected) ? this.state.selected.en : "" } onChange={this.filter} placeholder={"All countries"}/>
      {(this.state.showFiltered) ? <div style={{overflow: "auto", maxHeight: "200px"}}>{this.renderFiltered()}</div> : false}
    </div>
  }
}

export default DropdownInput;
