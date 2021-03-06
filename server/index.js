const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "hellow from the server!" });
});

app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server is listening on ${port}`);
});
