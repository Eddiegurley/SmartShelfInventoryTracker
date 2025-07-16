const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();


const app = express();
const itemRoutes = require('./routes/itemRoutes');

app.use(cors())
app.use(express.json());
app.use('/api/items', itemRoutes);

app.get('/', (req, res) => res.send('SmartShelfInventory API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
