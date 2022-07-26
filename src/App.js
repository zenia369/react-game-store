import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";

import { newGamesFetch } from "./redux/features/newGamesSlice";
import { popularFetch } from "./redux/features/popularSlice";
import { unComingFetch } from "./redux/features/unComingSlice";

import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popularFetch());
    dispatch(unComingFetch());
    dispatch(newGamesFetch());
  }, [dispatch]);

  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/game/:id", element: <Home /> },
  ]);

  return (
    <div className="App">
      <Nav />
      {element}
    </div>
  );
}

export default App;
