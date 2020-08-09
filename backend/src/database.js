import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/graphqlreactdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(db => console.log('la base de datos esta conectada!!'))
    .catch(err => console.log(err));