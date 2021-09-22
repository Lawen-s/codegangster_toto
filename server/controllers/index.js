const { User } = require('../models');
const { todos } = require('../models');

module.exports ={
    get:async(req, res) =>{
        // const allUrlLink = await models.url.findAll();
        const result = await todos.findAll().catch((err)=> res.json(err));
        console.log(User)

        if(!result) return res.status(404).json('not found');
        res.status(200).json(result);
    },

    post: async(req, res) =>{
        // Todo api 
        const todo = req.body.todo;
        const userId = req.body.userId;
        if(!todo) {
          return res.sendStatus(400);
        }
        const userInfo = await User.findOne({where: {userId: userId}}).catch((err) => res.json(err));
        const result = await todos.create({todo: todo, userId: userInfo.id}).catch((err) => res.json(err));
        // const fk = await todos.findOne();
        // console.log((await fk.createUser()).toJSON());
        if(!result) return res.status(404).json('not found')
        res.status(200).json({message: 'created', data: result});
    },

    delete: async(req, res) =>{
        

        const id = req.body.id;
        if(!id) return res.sendStatus(400);

        await todos.destroy({where: {id: id}}).catch((err)=>res.json(err));
        
        return res.status(204).json({message: 'delete!'})
    }
}
