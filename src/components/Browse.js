import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utills/constants";
import Usenowplayingmovies from "../customhooks/usenowplayingmovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import Usepopularmovies from "../customhooks/usepopularmovies";
import Gptsearch from "../components/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const ShowGptsearch = useSelector((store) => store.Search.ShowGptsearch);

  Usenowplayingmovies();
  Usepopularmovies();

  return (
    <div>
      <Header />
      {ShowGptsearch ? (
        <Gptsearch />
      ) : (
        <>
          <Maincontainer />,
          <Secondarycontainer />
        </>
      )}
    </div>
  );
};

export default Browse;
