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
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-4 py-8">
                <h1 class="text-4xl mb-2">{card.name}</h1>
                <div class="columns-2xs">
                    <div class="items-center">
                        <img class="rounded-xl" src={card.image} alt={card.name} width="300" />
                    </div>
                    <div class="">
                        <div class="flex rounded-lg mt-2">
                            <span class="w-1/2 px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                                Set Name
                            </span>
                            <label type="text" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-e-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                <div class="flex content-evenly justify-between align-center">
                                    <label class="content-center">{card.set.name}</label>
                                    <img src={card.set.symbol} alt={card.name} class="items-end" />
                                </div>
                            </label>
                        </div>
                        <div class="flex rounded-lg mt-2">
                            <span class="w-1/2 px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                                Card Count
                            </span>
                            <label type="text" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-e-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                {card.set.cardCount.official} / {card.set.cardCount.total}
                            </label>
                        </div>
                        <div class="flex rounded-lg mt-2">
                            <span class="w-1/2 px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                                First Edition
                            </span>
                            <label type="text" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-e-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                {card.variants.firstEdition ? "Yes" : "No"}
                            </label>
                        </div>
                        <div class="flex rounded-lg mt-2">
                            <span class="w-1/2 px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                                Normal
                            </span>
                            <label type="text" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-e-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                {card.variants.normal ? "Yes" : "No"}
                            </label>
                        </div>
                        <div class="flex rounded-lg mt-2">
                            <span class="w-1/2 px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                                Holographic
                            </span>
                            <label type="text" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-e-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                {card.variants.holo ? "Yes" : "No"}
                            </label>
                        </div>
                        <div class="flex rounded-lg mt-2">
                            <span class="w-1/2 px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                                Reverse Holo
                            </span>
                            <label type="text" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-e-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                {card.variants.reverse ? "Yes" : "No"}
                            </label>
                        </div>
                        <div class="flex rounded-lg mt-2">
                            <span class="w-1/2 px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                                Promo
                            </span>
                            <label type="text" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-e-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
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
