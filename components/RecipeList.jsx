import RecipeItem from "./RecipeItem";
import { useNavigate } from "react-router-dom";

const RecipeList = ({ recipeList, setRecipeList ,edit,setEdit}) => {
  const navigate = useNavigate();
  const toggleSave = (index) => {
    const updatedList = recipeList.map((recipe, idx) =>
      idx === index ? { ...recipe, save: !recipe.save } : recipe
    );
    setRecipeList(updatedList);
  };


  const toggleDelete = (index) => {
    const updatedList = recipeList.filter((_, idx) => idx !== index);
    setRecipeList(updatedList);
  };

  const toogleEdit = (index) => {
const recipe = recipeList[index];
// setEdit(index);
// navigate("/add");
navigate("/add", { state: { recipe } });
  };

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-6 my-3">
      {recipeList.map((recipe, index) => (
        <RecipeItem
          key={index}
          recipe={recipe}
          onSave={() => toggleSave(index)
          }
          onDelete={() => toggleDelete(index)
          }
          onEdit={() => toogleEdit(index)
          }
        />
      ))}
    </div>
  );
};

export default RecipeList;
