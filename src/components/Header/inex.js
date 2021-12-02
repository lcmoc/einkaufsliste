import Input from "../Input";

const Header = () => {
    return(
        <div className="MainContainer">
            <div className="flex items-start justify-start flex-col bg-blue-400 w-96">
                <h1 className="text-white text-3xl p-text my-5 ml-5">Einkaufsliste</h1>
                <Input />
            </div>
        </div>
    )
};

export default Header