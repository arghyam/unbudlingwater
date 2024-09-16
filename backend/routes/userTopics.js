const express = require('express');
const router = express.Router();
const { UserTopic } = require('../models');

router.get('/:id', async (req, res) => {
  try {
    const result = await UserTopic.findByPk(req.params.id);
    if (res) {
      res.json(result);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;