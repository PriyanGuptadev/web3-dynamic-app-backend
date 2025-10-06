const express = require('express');
const { verifySignature } = require('../utils/verifySignature');

const router = express.Router();

router.post('/verify-signature', (req, res) => {
  const { message, signature } = req.body;

  if (!message || !signature) {
    return res.status(400).json({ error: 'Message and signature required' });
  }

  const result = verifySignature(message, signature);

  if (!result.isValid) {
    return res.status(400).json(result);
  }

  res.json(result);
});

module.exports = router;
