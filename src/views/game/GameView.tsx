import Game from "./Game";
import DealMeIn from "./DealMeIn";
import React from "react";
import { purchaseRound } from "../../utils/score.utils";

export const GameView = () => {
  const [dealt, setDealt] = React.useState(false);

  const handleClick = () => {
    setDealt(true);
    purchaseRound();
  };

  if (dealt) {
    return <Game />;
  }
  return <DealMeIn onClick={handleClick} />;
};

export default GameView;
