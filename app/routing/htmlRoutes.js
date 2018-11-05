const server = require("../../server");

const app = express();
const port = process.env.PORT || 8080;

module.exports = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "./app/public/survey.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "./app/public/home.html"));
    });

    app.get("*", function (req, res){
        res.sendFile(path.join(__dirname, "./app/public/home.html"));
    });
}