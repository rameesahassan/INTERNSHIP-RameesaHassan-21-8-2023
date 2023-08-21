
const express   = require('express');
const mongoose  = require('mongoose');
const morgan    = require('morgan');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/students');
const classRoutes = require('./routes/classes');

const app = express();
app.use(express.json());// Middleware to parse JSON request bodies
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
dotenv.config();

app.use('/students', studentRoutes);
app.use('/classes', classRoutes);

const connectionString=process.env.MONGODB_URL;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database connected');
}).catch((error) => {
  console.error('Database connection error:', error);
});




const PORT =process.env.PORT||5000;

app.listen(PORT, ()=>{
console.log(`Server is Running on the PORT ${PORT}`);
})
