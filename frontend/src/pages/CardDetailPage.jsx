import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import { ArrowLeftIcon, Columns3, LoaderIcon, Trash2Icon } from "lucide-react";

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
        <div className="bg-base-200 justify-start md:justify-center">
            <div className="container border mx-auto px-4 py-8">
                <h1 class="text-4xl mb-2">{card.name}</h1>
                <div class="columns-2xs">
                    <div class="items-center">
                        <img class="rounded-xl" src={card.image} alt={card.name} width="300" />
                    </div>
                    <div class="w-xl">
                        <div class="input-group-div">
                            <span class="input-group-span">
                                Set Name
                            </span>
                            <label type="text" class="input-group-input">
                                <div class="flex justify-evenly">
                                    <label class="content-center">{card.set.name}</label>
                                    <img src={card.set.symbol} alt={card.name} class="ml-2 items-end md:block hidden" />
                                </div>
                            </label>
                        </div>
                        <div class="input-group-div">
                            <span class="input-group-span">
                                Card Count
                            </span>
                            <label type="text" class="input-group-input">
                                {card.localId} / {card.set.cardCount.total}
                            </label>
                        </div>
                        <div class="input-group-div">
                            <span class="input-group-span">
                                First Edition
                            </span>
                            <label type="text" class="input-group-input">
                                {card.variants.firstEdition ? "Yes" : "No"}
                            </label>
                        </div>
                        <div class="input-group-div">
                            <span class="input-group-span">
                                Normal
                            </span>
                            <label type="text" class="input-group-input">
                                {card.variants.normal ? "Yes" : "No"}
                            </label>
                        </div>
                        <div class="input-group-div">
                            <span class="input-group-span">
                                Holographic
                            </span>
                            <label type="text" class="input-group-input">
                                {card.variants.holo ? "Yes" : "No"}
                            </label>
                        </div>
                        <div class="input-group-div">
                            <span class="input-group-span">
                                Reverse Holo
                            </span>
                            <label type="text" class="input-group-input">
                                {card.variants.reverse ? "Yes" : "No"}
                            </label>
                        </div>
                        <div class="input-group-div">
                            <span class="input-group-span">
                                Promo
                            </span>
                            <label type="text" class="input-group-input">
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
