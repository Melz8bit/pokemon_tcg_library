import TCGdex, { Query } from '@tcgdex/sdk'

const tcgdex = new TCGdex('en');

export async function searchCards(req, res) {
    const cards = await tcgdex.card.list(new Query().like('name', req.params.cardName));

    // Create an array of promises for each card
    const cardPromises = cards.map(async card => {
        // Fetch the full details for the card
        const card_detail = await tcgdex.card.get(card.id);

        // Add the set name to the card object
        card.setName = card_detail.set.name;

        if (card.image) {
            card.image += "/low.jpg";
        }

        // Clean up the sdk property and return the modified card
        delete card.sdk;
        return card;
    });

    // Wait for all promises to resolve
    const detailedCards = await Promise.all(cardPromises);

    // Send the response with the fully detailed cards
    res.json(detailedCards);
}