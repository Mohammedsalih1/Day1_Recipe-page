
const Nutrition = () => {

const Nutrition = [{nutr: "Calories", value: "277kcal"}, {nutr: "Carbs", value: "0og"}, {nutr: "Protein", value: "20g"}, {nutr: "Fat", value: "22g"}];

    return (
        <div>
            <h3 className="text-3xl my-5 text-Nutmeg font-medium">Nutrition</h3>
            <p className=" text-WengeBrown mb-4">The table below shows nutritional values per serving without the additional fillings.</p>
            {Nutrition.map((data, index) => {
                return (
                    <div key={index} className={`flex justify-between py-4 text-WengeBrown font-semibold ${index !== Nutrition.length - 1 && "border-b border-LightGrey"}`}>
                        <span className="ml-4">{data.nutr}</span>
                        <span className="text-Nutmeg font-semibold basis-[50%] text-left">{data.value}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Nutrition
