import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };

    this.onUpdate = (e) => {
      const searchQuery = e.target.value.toLowerCase();
      this.setState({ searchQuery });
      this.props.onUpdateSearch(searchQuery);
    };
  }

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск по записям"
        onChange={this.onUpdate}
      />
    );
  }
}
