const Card = (props) => {
  return (
    <div data-testid="rescard" className="w-80 bg-white rounded-xl shadow-lg p-4 m-4 h-[400px] hover:bg-gray-50 transition duration-300 ease-in-out transform hover:scale-105">
      <div className="relative">
        <img
          className="rounded-lg h-[200px] w-full object-cover"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.cardContent.cloudinaryImageId}`}
          alt={props.cardContent.name}
        />
        {props.cardContent.isOpen && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-sm font-bold py-1 px-3 rounded-full shadow-md">
            Open
          </span>
        )}
      </div>
      <div className="card-content mt-4">
        <h1 className="font-bold text-lg text-gray-800">{props.cardContent.name}</h1>
        <p className="text-gray-600 my-1">{props.cardContent.areaName}</p>
        <p className="text-yellow-500 my-1">{props.cardContent.avgRating}</p>
        <p className="text-gray-500 my-1 truncate">{props.cardContent.cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export const Open = (Card) => {
  return (props) => {
    return (
      <div className="relative">
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
