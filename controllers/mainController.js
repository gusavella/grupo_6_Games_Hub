const path = require("path");

const controlador = {
  index: (req, res) => {
    res.render("index",{tittle:'hola'});
  },
  about: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/about.html"));
  },
  register:(req, res) => {
    res.render("register");
},
};

module.exports = controlador;
