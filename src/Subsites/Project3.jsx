import logo from "../assets/logo.png";

function Project3() {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

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

    // do something with yearlyData ...
  };

  return (
    <div className="box-border h-screen font-lobster bg-gradient-to-b from-slate-400 via-stone-600 to-slate-800">
      <header className="mx-12 my-auto text-center">
        <img className="object-contain w-20 h-20 mx-auto bg-transparent" src={logo} alt="logo" />
        <h1 className="text-8">Investment Calculator</h1>
      </header>

      <form className="max-w-lg p-4 mx-auto my-8 border-2 rounded-md border-green-950 bg-gradient-to-b from-green-700 to-green-500">
        <div className="flex gap-6 py-2 justify-evenly">
          <p>
            <label className="block mb-2 font-bold uppercase text-2 font-bree" htmlFor="current-savings">Current Savings ($)</label>
            <input className="w-full p-1 text-gray-700 bg-white border-2 rounded-md border-green-950 text-4 " type="number" id="current-savings" />
          </p>
          <p>
            <label className="block mb-2 font-bold uppercase text-2 font-bree" htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input className="w-full p-1 text-gray-700 bg-white border-2 rounded-md border-green-950 text-4 " type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="flex gap-6 py-2 justify-evenly">
          <p>
            <label className="block mb-2 font-bold uppercase text-2 font-bree" htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input className="w-full p-1 text-gray-700 bg-white border-2 rounded-md border-green-950 text-4 " type="number" id="expected-return" />
          </p>
          <p>
            <label className="block mb-2 font-bold uppercase text-2 font-bree" htmlFor="duration">Investment Duration (years)</label>
            <input className="w-full p-1 text-gray-700 bg-white border-2 rounded-md border-green-950 text-4 " type="number" id="duration" />
          </p>
        </div>
        <p className="flex justify-center gap-4">
          <button type="reset" className="px-4 py-2 text-gray-100 bg-teal-700 border border-black rounded-md cursor-pointer hover:bg-teal-900">
            Reset
          </button>
          <button type="submit" className="px-4 py-2 text-gray-100 bg-teal-700 border border-black rounded-md cursor-pointer hover:bg-teal-900">
            Calculate
          </button>
        </p>
      </form>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <table className="w-11/12 mx-auto text-center table-fixed md:w-8/12 font-bree text-3 border-spacing-4" >
        <thead className="pb-4 mx-auto border-b-2 border-black">
          <tr className="">
            <th className='border-x border-x-black'>Year</th>
            <th className='border-x border-x-black'>Total Savings</th>
            <th className='border-x border-x-black'>Interest (Year)</th>
            <th className='border-x border-x-black'>Total Interest</th>
            <th className='border-x border-x-black'>Invested Capital</th>
          </tr>
        </thead>
        <tbody className="text-2 bg-gradient-to-b from-slate-300 to-slate-500">
          <tr >
            <td className="px-2 pt-2 ">YEAR NUMBER</td>
            <td className="px-2 pt-2 ">TOTAL SAVINGS END OF YEAR</td>
            <td className="px-2 pt-2 ">INTEREST GAINED IN YEAR</td>
            <td className="px-2 pt-2 ">TOTAL INTEREST GAINED</td>
            <td className="px-2 pt-2 ">TOTAL INVESTED CAPITAL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Project3;
