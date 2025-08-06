import TCGdex, { Query } from '@tcgdex/sdk'

const tcgdex = new TCGdex('en');

export async function searchCards(req, res) {
    // filter, sort & paginate the result (ex: find card where name is equal to furret)
    const cards = await tcgdex.card.list(new Query().like('name', req.params.cardName));

    cards.forEach(card => {
        delete card.sdk;
    });

    res.json(cards);
}