import { photo } from "../assets"

const Header = () => {
    const prepData = [
        {title: "Total", time: "Approximately 10 minutes"}, {title: "Preparation", time: "5 minutes"}, {title: "Cooking", time: "5 minutes"}
    ]
    return (
        <div className="mb-4">
            <img className="rounded-[8px]" src={photo} alt="header images" />
            <h1 className="text-[2rem] my-4 text-DarkCharcoal font-bold">Simple Omelette Recipe</h1>
            <p className="text-[1rem] text-DarkCharcoal">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
            to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>

            <div className="my-4 bg-RoseWhite rounded-md p-5">
                <h2 className="text-xl text-DarkRaspberry font-bold mb-2">Preparation Time</h2>
                <ul>
                    {prepData.map((data) => {
                        return (
                            <li className="my-3 ml-6" key={data.title}><span className="font-bold ml-4 text-DarkCharcoal">{data.title}</span>: {data.time}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Header
