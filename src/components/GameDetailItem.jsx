import React, { useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";

import { useGetGameDetailsQuery, useGetGameScreenShotUrlQuery } from "../redux/api/apiFetch";

const CardSahdow = styled(motion.div)({
  width: "100%",
  minHeight: "100vh",
  overflowY: "scroll",
  background: "rgba(0,0,0,0.5)",
  position: "fixed",
  top: 0,
  left: 0,
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
        marginLeft: "1rem",
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
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const GameDetailItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: game, isLoading: loadGame } = useGetGameDetailsQuery(id);
  const { data: screen, isLoading: loadScreen } = useGetGameScreenShotUrlQuery(id);

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <CardSahdow onClick={goBack}>
      <Detail>
        {loadGame || loadScreen ? (
          <Loader>
            <p>Loading...</p>
          </Loader>
        ) : (
          <>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <div className="info">
                <h3>Platforms</h3>
                <div className="platforms">
                  {game.platforms.map((el) => (
                    <h4 key={el.platform.id}>{el.platform.name}</h4>
                  ))}
                </div>
              </div>
            </Stats>
            <Media>
              <img src={game.background_image} alt={game.name} />
            </Media>
            <Description>
              <h3>Description</h3>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              <h3>Gallery</h3>
              <div className="wrapp">
                {screen.results.map((el) => (
                  <img key={el.id} src={el.image} alt={game.name} />
                ))}
              </div>
            </Gallery>
          </>
        )}
      </Detail>
    </CardSahdow>
  );
};

export default GameDetailItem;
