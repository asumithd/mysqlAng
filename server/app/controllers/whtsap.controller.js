const db = require('../models');
const Whtsap = db.whtsaps;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }
    const whtsap = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };
    Whtsap.create(whtsap).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'some error occurred while creating the whtsap.'
        });
    });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}` } } : null;
    Whtsap.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'some error occurred while creating the whtsap.'
        });
    });
}

exports.findOne = (req, res) => {
    const id = req.params.id;
    Whtsap.findByPk(id).then(data => { res.send(data) }).catch(err => {
        res.status(500).send({
            message: err.message || 'some error occurred while creating the whtsap.'
        });
    });
}

exports.update = (req, res) => {
    const id = req.params.id;
    Whtsap.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: 'Whtsap was updated'
            })
        } else {
            res.send({
                message: 'Can not updateed'
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'some error occurred while creating the whtsap.' + id
        });
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Whtsap.destroy(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: 'Whtsap was deleted'
            })
        } else {
            res.send({
                message: 'Can not deleteded'
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'some error occurred while creating the whtsap.' + id
        });
    });
}

exports.deleteAll = (req, res) => {
    Whtsap.destroy({ where: {}, truncate: false }).then(nums => {
        res.send({ message: `${nums} Whatsap were deleted successfully` });
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'some error occurred while deleteing the whtsap.'
        });
    });
}

exports.findAllPublished = (req, res) => {
    Whtsap.findAll({ where: { published: true } }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'some error occurred while retriving the whtsap.'
        });
    });
}