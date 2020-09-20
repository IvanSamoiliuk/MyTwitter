import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        5,
        { id: "qwe1", label: "Выучить HTML и CSS" },
        false,
        { id: "qwe2", label: "Выучить JS и React", important: true },
        { id: "qwe3", label: "Создать крутую SPA" },
      ],
    };

    this.generateId = () => {
      const newID = new Date().getTime(new Date());
      return newID;
    };

    this.deleteItem = (itemID) => {
      this.setState(({ data }) => {
        const index = data.findIndex((item) => item.id === itemID);
        const before = data.slice(0, index);
        const after = data.slice(index + 1);
        const newArr = [...before, ...after];
        return {
          data: newArr,
        };
      });
    };

    this.addItem = (body) => {
      const newItem = {
        label: body,
        important: false,
        id: this.generateId(),
      };
      console.log(newItem.id);
      this.setState(({ data }) => {
        const newArr = [...data, newItem];
        return {
          data: newArr,
        };
      });
    };
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} deleteItem={this.deleteItem} />
        <PostAddForm addItem={this.addItem} />
      </div>
    );
  }
}
