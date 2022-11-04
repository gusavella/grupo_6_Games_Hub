const controller = {
    register : (req, res) => {
        res.render ("register.ejs",{tittle:'Register'});
    },
};

module.exports = controller;