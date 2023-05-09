import styled from "styled-components";
import { useState } from "react";

const RockPaperScisorsApp = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [userScoreCounter, setUserScoreCounter] = useState(0);
  const [computerScoreCounter, setComputerScoreCounter] = useState(0);

  const options = ["kamień", "papier", "nożyce"];

  const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedButton = event.target as HTMLButtonElement;
    const computerOption = options[Math.floor(Math.random() * options.length)];

    setUserChoice(clickedButton.textContent || "");
    //inna konvencja, często stosowana to: setComputerChoice(prev => computerOption)
    // czyli poprzedniStan => nowyStan
    setComputerChoice(computerOption);
    handleResult();
  };

  const handleResult = () => {
    if (userChoice === computerChoice) {
      console.log("remis");
    } else if (
      (userChoice === "papier" && computerChoice === "kamień") ||
      (userChoice === "kamień" && computerChoice === "nożyce") ||
      (userChoice === "nożyce" && computerChoice === "papier")
    ) {
      setUserScoreCounter(userScoreCounter + 1);
    } else setComputerScoreCounter(computerScoreCounter + 1);
  };

  const handleReset = () => {
    setUserChoice("");
    setComputerChoice("");
    setComputerScoreCounter(0);
    setUserScoreCounter(0);
  };

  return (
    <MainDiv>
      <UserButtonDivStyle>
        {options.map((option, index) => (
          <UserButtonStyle key={index} onClick={handleUserClick}>
            {option}
          </UserButtonStyle>
        ))}
      </UserButtonDivStyle>
      <ChoiceDivStyle>
        <ChoiceHStyle>
          Wybór użytkownika: <strong>{userChoice}</strong>
        </ChoiceHStyle>
        <ChoiceHStyle>
          Wybór komputera: <strong>{computerChoice}</strong>{" "}
        </ChoiceHStyle>
      </ChoiceDivStyle>
      <VictoryStyle>
        <VictoryParagraphStyle>
          Zwycięstwa gracz: <strong>{userScoreCounter}</strong>
        </VictoryParagraphStyle>
        <VictoryParagraphStyle>
          Zwycięstwa komputer: <strong>{computerScoreCounter}</strong>
        </VictoryParagraphStyle>
      </VictoryStyle>
      <ResetButtonStyle onClick={handleReset}>Zacznij od nowa</ResetButtonStyle>
    </MainDiv>
  );
};

export default RockPaperScisorsApp;

/*
  1. konwencja jest taka ze największe elementy nazywamy Wrapper, np: MainWrapper, 
  a mniejsze Container, np: ButttonsContainer, ScoreContainer itp. Nie nazywamy komponentów 'DivCośtam"
  2. nazwy komponentów powinny jasno wskazywać czego dotyczą
  3. Na buttonach zawsze powinien być jakiś hover albo coś, zeby było widać ze jest kliknięty 
  Na buttonach w 99% przypadków dodajemy właścisosc cursor: pointer
  4. Nie przy kazdym kliknieciu, z nigdy przy pierwszym, nie zlicza mi wyniku
*/

const MainDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #094274;
  max-width: 1000px;
  transition: scale 4s;
  font-family: Arial, Helvetica, sans-serif;
`;

const UserButtonStyle = styled.button`
  margin: 40px;
  padding: 40px 30px;
  font-size: 25px;
  background-color: black;
  color: white;
  border-radius: 15px;
  border: none;
`;
const UserButtonDivStyle = styled.div`
  display: flex;
  flex-direction: row; // wartość domyślna to row
  justify-content: space-evenly;
`;
const ChoiceDivStyle = styled.div`
  color: white;
  margin-left: 40px;
`;
const ChoiceHStyle = styled.p`
  background-color: green;
  padding: 7px;
  width: 30%;
  border-radius: 25px;
  padding: 10px 15px;
`;

const VictoryStyle = styled.div`
  position: relative;
  color: white;
`;
const VictoryParagraphStyle = styled.p`
  background-color: red;
  padding: 7px;
  width: 30%;
  border-radius: 25px;
  padding: 10px 15px;
  margin-left: 60%;
`;

const ResetButtonStyle = styled.button`
  background-color: gold;
  width: 200px;
  padding: 15px 20px;
  border-radius: 25px;
  margin-bottom: 10vh;
  margin-left: 10vh;
  &:hover {
    transform: scale(1.1);
  }
`;
