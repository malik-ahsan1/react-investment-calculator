import { useState } from 'react';
import Header from './components/Header';
import Results from './components/Results';
import UserInput from './components/UserInput';
import { calculateInvestmentResults } from './util/investment';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 7,
  });

  const isInputValid = userInput.duration >= 1;

  function handleValueChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleValueChange={handleValueChange} />
      {isInputValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please enter duration greater than zero!</p>
      )}
    </>
  );
}

export default App;
