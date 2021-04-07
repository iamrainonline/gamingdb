import React from "react";
// styling
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  // Exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  //data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Exit className="shadow">back</Exit>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info></Info>
            </Stats>
            <Media>
              <h5>Platforms</h5>
              <Platforms>
                {game.platforms.map((data) => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))}
              </Platforms>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
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

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  @media only screen and (max-width: 1000px) {
    padding: 0;
    margin: 0;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: white;
  position: absolute;
  left: 10%;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 1000px) {
    padding: 8px;
    p {
      font-size: 8px;
      padding: 15px;
    }
    img {
      width: 100%;
    }
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
  @media only screen and (max-width: 1000px) {
    font-size: 12px;
  }
  p {
    font-size: 12px;
  }
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
  @media only screen and (max-width: 1000px) {
    h3 {
      display: flex;
      font-size: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      padding: 20px 0;
    }
  }
`;
const Media = styled(motion.div)`
  h5 {
    font-size: 30px;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
  }
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }

  @media only screen and (max-width: 1000px) {
    img {
      width: 100%;
    }
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
const Exit = styled(motion.h1)`
  cursor: pointer;
  color: white;
  font-size: 20px;
  font-weight: bold;
  position: fixed;
  right: 300px;
  top: 20px;
  background-color: black;
  padding: 20px;
  width: 100px;
  height: 70px;
  border: 0.5px solid grey;
  @media only screen and (max-width: 1000px) {
     {
      top: 1%;
      right: 12%;
      font-size: 10px;
      padding: 10px;
      width: 60px;
      height: 40px;
    }
  }
`;
export default GameDetail;
