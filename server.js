const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://abilfattoevozodbek:h45JMqnXSHrGoxu5@cluster0.nuorz68.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    // DATABASE va BACKENDni o'zaro ulash
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client.db();

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 8014;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
