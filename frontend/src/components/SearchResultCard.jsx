import api from "../lib/axios";
import { useState, useEffect } from "react";


const SearchResultCard = ({ card }) => {
    return (
        <div className="border rounded-lg my-2 p-3">
            <div class="grid grid-flow-col grid-rows-2 gap-4">
                <div class="row-span-2 border">
                    <img className="h-50" src={`${card.image}/low.jpg`} />
                </div>
                <div class="col-span-1 border font-semibold">{card.name}</div>
                <div class="col-span-1 border">{card.setName}</div>
            </div>
        </div>
    );
};

export default SearchResultCard;