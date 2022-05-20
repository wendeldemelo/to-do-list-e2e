const app = require('./src/routers/app');
require('dotenv').config();

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
