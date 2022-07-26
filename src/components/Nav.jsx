import React, { useRef } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import logo from "../assets/img/logo.svg";
import { searchFetch, setValue } from "../redux/features/searchSlice";

const StyledNav = styled(motion.nav)({
  background: "#ecc3f1",
  color: "white",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "4rem",
  position: "sticky",
  top: 0,
  zIndex: 1,
  ".search": {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    input: {
      outline: "none",
      border: "none",
      padding: "0.5rem 1rem;",
      borderRadius: "1rem",
      boxShadow: "4px 4px 12px #b2b8c9, -4px -4px 12px #f0f8ff",
    },
    button: {
      outline: "none",
      border: "none",
      borderRadius: "1rem",
      padding: "0.5rem",
      cursor: "pointer",
      boxShadow:
        "35px 35px 68px 0px rgba(248, 189, 248, 0.5), inset -3px -3px 16px 0px rgba(248, 189, 248, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)",
    },
  },
});

const Logo = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  h2: {
    fontWeight: "500",
  },
});

const Nav = () => {
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  const { isLoading } = useSelector((state) => state.search);

  const submitSearchHandler = (e) => {
    e.preventDefault();

    const value = searchRef.current.value;

    dispatch(setValue(value));
    dispatch(searchFetch(value));

    searchRef.current.value = "";
  };

  return (
    <StyledNav initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Logo>
        <img src={logo} alt="Logo" />
        <h2>Keqing Store</h2>
      </Logo>
      <form className="search">
        <input ref={searchRef} type="search" />
        <button onClick={submitSearchHandler} type="submit">
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
    </StyledNav>
  );
};

export default Nav;
