import express from 'express';

const router = express.Router();

// Routes
router.route('/author').get((req, res) => {
  res.json({ name: 'Author Name' });
});

export default router;
