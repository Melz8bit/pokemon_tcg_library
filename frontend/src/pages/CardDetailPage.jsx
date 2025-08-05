import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const CardDetailPage = () => {
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const fetchCard = async () => {
            try {
                const res = await api.get(`/cards/${id}`);
                if (res.data) {
                    setCard(res.data);
                }
                else {
                    setCard(null);
                }
            } catch (error) {
                console.log("Error in fetching card", error);
                // toast.error("Failed to fetch the card");
            } finally {
                setLoading(false);
            }
        };

        fetchCard();
    }, [id]);

    console.log(id);


    if (loading) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <LoaderIcon className="animate-spin size-10" />
            </div>
        );
    }

    // Check if the card is null and display an error page
    if (!card) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center text-red-500 text-lg font-bold">
                Error: Card not found.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-base-200">{card.name}</div>
    );
};

export default CardDetailPage;
