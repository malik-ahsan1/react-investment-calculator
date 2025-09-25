import { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 7,
  });

  function handleValueChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: newValue,
    }));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
          <input
            type="number"
            id="initial-investment"
            required
            value={userInput.initialInvestment}
            onChange={(e) =>
              handleValueChange('initialInvestment', e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            id="annual-investment"
            required
            value={userInput.annualInvestment}
            onChange={(e) =>
              handleValueChange('annualInvestment', e.target.value)
            }
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">EXPECTED RETURN</label>
          <input
            type="number"
            id="expected-return"
            required
            value={userInput.expectedReturn}
            onChange={(e) =>
              handleValueChange('expectedReturn', e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            id="duration"
            required
            value={userInput.duration}
            onChange={(e) => handleValueChange('duration', e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
