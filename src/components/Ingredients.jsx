

const Ingredients = () => {
    const IngredientsList = [
        "2-3 large eggs", "Salt, to taste", "Pepper, to taste", "1 tablespoon of butter or oil",
        "Optional fillings: cheese, diced vegetables, cooked meats, herbs"]
    return (
        <div className="pb-7 border-b border-LightGrey">
            <h3 className="text-3xl my-5 text-Nutmeg font-medium">Ingredients</h3>
            <ul>
                {IngredientsList.map((list, index) => <li className={`ml-5 ${index == IngredientsList.length - 1 ? "mb-0" : "mb-4"} text-WengeBrown font-medium text-4`}
                key={index}><span className="ml-4">{list}</span></li>)}
            </ul>
        </div>
    )
}

export default Ingredients;
