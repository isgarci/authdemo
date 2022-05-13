const express = require("express");
const cors = require("cors");
const authMiddleware = require("./auth-middleware");

const app = express();
app.use(cors());

const WhiteboardItems = [
  {
    id: 1,
    name: "Nothing to say today",
    link:
      "https://cpb-us-e1.wpmucdn.com/you.stonybrook.edu/dist/3/21/files/2016/02/post-it-note-1gr38qq-1m0t1rn.jpg",
  },
  {
    id: 2,
    name: "Fire Drill",
    link:
      "https://www.youtube.com/watch?v=gO8N3L_aERg",
  },
  {
    id: 3,
    name: "Happy Birthday",
    link: "<iframe src='https://giphy.com/embed/xUOrw4tlQfCTGmD5Kw' width='480' height='480' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/latenightseth-seth-meyers-birthday-cake-xUOrw4tlQfCTGmD5Kw'>via GIPHY</a></p>",
  },
];

//app.use("/", authMiddleware);
app.use(authMiddleware);

app.get("/WhiteboardItems", (request, response) => {
  return response.send({ WhiteboardItems });
});

app.listen(4000, () => console.log("The server is running at PORT 4000"));

