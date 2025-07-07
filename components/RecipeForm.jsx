import React from "react";
import { useEffect } from "react";
import { Link, redirect, useNavigate, useLocation } from "react-router-dom";
const RecipeForm = ({
  recipeList,
  setRecipeList,
  recipe,
  setRecipe,
  menu,
  save,
  setSave,
  setMenu,
  category,
  setCategory,
  description,
  setDescription,
  state,
}) => {
  
  const location = useLocation();
  const recipeToEdit = location.state?.recipe;
  const navigate = useNavigate();

  useEffect(() => {
  if (recipeToEdit) {
    setMenu(recipeToEdit.menu);
    setCategory(recipeToEdit.category);
    setDescription(recipeToEdit.description);
  }
}, [recipeToEdit]);

 const addRecipe = (e) => {
  e.preventDefault();

  if (recipeToEdit) {
    // EDIT
    const updatedList = recipeList.map((recipe, idx) =>
      recipe === recipeToEdit
        ? { ...recipe, menu, category, description }
        : recipe
    );
    setRecipeList(updatedList);
  } else {
    // ADD
    setRecipeList([...recipeList, { menu, category, description, save: false }]);
  }

  setMenu("");
  setCategory("");
  setDescription("");
  navigate("/");
};


  return (
    <div className="flex flex-col items-center card  justify-center ">
      <h1>Tambahkan Resep</h1>

      <hr className="h-1 w-full" />
      <div className="">
        <form className="flex flex-col w-200" onSubmit={addRecipe}>
          <label>Menu</label>
          <input
            type="text"
            className=" h-10 b-card"
            value={menu}
            onChange={(e) => setMenu(e.target.value)}
          />
          <label>Category</label>
          <select
            className=" h-10 b-card"
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Choose Category</option>
            <option value="food">Food</option>
            <option value="drink">Drink</option>
          </select>
          <label>Description</label>
          {/* <input type="text" rows className="  b-card"/> */}
          <textarea
  cols="30"
  rows="8"
  className="b-card"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
></textarea>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm py-2 text-center w-20 mt-5 "
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;
