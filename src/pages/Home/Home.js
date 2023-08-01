import React from "react";
import Categories from "../../molecules/Categories/Categories";
import TextInput from "../../atoms/TextInput/TextInput";
import Filters from "../../molecules/Filters/Filters";
import CardList from "../../molecules/CardList/CardList";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <h1>My Crowdfunding Website</h1>
      </div>
      <div className="content">
        <Categories />
        <TextInput
          placeholder="Search by keywords"
          onSearch={(query) => console.log("Search Query:", query)}
        />
        <Filters
          onApplyFilters={(filters) => console.log("Applied Filters:", filters)}
        />
        <CardList />
      </div>
    </div>
  );
};

export default Home;
