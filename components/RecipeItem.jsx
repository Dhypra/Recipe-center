const RecipeItem = ({ recipe, onSave, onDelete, onEdit }) => {
  return (
    <div className="i-card my-2 p-3 rounded-2xl">
      <div className="img rounded-xl">
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

      <div className="my-3">
        <p className="h3 poppins-bold">{recipe.menu.toUpperCase()}</p>
        <p className="p poppins-regular">{recipe.description}</p>
        <div className="flex flex-row justify-between py-2">
          <div class="icon-box bg-blue-100 rounded-2xl">
            <p class="span poppins-bold">{recipe.category}</p>
          </div>
          <div className="flex flex-row gap-2">
            <div class="icon-box bg-gray-200 rounded-full " onClick={onEdit}>
              <img width={20} src="./components/assets/edit.png" alt="" />
            </div>
            <div class="icon-box bg-gray-200 rounded-full " onClick={onDelete}>
              <img width={20} src="./components/assets/delete.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
