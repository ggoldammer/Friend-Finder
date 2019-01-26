const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json);

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

//Start port listener
app.listen(PORT, function(){
    console.log("Listening on PORT " + PORT);
});