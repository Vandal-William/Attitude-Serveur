const react = {
    routing(req, res) {
        res.sendFile('../build', 'index.html');
    }
}

module.exports = react;