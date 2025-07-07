import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeForm from "../components/RecipeForm";
import Home from "../components/Home";

function App() {
  const [recipeList, setRecipeList] = useState([]);
  const [menu, setMenu] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [edit, setEdit] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home recipeList={recipeList} setRecipeList={setRecipeList} />}
        />
        <Route
          path="/add"
          element={
            <RecipeForm
              recipeList={recipeList}
              setRecipeList={setRecipeList}
              menu={menu}
              setMenu={setMenu}
              category={category}
              setCategory={setCategory}
              description={description}
              setDescription={setDescription}
              edit={edit}
              setEdit={setEdit}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
