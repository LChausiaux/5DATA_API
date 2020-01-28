const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Sondage = new Schema({
    villeOrigine: {
        type: String
    },
    campus: {
        type: String
    },
    promo: {
        type: String
    },
    diplomeAnterieur: {
        type: String
    },
    decouverte: {
        type: String
    },
    premierChoix: {
        type: Boolean
    },
    raisonArret: {
        type: String
    },
    mangerSurPlace: {
        type: Boolean
    },
    nombreCredit: {
        type: Number
    },
    contratPro: {
        type: String
    },
    stage: {
        type: String
    },
    visChezParent: {
        type: Boolean
    },
    labo: {
        type: Boolean
    },
    optionSupplementaire: {
        type: Boolean
    },
    rattrapageParAn: {
        type: Number
    },
});

module.exports = mongoose.model('sondage', Sondage);