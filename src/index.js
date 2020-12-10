import React, { Component } from "react";
import ReactDOM from "react-dom";
import QRCode from "qrcode.react";//生成二维码插件

class Wrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleChange(e) {
    this.setState({
      value : e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
        <QRCode value={this.state.value} size={200} />
      </div>
    );
  }
}
ReactDOM.render(<Wrap />, document.getElementById("root"));
