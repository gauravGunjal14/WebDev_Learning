import { RestaurantData } from "../Utils/RestaurantData";

export default function Restaurant() {
    return (
        <div className="mt-30 w-[80%] mx-auto font-serif">
            <h3 className="text-2xl font-bold mb-8">Discover best restaurants on Dineout</h3>
            <div className="flex gap-10 justify-center flex-wrap">
                {RestaurantData.map((RestaurantItem) => (
                    <div key={RestaurantItem.info.id} className="cursor-pointer w-36 flex flex-col items-center gap-2 text-center">
                        <a href={`https://www.swiggy.com/restaurants/${RestaurantItem.info.id}/dineout`} target="_blank" rel="noopener noreferrer" className="w-36 h-45">
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${GroceriesItem.imageId}`} alt={GroceriesItem.name} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}