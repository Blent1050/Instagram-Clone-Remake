import React, { Component } from "react";

import data from "../../data";
import SearchBar from "../SearchBarComponent/SearchBar";
import Posts from "./Posts";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: data
    };
  }
  render() {
    return (
      <>
        <SearchBar />
        <Posts postData={this.state.postData} />
      </>
    );
  }
}

export default PostContainer;
