import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { deleteSearched } from "../redux/features/searchSlice";

//components
import GameItem from "../components/GameItem";
import GameDetailItem from "../components/GameDetailItem";

const GameList = styled(motion.section)({
  padding: "0 5rem",
  h2: {
    padding: "5rem 0",
    textTransform: "capitalize",
    fontSize: "3rem",
    fontWeight: "lighter",
    display: "inline-block",
  },
  ".searched": {
    button: {
      outline: "none",
      borderRadius: "1rem",
      padding: "0.5rem",
      cursor: "pointer",
      border: "1px solid rgba(248, 189, 248, 0.5)",
      background: "transparent",
      transform: "translateY(-20%)",
      marginLeft: "1rem",
      transition: "background .3s ease, color .3s ease",
      "&:hover": {
        background: "rgba(248, 189, 248, 0.5)",
        color: "white",
      },
    },
  },
});
const Games = styled(motion.div)({
  minHeight: "80vh",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
  gridColumnGap: "3rem",
  gridRowGap: "5rem",
});

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const pathGameId = location.pathname.split("/")[2];

  const { popular, upComing, newGames, search } = useSelector((state) => state);

  const clearSearchedHandler = () => {
    dispatch(deleteSearched());
  };

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathGameId && <GameDetailItem pathGameId={pathGameId} />}
        </AnimatePresence>
        <AnimatePresence>
          {search.isLoaded && (
            <motion.div
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              exit={{ y: 0 }}
              transition={{ type: "tween" }}
              className="searched"
            >
              <h2>Searched games</h2>
              <button onClick={clearSearchedHandler}>Clear search</button>
              <Games>
                {search.items.map((el) => {
                  return <GameItem key={el.id} {...el} />;
                })}
              </Games>
            </motion.div>
          )}
        </AnimatePresence>
        <h2>upcoming games</h2>
        <Games>
          {upComing.items.map((el) => {
            return <GameItem key={el.id} {...el} />;
          })}
        </Games>
        <h2>popular games</h2>
        <Games>
          {popular.items.map((el) => {
            return <GameItem key={el.id} {...el} />;
          })}
        </Games>
        <h2>new games</h2>
        <Games>
          {newGames.items.map((el) => {
            return <GameItem key={el.id} {...el} />;
          })}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

export default Home;
