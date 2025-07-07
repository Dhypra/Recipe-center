const RecipeItem = ({ recipe, onSave, onDelete,onEdit }) => {
  return (
    <div className="i-card my-2">
      <div className="img">
        <div className="save" onClick={onSave}>
          <img
            width={30}
            src={
              recipe.save
                ? "./components/assets/bookmarkOn.png"
                : "./components/assets/bookmark.png"
            }
            alt="Bookmark"
          />
        </div>
      </div>

      <div className="text">
        <p className="h3">{recipe.menu.toUpperCase()}</p>
        <p className="p">{recipe.description}</p>
        <div className="flex flex-row justify-between">
          <div class="icon-box bg-blue-100">
            <p class="span">{recipe.category}</p>
          </div>
          <div className="flex flex-row gap-2">
            <div class="icon-box bg-yellow-300" onClick={onEdit}>
              <img width={20} src="./components/assets/edit.png" alt="" />
            </div>
            <div class="icon-box bg-red-700" onClick={onDelete}>
              <img width={20} src="./components/assets/delete.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
