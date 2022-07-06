const userData = require("./userdata");

const getData = (req, res) => {
    return res.json(userData);
};

const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username == userData.username && password == userData.password) {
        return res.send("ok");
    } else {
        return res.send("gagal");
    }
};

module.exports = { getData, login };