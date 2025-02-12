import React from "react";
import "./App.css";
import Banner from "./Components/banner";
import Topbar from "./Components/topbar";
import Header from "./Components/header";
import Banner2 from "./Components/banner";
import Top from "./Components/top";
import Categories from "./Components/categories";
import Daily from "./Components/daily";
import Discover from "./Components/discover";
function App() {
  return (
    <div className="app">
      <Topbar />
      <Header />
      <Banner2 />
      <Top />
      <Categories />
      <Banner />
      <Daily />
      <Discover />
    </div>
  );
}

export default App;
