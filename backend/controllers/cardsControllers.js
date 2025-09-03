// import pokemon from 'pokemontcgsdk'
import TCGdex from '@tcgdex/sdk'
// import { noImage } from "../../frontend/src/assets/no-image.png"

// pokemon.configure({ apiKey: process.env.PKMN_API_KEY });
const tcgdex = new TCGdex('en');

export async function getAllCards(req, res) {
    // try {
    //     const note = await Note.findById(req.params.id);
    //     if (!note) return res.status(404).json({ message: "Note not found!" });
    //     res.json(note);
    // } catch (error) {
    //     console.error("Error in getNoteById controller", error);
    //     res.status(500).json({ message: "Internal server error" });
    // }
    console.log("hi");
}

export async function getCardById(req, res) {
    const card = await tcgdex.card.get(req.params.id);
    if (!card) return res.status(404).json({ message: "Card not found!" });

    delete card.sdk;

    if (card.image)
        card.image += "/high.jpg";

    if (card.set.symbol && card.set.symbol.charAt(card.set.symbol.length - 4) != '.')
        card.set.symbol += ".jpg";

    if (card.set.symbol && card.set.symbol.includes("undefined"))
        card.set.symbol = null;

    res.json(card);
}

