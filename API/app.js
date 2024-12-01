const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

// Chamando os modelos criados no mongoose (primeiro eu chamei eles separadamente, mas com o index eu consigo chama-los juntos)
const { List, Task } = require('./db/models');


//Load middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/tasks', Task);

/* ROUTE HANDLERS*/


/* LIST ROUTES */

/* Pegar / lists 
O propósito é de pegar todas as listas */

app.get('/lists', (req, res) => {
    //retornar um array de todas as listas da database
    List.find().then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})


/*
POST /list 
O proposito criar a lista
*/
app.post('/lists', (req, res) => {
    //vamos criar uma nova lista e retornar a nova lista para o usuario (o que vai incluir o ID)
    // O campo de informação da lista sera repassado pelo json request body

    let title = req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc) => {
        //the full list document is returned (includ. id)
        res.send(listDoc);
    })
});

/**
 * PATH /lists/:id
 * O proposito: atualizar uma lista especifica
 * 
 */

app.patch('/lists/:id', (req, res) =>{
    //aqui vamos atualizar a lista especifica (a lista com o id na URL) com os novos valores especificados no corpo do Json

    List.findOneAndUpdate({_id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    })
    
}) 

app.delete('/lists/:id', (req, res) => {
    //aqui vamos excluir a lista especifica 
    List.findOneAndDelete({
        _id: req.params.id
    }).then((removedListDoc) => {
        res.send(removedListDoc);
    }) 
});

/**
 * GET /lists/:listId/tasks
 * Poposito: pegar todas as tarefas em uma lista 
 */

//é pra ter todas as tarefas de uma lista especifica
app.get('/lists/:listId/tasks', (req, res) => {
    //retornar todas as tarefas que pertencem a uma lista especifica

    Task.find({
        _listId: req.params.listId
    }).then((task) => {
        res.send(task);
    })
});

/**
 * POST /lists/:listId/tasks
 * Poposito: pegar todas as tarefas em uma lista 
 */

//é pra ter todas as tarefas de uma lista especifica
app.post('/lists/:listId/tasks', (req, res) => {
    //aqui nos queremos criar uma nova tarefa em uma lista especifica do listId

    let newTask = new Task({
        title: req.body.title,
        _listId: req.params.listId
    });
    
    newTask.save().then((newTaskDoc) => {
        res.send(newTaskDoc);
    }).catch((e) => {
        res.send(e)
    });
});


app.listen(4000, () => {
    console.log("Server is listening on port 4000")
});