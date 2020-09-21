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
        {
          id: "qwe1",
          label: "Выучить HTML и CSS",
          important: false,
          like: false,
        },
        {
          id: "qwe2",
          label: "Выучить JS и React",
          important: true,
          like: false,
        },
        {
          id: "qwe3",
          label: "Создать крутую SPA",
          important: false,
          like: false,
        },
      ],
      postStatusFilterButtons: [
        { name: "all", label: "Все" },
        { name: "like", label: "Понравилось" },
      ],
      searchQuery: "",
      filterQuery: "all",
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
        liked: false,
      };
      this.setState(({ data }) => {
        const newArr = [...data, newItem];
        return {
          data: newArr,
        };
      });
    };

    this.onToggleImportant = (id) => {
      this.toggle("important", id);
    };

    this.onToggleLike = (id) => {
      this.toggle("like", id);
    };

    this.searchPosts = (items, term) => {
      if (term.length === 0) {
        return items;
      }

      return items.filter((item) => {
        //return item.label.indexOf(term) > -1;
        return item.label.toLowerCase().includes(term);
      });
    };
    this.onUpdateSearch = (term) => {
      this.setState({ searchQuery: term });
    };

    this.onFilter = (items, filter) => {
      if (filter === "like") {
        return items.filter((item) => item.like);
      } else {
        return items;
      }
    };
    this.onFilterSelect = (filter) => {
      this.setState({
        filterQuery: filter,
      });
    };
  }

  toggle(type, id) {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, [type]: !oldItem[type] };
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, newItem, ...after];
      return {
        data: newArr,
      };
    });
  }

  render() {
    const {
      data,
      searchQuery,
      filterQuery,
      postStatusFilterButtons,
    } = this.state;
    const allPosts = data.length;
    const likedPosts = data.filter((item) => item.like).length;
    const visiblePosts = this.onFilter(
      this.searchPosts(data, searchQuery),
      filterQuery
    );
    return (
      <div className="app">
        <AppHeader all={allPosts} liked={likedPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            onFilterSelect={this.onFilterSelect}
            filter={filterQuery}
            postStatusFilterButtons={postStatusFilterButtons}
          />
        </div>
        <PostList
          posts={visiblePosts}
          deleteItem={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLike={this.onToggleLike}
        />
        <PostAddForm addItem={this.addItem} />
      </div>
    );
  }
}
