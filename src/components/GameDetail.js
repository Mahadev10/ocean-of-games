import React from "react";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
// Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
import close from "../img/close.svg";
const GameDetail = ({ pathId }) => {
  const history = useHistory();
  // Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  const closeDetail=()=>{
    document.body.style.overflow = "auto";
    history.push("/");
  }
  // Get stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };
  // Get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "playstation":
        return playstation;
      case "xbox":
        return xbox;
      case "pc":
        return steam;
      case "nintendo":
        return nintendo;
      case "ios":
        return apple;
      default:
        return gamepad;
    }
  };
  // Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <img onClick={closeDetail} className="close" src={close} alt="close" />
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                {getStars()}
              </div>
              <Info className="info">
                <h3>Platforms</h3>
                <Platforms className="platforms">
                  {game.parent_platforms.map((data) => (
                    <img
                      src={getPlatform(data.platform.slug)}
                      key={data.platform.id}
                      alt={data.platform.slug}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={smallImage(game.background_image, 640)}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 640)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};
const CardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  h3 {
    padding: 1.5rem 0rem;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 0.5rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
  .close{
    display:block;
    width:3rem;
    height:3rem;
    margin:0 auto;
    cursor:pointer;
  }
  @media screen and (max-width: 730px) {
    padding: 2rem 0.6rem;
  }
`;
const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  .rating {
    width: 50%;
    text-align: center;
    img {
      width: 20px;
    }
  }
  @media screen and (max-width: 730px) {
    .rating {
      h3 {
        font-size: 1rem;
      }
    }
  }
`;
const Info = styled.div`
  text-align: center;
  width: 50%;
`;
const Platforms = styled.div`
  display: flex;
  justify-content: center;
  img {
    margin:0 10px;
    width: 40px;
  }
 
  @media screen and (max-width: 730px) {
    img {
      width: 20px;
    }
  }
`;
const Media = styled.div`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled.div`
  margin: 5rem 0rem;
  text-align:center;
`;
export default GameDetail;
