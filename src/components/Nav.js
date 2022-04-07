import React, { useState } from "react";
// Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
// Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="oceanofgames" />
        <h1>Ocean Of Games</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};
const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  .search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 50%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    outline-color: red;
  }
  @media screen and (max-width: 700px) {
    padding: 2rem 1rem;
    input {
      width: 90%;
    }
    h1 {
      font-size: 1.5rem;
    }
  }
  button {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    margin-top: 1rem;
    border: none;
    outline:none;
    border-radius:5px;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 3rem;
    width: 3rem;
  }
`;
export default Nav;
