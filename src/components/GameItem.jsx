import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import getSmallUrl from "../helpers/getSmallUrl";

const ItemStyle = styled(motion.div)({
  minHeight: "30vh",
  boxShadow: "0px 5px 20px rgba(0,0,0,0.15)",
  borderRadius: "1rem",
  overflow: "hidden",
  textAlign: "center",
  a: {
    textDecoration: "none",
  },
  img: {
    width: "100%",
    height: "100%",
    float: "left",
  },
  h3: {
    fontSize: "1.3rem",
    fontWeight: "500",
    color: "#333",
    padding: "1rem",
  },
  p: {
    fontSize: "1rem",
    lineHeight: "200%",
    color: "#696969",
  },
});

const GameItem = (props) => {
  const newImagePath = getSmallUrl(props.background_image, 420);

  return (
    <ItemStyle layoutId={`${props.id}`}>
      <Link to={`/game/${props.id}`}>
        <motion.h3 layoutId={`title ${props.id}`}>{props.name}</motion.h3>
        <p>{props.released}</p>
        <motion.img layoutId={`image ${props.id}`} src={newImagePath} alt={props.name} />
      </Link>
    </ItemStyle>
  );
};

export default GameItem;
