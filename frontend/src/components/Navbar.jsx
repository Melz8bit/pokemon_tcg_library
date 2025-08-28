import { useState } from "react";
import { Link } from "react-router";
import { Search } from "lucide-react";

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <header className="container mx-auto px-0 py-8">
            <div className="">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">Pokemon Thing</h1>
                    <div className="input-group-div border">
                        <span className="input-group-span px-2">
                            Search
                        </span>
                        <input id="searchBar" className="pl-2" placeholder="Pikachu"
                            value={searchTerm} onChange={handleInputChange}></input>
                        <Link to={searchTerm ? `/search/${searchTerm}` : '/'} className="btn btn-primary mx-auto my-auto w-auto px-2">
                            <Search className="size-5" />
                        </Link>
                    </div>
                </div>
                <hr />
            </div>
        </header >
    );
};
export default Navbar;