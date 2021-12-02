import trash from "../../assets/trash.png";

const Input = () => {
  return (
    <div className="flex items-start justify-start">
      <input type="text" className="mb-3 ml-5 w-52" />
      <button className="w-6 h-6 bg-gray-200 ml-1">+</button>
      <button>
        <img src={trash} alt="trashcan" className="ml-20 w-6 h-6" />
      </button>
    </div>
  );
};

export default Input;
