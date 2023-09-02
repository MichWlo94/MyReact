import Header from "../ComponentsProject3/Header";
import Form from "../ComponentsProject3/Form";
import Table from "../ComponentsProject3/Table";
import { useState } from "react";


function Project3(props) {
  
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  }

  
  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
  for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
    }
  

  return (
    <div onClick={props.closeDropdown} className="box-border h-screen font-lobster bg-gradient-to-b from-slate-400 via-stone-600 to-slate-800">
      <Header />

      <Form onCalculate={calculateHandler} />

      {!userInput && <p className="mb-3 text-2xl text-center text-white">Please enter your data</p>}
      {userInput && <Table data={yearlyData} initialInvestment={userInput['current-savings']}/>}

      
    </div>
  );
};

export default Project3;
