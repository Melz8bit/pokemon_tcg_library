// import pokemon from 'pokemontcgsdk'
import TCGdex from '@tcgdex/sdk'

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
    // try {
    //     const note = await Note.findById(req.params.id);
    //     if (!note) return res.status(404).json({ message: "Note not found!" });
    //     res.json(note);
    // } catch (error) {
    //     console.error("Error in getNoteById controller", error);
    //     res.status(500).json({ message: "Internal server error" });
    // }
    // console.log('base1-' + req.params.id);

    // console.log(pokemon.apiKey);

    // try {
    //     const pkmn_card = await pokemon.card.find('base1-' + req.params.id)
    //     console.log(pkmn_card);
    //     // if (!pkmn_card) return res.status(404).json({ message: "Card not found!" });
    //     console.log("here");
    //     res.json(pkmn_card);
    // } catch (error) {
    //     console.error("Error in getCardById controller");
    //     res.status(500).json({ message: "Internal server error" });
    // }
    const card = await tcgdex.card.get(req.params.id);
    if (!card) return res.status(404).json({ message: "Card not found!" });

    delete card.sdk;
    card.image += "/high.jpg";

    if (card.set.symbol.charAt(card.set.symbol.length - 4) != '.')
        card.set.symbol += ".jpg";

    // console.log(card.name);
    res.json(card);
}

