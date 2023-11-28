const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/syvees_DB', { // UPDATE NAME OF DB
    useNewUrlParser: true, // USE TO GET RID OF DEPRECATION MESSAGES
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

