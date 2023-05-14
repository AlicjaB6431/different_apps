import styled from 'styled-components';
import { useEffect, useState } from 'react';

const RockPaperScisorsApp = () => {
	const [userChoice, setUserChoice] = useState('');
	const [computerChoice, setComputerChoice] = useState('');
	const [userScoreCounter, setUserScoreCounter] = useState(0);
	const [computerScoreCounter, setComputerScoreCounter] = useState(0);
	const [numberOfGamesCounter, setNumberOfGamesCounter] = useState(0);

	const options = ['kamień', 'papier', 'nożyce'];

	const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const clickedButton = event.target as HTMLButtonElement;
		const computerOption = options[Math.floor(Math.random() * options.length)];

		setUserChoice(clickedButton.textContent || '');
		setComputerChoice(computerOption);
		setNumberOfGamesCounter(numberOfGamesCounter + 1);
		handleResult(clickedButton.textContent || '', computerOption);
	};

	const handleResult = (userChoice: string, computerChoice: string) => {
		if (userChoice === computerChoice) {
			return null;
		} else if (
			(userChoice === 'papier' && computerChoice === 'kamień') ||
			(userChoice === 'kamień' && computerChoice === 'nożyce') ||
			(userChoice === 'nożyce' && computerChoice === 'papier')
		) {
			setUserScoreCounter(userScoreCounter + 1);
		} else {
			setComputerScoreCounter(computerScoreCounter + 1);
		}
	};

	const handleReset = () => {
		setUserChoice('');
		setComputerChoice('');
		setComputerScoreCounter(0);
		setUserScoreCounter(0);
		setNumberOfGamesCounter(0);
	};

	return (
		<MainWrapper>
			<UsersButtonContainer>
				{options.map((option, index) => (
					<SelectionButton key={index} onClick={handleUserClick}>
						{option}
					</SelectionButton>
				))}
			</UsersButtonContainer>
			<SelectionContainer>
				<SelectionDisplay>
					Wybór użytkownika: <strong>{userChoice}</strong>
				</SelectionDisplay>
				<SelectionDisplay>
					Wybór komputera: <strong>{computerChoice}</strong>{' '}
				</SelectionDisplay>
			</SelectionContainer>
			<ScoreContainer>
				<ScoreDisplay>
					Zwycięstwa gracz: <strong>{userScoreCounter}</strong>
				</ScoreDisplay>
				<ScoreDisplay>
					Zwycięstwa komputer: <strong>{computerScoreCounter}</strong>
				</ScoreDisplay>
				<ScoreDisplay>
					Liczba wszystkich gier: <strong>{numberOfGamesCounter}</strong>{' '}
				</ScoreDisplay>
			</ScoreContainer>
			<ResetButtonContainer onClick={handleReset}>
				Zacznij od nowa
			</ResetButtonContainer>
		</MainWrapper>
	);
};

export default RockPaperScisorsApp;

const MainWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: #3C5473;
	max-width: 1000px;
	font-family: Arial, Helvetica, sans-serif;
`;

const UsersButtonContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
`;
const SelectionButton = styled.button`
	margin: 40px;
	padding: 40px 30px;
	font-size: 25px;
	background-color: #F7D6D2;
	color: black;
	border-radius: 15px;
	border: none;
	cursor: pointer;
	border: 5px solid #ecbbb7;
	&:hover {
		background-color: #ecbbb7;
	}
`;
const SelectionContainer = styled.div`
	color: white;
	margin-left: 40px;
`;
const SelectionDisplay = styled.p`
	background-color: #D7D7D9;
	color: black;
	padding: 7px;
	width: 30%;
	border-radius: 25px;
	padding: 10px 15px;
`;

const ScoreContainer = styled.div`
	position: relative;
	color: white;
`;
const ScoreDisplay = styled.p`
	background-color: #94A69F;
	color: black;
	padding: 7px;
	width: 30%;
	border-radius: 25px;
	padding: 10px 15px;
	margin-left: 60%;
`;

const ResetButtonContainer = styled.button`
	background-color: #F7D6D2;
	width: 200px;
	padding: 15px 20px;
	border-radius: 25px;
	margin-bottom: 10vh;
	margin-left: 10vh;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
	}
`;
