import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { LoaderIcon } from "lucide-react";
import api from "../lib/axios";


const SearchResultsPage = () => {
    const [results, setResult] = useState(null);
    const [loading, setLoading] = useState(true);

    const { searchName } = useParams();

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const res = await api.get(`/search/${searchName}`);
                if (res.data) {
                    setResult(res.data);
                }
                else {
                    setResult(null);
                }
            } catch (error) {
                console.log("Error in fetching results", error);
                // toast.error("Failed to fetch the card");
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [searchName]);

    if (loading) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <LoaderIcon className="animate-spin size-10" />
            </div>
        );
    }

    // Check if the card is null and display an error page
    if (!results) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center text-red-500 text-lg font-bold">
                Error: No results
            </div>
        );
    }

    return (
        <div className="bg-base-200 justify-start md:justify-center">
            <Navbar />
            <div className="container border mx-auto px-4 py-8">
                <div>{results.map(result => <img src={`${result.image}/low.jpg`} />)}</div>
            </div>
        </div>
    )
}

export default SearchResultsPage;