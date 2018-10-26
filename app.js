const game = require("./src/client/index.js");

const app = require("./src/server/api");
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { 
     console.log("Server running on port " + PORT);
});