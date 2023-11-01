import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import CartContext from './CartContext'
import useHttp from './useHttp'
import Error from './Error'


const requestConfig = {};

const Meals = () => {
  
    const [meals, setMeals] = useState([])

    // Define a state to keep track of expanded descriptions
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (mealId) => {
    // Toggle the description for the specified meal
    setExpandedDescriptions((prev) => ({
      ...prev,
      [mealId]: !prev[mealId],
    }));
  }

  // Fetch meals from the server by fetching the JSON file by default method fetch
  // useEffect( () => {
  //   async function fetchMeals() {
  //   const response = await fetch(`http://localhost:5173/available-meals.json`);

  //   if (!response.ok) {
  //     throw new Error('Something went wrong!');
  //   }

  //   const meals = await response.json();
  //   setMeals(meals);
  //   }
  //   fetchMeals();
  // }, []); 

  // Fetch meals from the server by using axios
  // useEffect(() => {
  //   async function fetchMeals() {
  //     try {
  //       const response = await axios.get('http://localhost:3500/shop');

        

  //       if (response.status !== 200) {
  //         throw new Error(response.message || 'Something went wrong!');
  //       }

  //       const meals = response.data;
  //       setMeals(meals);
  //     } catch (error) {
  //       console.error('Error fetching meals:', error);
  //       // Handle the error, e.g., display an error message to the user
  //     }
  //   }

  //   fetchMeals();
  // }, []);

  const {data: loadedMeals, isLoading, error} = useHttp('http://localhost:3500/shop', requestConfig, [])
  if (isLoading) {
    return <p className="p-4 mx-auto mt-8 text-xl text-center text-black bg-yellow-500 w-fit">
    Loading meals...
  </p>
  }

  if (error) {
    return <Error  title="Failed to fetch meals" message={error} />}


  const cartCtx = useContext(CartContext)

  function addMealToCart(meal) {
    cartCtx.addItem(meal)
  }


    return (
      <ul className="grid max-w-screen-lg grid-cols-1 gap-4 p-4 mx-auto my-8 list-none w-90 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {loadedMeals.map((meal) => (
        <li
          key={meal.id}
          className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-white rounded-lg shadow-md h-100"
        >
          <img
            src={`http://localhost:3500/${meal.image}`}
            alt={meal.name}
            className="object-contain w-full min-h-40"
          />
          <div className="flex flex-col items-center justify-between w-full h-full p-4 text-black">
            <h2 className="text-xl font-semibold text-center">{meal.name}</h2>
            <p className="text-sm text-center">
              {expandedDescriptions[meal.id]
                ? meal.description // Display full description if expanded
                : meal.description.slice(0, 35) + '...' // Display a shortened description
              }
            </p>
            {meal.description.length > 35 && ( // Show "Expand" link if the description is long
              <button
                onClick={() => toggleDescription(meal.id)}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                {expandedDescriptions[meal.id] ? 'Show Less' : 'Show More'}
              </button>
            )}
            <p className="text-xl font-bold text-center">{meal.price} PLN</p>
            <button onClick={() => addMealToCart(meal)} className="p-2 m-2 bg-red-500 border rounded-lg text-4 hover:bg-red-800">
              Add to Cart
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Meals