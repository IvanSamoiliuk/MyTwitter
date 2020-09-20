import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

const App = () => {
  const data = [
    5,
    { id: "qwe1", label: "Выучить HTML и CSS" },
    false,
    { id: "qwe2", label: "Выучить JS и React", important: true },
    { id: "qwe3", label: "Создать крутую SPA" },
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
