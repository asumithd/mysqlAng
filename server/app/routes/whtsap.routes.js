module.exports = app => {
    const whtsaps = require('../controllers/whtsap.controller');

    var router = require('express').Router();

    router.post('/', whtsaps.create);
    router.get('/', whtsaps.findAll);
    router.get('/published', whtsaps.findAllPublished);
    router.get('/:id', whtsaps.findOne);
    router.put('/:id', whtsaps.update);
    router.delete('/:id', whtsaps.delete);
    router.delete('/', whtsaps.deleteAll);
    app.use('/api/whtsaps', router)
};