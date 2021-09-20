import React, { Component } from "react";
import {getMovies} from "../services/fakeMovieService";

class Counter extends Component {
  state = {
    count: 0,
    // imageUrl:'https://picsum.photos/200',
    // tag: ["tag1", "tag2", "tag3"],
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  getBadgeClasses() {
    let classes = "badge p-2 mr-4 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  handleChange = (el) => {
    console.log(el)
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="mt-3">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleChange} className=" btn btn-sm btn-dark">
        </button>

        {/*<button onClick={() => this.handleChange('chaudhuree') } className=" btn btn-sm btn-dark">*/}
        {/*<img src={this.state.imageUrl} alt=""/>*/}
        {/*<ul>*/}
        {/*  {this.state.tag.map((tag) => {*/}
        {/*    return <li key={tag}> tag </li>;*/}
        {/*  })}*/}
        {/*</ul>*/}
      </div>
    );
  }
}

export default Counter;
