import React from "react";
import Header from "../components/Header";
import LeftAside from "../components/homeLayout/LeftAside";
import NewsCard from "../components/NewsCard";
import RightAside from "../components/homeLayout/RightAside";

const Root = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <div className="flex justify-between w-11/12 mx-auto">
        <aside>
          <LeftAside></LeftAside>
        </aside>
        <div>
          <NewsCard></NewsCard>
        </div>
        <aside>
          <RightAside></RightAside>
        </aside>
      </div>
    </div>
  );
};

export default Root;
