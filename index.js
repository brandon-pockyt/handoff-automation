import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello, Vercel!');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
