import { Link } from "react-router-dom";
import RecipeList from "./RecipeList";
import './assets/style.css';

const Home = ({ recipeList, setRecipeList ,edit,setEdit }) => {
  return (
    <div className="mx-10 ">
      <div className="flex flex-row justify-between my-3">
        <h1 className="text-5xl">Recipe Center</h1>
        <button>
          <Link to="/add">Add Menu</Link>
        </button>
      </div>
      <hr className="" />
      <RecipeList recipeList={recipeList} setRecipeList={setRecipeList} edit={edit} setEdit={setEdit}/>
    </div>
  );
};

export default Home;
