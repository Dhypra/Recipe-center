import { Link } from "react-router-dom";
import RecipeList from "./RecipeList";
import './assets/style.css';

const Home = ({ recipeList, setRecipeList ,edit,setEdit }) => {
  return (
    <div className="mx-10 ">
      <div className="flex flex-row justify-between my-3">
        <h1 className="text-5xl poppins-medium">Recipe Center</h1>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-200 hover:border-transparent rounded-xl poppins-regular">
          <Link to="/add">+ Add Menu</Link>
        </button>
      </div>
      <hr className="border-1 border-gray-400" />
      <RecipeList recipeList={recipeList} setRecipeList={setRecipeList} edit={edit} setEdit={setEdit}/>
    </div>
  );
};

export default Home;
