const express = require('express');
const router = express.Router();
const { createRoom, getMessages } = require('../controllers/chatcontroller');
const authenticateJWT = require('../middlewares/authmiddleware');

router.post('/room', authenticateJWT, createRoom);
router.get('/room/:roomId/messages', authenticateJWT, getMessages);

module.exports = router;
