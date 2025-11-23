const express = require('express');
const path = require('path'); // Yeh line zaroori hai
const app = express();
const PORT = process.env.PORT || 8081;

// YEH LINE AAPKE FRONT-END AUR VERIFICATION FILE KO SERVE KAREGI
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello! My server is live.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});