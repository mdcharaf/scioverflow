import express from 'express';
import router from './router.js';

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', router);
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(port, () => console.log(`Running on port ${port}`));
