import noImage from "../assets/no-image-high.png";


const SearchResultCard = ({ card }) => {
    return (
        <div className="border rounded-lg my-2 p-3">
            <div className="w-1/2">
                <div className="grid grid-flow-col grid-rows-2 gap-4">
                    <div className="row-span-2 border w-full">
                        <img className="h-50" src={`${card.image || noImage}`} />
                    </div>
                    <div className="col-span-1 border font-semibold">{card.name}</div>
                    <div className="col-span-1 border">{card.setName}</div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultCard;