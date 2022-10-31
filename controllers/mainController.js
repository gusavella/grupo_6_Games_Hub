const path = require("path");

const controlador = {
  index: (req, res) => {
    res.render('main.ejs');
  },
  about: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/about.html"));
  },
  register:(req, res) => {
    res.render("register");
},
};

module.exports = controlador;
