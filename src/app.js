const contactController = require('./controllers/contact.controller');
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to contact book application. '});
});

app.route('/api/contacts')
    .get(contactController.findAll)
    .post(contactController.create)
    .delete(contactController.deleteAll);

app.route('/api/contacts/favorite').get(contactController.findAllFavorite);

app.route('/api/contacts/:id(\\d+)')
    .get(contactController.findOne)
    .put(contactController.update)
    .delete(contactController.delete);


module.exports = app;