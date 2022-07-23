import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { newGamesFetch } from "./redux/features/newGamesSlice";
import { popularFetch } from "./redux/features/popularSlice";
import { unComingFetch } from "./redux/features/unComingSlice";

import Home from "./pages/Home";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popularFetch());
    dispatch(unComingFetch());
    dispatch(newGamesFetch());
  }, [dispatch]);

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
