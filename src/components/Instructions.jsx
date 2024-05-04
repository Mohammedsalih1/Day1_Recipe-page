

const Instructions = () => {

    const Instructions = [
        {
            id: 1,
            title: "Beat the eggs",
            disc: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
        },
        {
            id: 2,
            title: "Heat the pan",
            disc: "Place a non-stick frying pan over medium heat and add butter or oil."
        },
        {
            id: 3,
            title: "Cook the omelette",
            disc: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
        },
        {
            id: 4,
            title: "Add fillings (optional)",
            disc: "Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
        },
        {
            id: 5,
            title: "Fold and serve",
            disc: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
        },
        {
            id: 6,
            title: "Enjoy",
            disc: "Serve hot, with additional salt and pepper if needed."
        }
    ]

    return (
        <div className="pb-7 border-b border-LightGrey">
            <h3 className="text-3xl my-5 text-Nutmeg font-medium">Ingredients</h3>
            <ol>
                {Instructions.map((list, index) => <li className={`${index == Instructions.length - 1 ? "mb-0" : "mb-3"} text-[16px] ml-5 text-WengeBrown`} key={list.id}>
                    <p className="ml-3"><span className="font-bold text-WengeBrown">{list.title}</span>: {list.disc}</p>
                </li>)}
            </ol>
        
        </div>
    )
}

export default Instructions;
