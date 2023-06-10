const express = require("express");
const uuid = require("uuid");
const app = express();

app.get("/getCookies", async (req, res) => {
  try {
    const id = uuid.v4();
    res.cookie("id", id).json({
      status: "success",
      message: "cookies sent successfully",
    });
    console.log("hiiiiii");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = 8000;
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
