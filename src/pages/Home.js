import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
// Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
const Home = () => {
  // get the location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  // FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  const clearResults = (e) => {
    dispatch({
      type: "CLEAR_SEARCHED",
    });
  };
  return (
    <GameList>
      <AnimateSharedLayout>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Search Results</h2>
            <button onClick={clearResults} className="clear">clear</button>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 1rem;
  margin-bottom: 3rem;
  h2 {
    padding: 4rem 0;
  }
  .clear {
    display: block;
    margin: 0rem auto;
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
    background-color: #1c8d73;
    color: white;
    font-size: 1.2rem;
    border: none;
    outline: none;
    border-radius: 5px;
  }
  @media screen and (max-width: 500px) {
    h2 {
      padding: 2rem 0;
    }
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export default Home;
