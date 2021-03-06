import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import "../App.css";
import { QUIZZES } from "../constants";
import theme from "../theme";
import Container from "./Container";
import AnswerGroup from "./AnswerGroup";
import QuestionSection from "./QuestionSection";
import ResultSection from "./ResultSection";
import GlobalStyle from "../globalStyle";

function App() {
  const [currentNo, setCurrentNo] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score => score+1);
    }
    // 마지막 퀴즈인지 체크할 것
    if (currentNo === QUIZZES.length -1){
      setShowResult(true);
  } else {
    setCurrentNo((currentNo) => currentNo + 1);
  } 
};

const convertedScore = Math.floor((score / QUIZZES.length) * 100);
return (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
    {showResult ? (
        <Container>
            <ResultSection convertedScore={convertedScore}></ResultSection>
        </Container>
    ) : (
        <Container>
            <QuestionSection currentNo={currentNo} />
            <AnswerGroup currentNo={currentNo} handleClick={handleClick} />
        </Container>
    )}
    </ThemeProvider>
    );
}

export default App;