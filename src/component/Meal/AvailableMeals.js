import React,{useEffect,useState} from 'react';
import MealItem from "./MealItem"
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'











const AvailableMeals =()=>{
  const[meal,setMeal]=useState([]);
  const[isLoading,setIsLoading]=useState(true);
  const[httpError,setHttpError]=useState(false);
  useEffect(()=>{
    
 const fetchMeals= async ()=>{
  const response= await fetch("https://reacts-mealsss-default-rtdb.firebaseio.com/meals.json");
  if(!response.ok){
    throw new Error(
      "Something went wrong"
    )
  }
  const responseData= await response.json();
  const loadedData=[];
      for (const key in responseData){
        loadedData.push({
          id :key,
          name : responseData[key].name,
          description : responseData[key].description,
          price : responseData[key].price
        })
      }
      setMeal(loadedData)
      setIsLoading(false)
 }
 
     

 fetchMeals().catch(error =>{
   setIsLoading(false)
   setHttpError(error.message)
 })
  },[])
  if(httpError){
    return <section className={classes.MealsError}>
    <p>Failed to fetch</p>
    </section>
  }
  if(isLoading){
    return <section className={classes.MealsLoading}>
    <p>Loading....</p>
    </section>
  }



                         const mealsList =meal.map((meals) => (
                         <MealItem
                         key={meals.id}
                         id={meals.id}
                         name={meals.name}
                         description={meals.description}
                         price={meals.price}
                         />
                         ))

                         return(

<section  className={classes.meals}>
<Card>
<ul>
{mealsList}
</ul>
</Card>



</section>



)

}
export default AvailableMeals