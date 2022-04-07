import React from "react";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import {smallImage} from "../util";
const default_img_url =
  "https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80";
const Game = ({ id, name, released, image }) => {
  // Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = (id) => {
    document.body.style.overflow="hidden";
    dispatch(loadDetail(id));
  };
  const stringPathId=id.toString();
  return (
    <StyledGame layoutId={stringPathId} onClick={() => loadDetailHandler(id)}>
      <Link to={`/game/${id}`}>
        {/* <StyledContainer> */}
          <StyledData>
            <h3>{name}</h3>
            <p>{released}</p>
          </StyledData>
          <StyledImage>
            <img src={smallImage(image,640) || default_img_url} alt={name} />
          </StyledImage>
        {/* </StyledContainer> */}
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 40vh;
  max-width:100%;
  border-radius: 0.8rem;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  z-index:2;
  a {
    display: block;
    width: 100%;
  }
`;
// const StyledContainer = styled.div`
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: center;
//     display:block;
//   }
  
// `;
const StyledData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  height: 15vh;
  h3 {
    padding: 0 3px;
  }
`;
const StyledImage = styled.div`
  height: 40vh;
  img{
    display:block;
    width:100%;
    height:100%;
    object-fit:center;
  }
`;
export default Game;
