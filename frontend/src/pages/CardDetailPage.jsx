import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import { ArrowLeftIcon, Columns3, LoaderIcon, Trash2Icon } from "lucide-react";
import Navbar from "../components/navbar";
import noImage from "../assets/no-image-high.png";

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
        <div className="bg-base-200 justify-start md:justify-center">
            <Navbar />
            <div className="container border mx-auto px-4 py-8">
                <h1 className="text-4xl mb-2">{card.name}</h1>
                <div className="columns-2xs">
                    <div className="items-center">
                        <img className="rounded-xl" src={card.image || noImage} alt={card.name} width="300" height="413" />
                    </div>
                    <div className="w-xl">
                        <div className="input-group-div">
                            <span className="input-group-span">
                                Set Name
                            </span>
                            <label type="text" className="input-group-input">
                                <div className="flex justify-evenly">
                                    <label className="content-center">{card.set.name}</label>
                                    {card.set.symbol && (
                                        <img src={card.set.symbol} alt={card.name} className="ml-2 items-end md:block hidden" width="31" height="31" />
                                    )}
                                </div>
                            </label>
                        </div>
                        <div className="input-group-div">
                            <span className="input-group-span">
                                Card Count
                            </span>
                            <label type="text" className="input-group-input">
                                {card.localId} / {card.set.cardCount.total}
                            </label>
                        </div>
                        <div className="input-group-div">
                            <span className="input-group-span">
                                First Edition
                            </span>
                            <label type="text" className="input-group-input">
                                {card.variants.firstEdition ? "Yes" : "No"}
                            </label>
                        </div>
                        <div className="input-group-div">
                            <span className="input-group-span">
                                Normal
                            </span>
                            <label type="text" className="input-group-input">
                                {card.variants.normal ? "Yes" : "No"}
                            </label>
                        </div>
                        <div className="input-group-div">
                            <span className="input-group-span">
                                Holographic
                            </span>
                            <label type="text" className="input-group-input">
                                {card.variants.holo ? "Yes" : "No"}
                            </label>
                        </div>
                        <div className="input-group-div">
                            <span className="input-group-span">
                                Reverse Holo
                            </span>
                            <label type="text" className="input-group-input">
                                {card.variants.reverse ? "Yes" : "No"}
                            </label>
                        </div>
                        <div className="input-group-div">
                            <span className="input-group-span">
                                Promo
                            </span>
                            <label type="text" className="input-group-input">
                                {card.variants.wPromo ? "Yes" : "No"}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetailPage;
