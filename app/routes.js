const express = require('express');

const router = express.Router();

// Middlewares
const auth = require('./middlewares/auth');

//Controller
const UserController = require('./controllers/User');
const  CategoryController= require('./controllers/Category');
const  NewsController= require('./controllers/News');



// User
router.post('/api/signup', UserController.create)
router.post('/api/signin', UserController.signin)

// Category
router.post('/api/categories',auth, CategoryController.add)
router.put('/api/categories/:id',auth, CategoryController.update)
router.delete('/api/categories/:id',auth, CategoryController.delete)

router.get('/api/categories', CategoryController.getAll)
router.get('/api/categories/:id', CategoryController.get)

// News

router.post('/api/news',auth, NewsController.add)
router.put('/api/news/:id',auth, NewsController.update)
router.delete('/api/news/:id',auth, NewsController.delete)

router.get('/api/news', NewsController.getAll)
router.get('/api/news/:id', NewsController.get)




module.exports = router;