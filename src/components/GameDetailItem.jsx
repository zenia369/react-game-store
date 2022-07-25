import React, { useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useGetGameDetailsQuery, useGetGameScreenShotUrlQuery } from "../redux/api/apiFetch";
import getSmallUrl from "../helpers/getSmallUrl";
import getPlatfomItems from "../helpers/getPlatfomItems";

const CardSahdow = styled(motion.div)({
  width: "100%",
  minHeight: "100vh",
  overflowY: "scroll",
  background: "rgba(0,0,0,0.5)",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1,
  "&::-webkit-scrollbar": {
    width: "0.5rem",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(221, 128, 240)",
  },
  "&::-webkit-scrollbar-track": {
    background: "white",
  },
});

const Detail = styled(motion.div)({
  width: "80%",
  borderRadius: "1rem",
  padding: "2rem",
  background: "white",
  position: "absolute",
  left: "10%",
  color: "black",
  zIndex: 2,
  margin: "2rem 0",
  img: {
    width: "100%",
  },
});

const Stats = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ".info": {
    h3: {
      fontWeight: "400",
      fontSize: "1.4rem",
      letterSpacing: "0.05rem",
    },
    ".platforms": {
      display: "flex",
      flexWrap: "wrap",
      columnGap: "1.2rem",
      rowGap: "0.5rem",
      justifyContent: "flex-start",
      img: {
        width: "30px",
      },
      h4: {
        fontWeight: "300",
        fontSize: "1rem",
        color: "#696969",
      },
    },
  },
  ".rating": {
    h3: {
      fontWeight: "700",
      fontSize: "1.4rem",
      letterSpacing: "0.05rem",
    },
    p: {
      textTransform: "lowercase",
      color: "#696969",
    },
  },
  "& > div > h3": {
    marginBottom: "0.5rem",
  },
});

const Media = styled.div({
  marginTop: "2.5rem",
  img: {
    width: "100%",
  },
});

const Description = styled.div({
  margin: "2rem 0",
  h3: {
    fontWeight: "500",
    fontSize: "1.2rem",
    letterSpacing: "0.05rem",
    marginBottom: "0.3rem",
  },
  p: {
    fontWeight: "300",
    fontSize: "1rem",
  },
});

const Gallery = styled.div({
  h3: {
    fontWeight: "500",
    fontSize: "1.2rem",
    letterSpacing: "0.05rem",
    marginBottom: "0.3rem",
  },
  ".wrapp": {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "0.3rem",
    img: {
      height: "100%",
    },
  },
});

const Loader = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0,0,0,0.5)",
  p: {
    padding: "1.5rem",
    color: "black",
    background: "white",
    borderRadius: "1rem",
  },
});

const GameDetailItem = ({ pathGameId }) => {
  const navigate = useNavigate();

  const { data: game, isLoading: loadGame } = useGetGameDetailsQuery(pathGameId);
  const { data: screen, isLoading: loadScreen } = useGetGameScreenShotUrlQuery(pathGameId);

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "overlay";
    };
  }, []);

  return (
    <>
      {loadGame || loadScreen ? (
        <Loader>
          <p>Loading...</p>
        </Loader>
      ) : (
        <CardSahdow onClick={goBack}>
          <Detail layoutId={pathGameId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathGameId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <div className="info">
                <h3>Platforms</h3>
                <div className="platforms">
                  {getPlatfomItems(game.platforms).map((el, i) => (
                    <img key={`${el.name}-${i}`} src={el.src} alt={el.name} />
                  ))}
                </div>
              </div>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathGameId}`}
                src={getSmallUrl(game.background_image, 1280)}
                alt={game.name}
              />
            </Media>
            <Description>
              <h3>Description</h3>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              <h3>Gallery</h3>
              <div className="wrapp">
                {screen.results.map((el) => {
                  const newPath = getSmallUrl(el.image, 600);
                  return <img key={el.id} src={newPath} alt={game.name} />;
                })}
              </div>
            </Gallery>
          </Detail>
        </CardSahdow>
      )}
    </>
  );
};

export default GameDetailItem;
