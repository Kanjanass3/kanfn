const express = require('express');
const Sequelize = require('sequelize');
const app = express();

app.use(express.json());

const sequelize = new Sequelize('database','username','password',{
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/Song.sqlite'
});

const thaimusic = sequelize.define('thaimusics',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    song:{
        type: Sequelize.STRING,
        allowNull: false
    },
    artist:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
const koreamusic = sequelize.define('koreamusics',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    song:{
        type: Sequelize.STRING,
        allowNull: false
    },
    artist:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
const englishmusic = sequelize.define('englishmusics',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    song:{
        type: Sequelize.STRING,
        allowNull: false
    },
    artist:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

sequelize.sync();

//table thai songs
app.get('/thaimusics',(req, res) =>{
    thaimusic.findAll().then(books => {
        res.json(books);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/thaimusics/:id',(req, res) =>{
    thaimusic.findByPk(req.params.id).then(book => {
        if (!book){
            res.status(404).send('music not found');
        } else{
            res.json(book);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.post('/thaimusics',(req, res) =>{
    thaimusic.create(req.body).then(book => {
        res.send(book);
    }).catch(err => {
            res.status(500).send(err);
        });
    });

app.put('/thaimusics/:id',(req,res) => {
    thaimusic.findByPk(req.params.id).then(book => {
        if (!book) {
            res.status(404).send('Book not found');
        } else {
            book.update(req.body).then(() =>{
                res.send(book);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete('/thaimusics/:id',(req,res) => {
    thaimusic.findByPk(req.params.id).then(book => {
        if (!book){
            res.status(404).send('Book not found');
        } else {
            book.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

//table korea songs
app.get('/koreamusics',(req, res) =>{
    koreamusic.findAll().then(books => {
        res.json(books);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/koreamusics/:id',(req, res) =>{
    koreamusic.findByPk(req.params.id).then(book => {
        if (!book){
            res.status(404).send('music not found');
        } else{
            res.json(book);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.post('/koreamusics',(req, res) =>{
    koreamusic.create(req.body).then(book => {
        res.send(book);
    }).catch(err => {
            res.status(500).send(err);
        });
    });

app.put('/koreamusics/:id',(req,res) => {
    koreamusic.findByPk(req.params.id).then(book => {
        if (!book) {
            res.status(404).send('Book not found');
        } else {
            book.update(req.body).then(() =>{
                res.send(book);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete('/koreamusics/:id',(req,res) => {
    koreamusic.findByPk(req.params.id).then(book => {
        if (!book){
            res.status(404).send('Book not found');
        } else {
            book.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

//table english songs
app.get('/englishmusics',(req, res) =>{
    englishmusic.findAll().then(books => {
        res.json(books);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/englishmusics/:id',(req, res) =>{
    englishmusic.findByPk(req.params.id).then(book => {
        if (!book){
            res.status(404).send('music not found');
        } else{
            res.json(book);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.post('/englishmusics',(req, res) =>{
    englishmusic.create(req.body).then(book => {
        res.send(book);
    }).catch(err => {
            res.status(500).send(err);
        });
    });

app.put('/englishmusics/:id',(req,res) => {
    englishmusic.findByPk(req.params.id).then(book => {
        if (!book) {
            res.status(404).send('Book not found');
        } else {
            book.update(req.body).then(() =>{
                res.send(book);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete('/englishmusics/:id',(req,res) => {
    englishmusic.findByPk(req.params.id).then(book => {
        if (!book){
            res.status(404).send('Book not found');
        } else {
            book.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));

