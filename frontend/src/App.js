import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar/nav-bar";

import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // componentDidMount() {
  //   fetch("/api/getSomething")
  //   .then(res => res.json())
  //   .then(list => this.setState({ list }))
  // }

  render() {
    const { list } = this.state

    return (
      <div >
            <NavBar/>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("root"));