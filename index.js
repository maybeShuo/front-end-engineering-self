const express = require("express");
const app = express();

app.use(express.static("./public", {
    maxAge : "365 days"
}));

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`The server is running on the http://loacalhost:${port}...`);
});
