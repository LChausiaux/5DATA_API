const express = require('express');
const router = express.Router();

let Sondages = require('../Models/sondage.model');


router.get('/', (req, res) => {
    Sondages.find((err, sondages) => {
        if (err)
            console.log(err);
        else
            res.json(sondages);
    });
});


router.get('/ects/campus', (req, res) => {
    Sondages.find({nombreCrédit: { $ne: 0 }}, 'nombreCrédit campus', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/ects/visChezParent', (req, res) => {
    Sondages.find({nombreCrédit: { $ne: 0 }}, 'nombreCrédit visChezParent', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/ects/promo', (req, res) => {
    Sondages.find({nombreCrédit: { $ne: 0 }}, 'nombreCrédit promo', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/rattrapageParAn/campus', (req, res) => {
    Sondages.find({}, 'rattrapageParAn campus', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/rattrapageParAn/promo', (req, res) => {
    Sondages.find({}, 'rattrapageParAn promo', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/rattrapageParAn/campus', (req, res) => {
    Sondages.find({}, 'rattrapageParAn campus', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/raisonArret', (req, res) => {
    Sondages.find({}, 'raisonArret', (err, items) => {
        if (err)
            console.log(err);
        else
        {
            res.json(items);
        }
    });
});

router.get('/decouverte/campus', (req, res) => {
    Sondages.find({}, 'decouverte campus', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/premierChoix/campus', (req, res) => {
    Sondages.find({}, 'premierChoix campus', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/labo/campus', (req, res) => {
    Sondages.find({}, 'labo campus', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/mangerSurPlace/campus', (req, res) => {
    Sondages.find({}, 'mangerSurPlace campus', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/stage/campus', (req, res) => {
    Sondages.find({}, 'stage campus', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/contratPro/campus', (req, res) => {
    Sondages.find({}, 'contratPro campus', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/stage/promo', (req, res) => {
    Sondages.find({}, 'stage promo', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/contratPro/promo', (req, res) => {
    Sondages.find({}, 'contratPro promo', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/stage', (req, res) => {
    Sondages.find({stage: { $ne: "" }}, 'stage', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

router.get('/contratPro', (req, res) => {
    Sondages.find({contratPro: { $ne: "" }}, 'contratPro', (err, items) => {
        if (err)
            console.log(err);
        else
            res.json(items);
    });
});

module.exports = router;
