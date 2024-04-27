import MealPlan from
  '../models/MealPlan.js';

import axios from 'axios';


const meals = {
  "Breakfast": [
      "Citrus Oatmeal - Refreshing and Vegan",
      "Fruit-and-Nut Peanut Butter Snack Bites",
      "Bacon, Chorizo & Butternut Squash Breakfast Casserole",
      "Buttermilk Blueberry Oat Flour Pancakes",
      "Berry Smoothie Bowl",
      "Pretzel Rolls (a.k.a. Laugen Broetchen)",
      "Apple Oatmeal Pancakes"
  ],
  "Lunch": [
      "Chicken Cacciatore & Pasta Skillet",
      "Classic Chocolate Mousse",
      "Bihari Kabab Recipe",
      "Stuffed Chicken with Apples, Gouda, and Kale",
      "Bacon Wrapped Hotdogs",
      "Jacket potatoes with pork and mushroom ragu",
      "Potato Green Bean Salad with Lemon Dill Aioli"
  ],
  "Dinner": [
      "Raspberry-Almond Jelly Roll Recipe",
      "Roasted Garlic-Herb Mushrooms and Butternut Mash",
      "Caramel Apple Pork Chops",
      "Lemongrass Pork & Spaghetti Squash Noodle Bowl with Peanut Sauce",
      "Coconut Quinoa, Sunshine and Squash Wraps",
      "Bean Bourguignon",
      "Lightened Up Potato Salad"
  ]
};


const createMealPlan = async (req, res) => {
  try {
    const mealPlan = new MealPlan({
      user_id: req.body.user_id,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      health_goal: req.body.health_goal
    });
    await mealPlan.save();
    res.status(201).send(mealPlan);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findById(req.params.id);
    if (!mealPlan) {
      return res.status(404).send();
    }
    res.send(mealPlan);
  } catch (error) {
    res.status(500).send(error);
  }
};

const autoGenerate = async (req, res) => {
  try {
    const mealPlan = new MealPlan({
      user_id: req.body.user_id,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      health_goal: req.body.health_goal,
      meals: {
        "Breakfast": meals["Breakfast"][Math.floor(Math.random() * meals["Breakfast"].length)],
        "Lunch": meals["Lunch"][Math.floor(Math.random() * meals["Lunch"].length)],
        "Dinner": meals["Dinner"][Math.floor(Math.random() * meals["Dinner"].length)]
      }
    });
    await mealPlan.save();
    res.status(201).send(mealPlan);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default { createMealPlan, getMealPlan , autoGenerate };
// Additional methods can be added to update and delete meal plans


// sample JSON data for meal plan
