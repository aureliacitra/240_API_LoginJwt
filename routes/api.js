const express = require('express');
const router = express.Router();

const komikController = require('../controller/komikController');
const userController = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');

// User routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Komik routes (protected)
router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);

router.post('/komik', authMiddleware, komikController.createKomik);
router.put('/komik/:id', authMiddleware, komikController.updateKomik);
router.delete('/komik/:id', authMiddleware, komikController.deleteKomik);

module.exports = router;