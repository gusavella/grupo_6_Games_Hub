const controller = {
    register : (req, res) => {
        res.render ("register/register.ejs",{tittle:'Register'});
    },
};

module.exports = controller;