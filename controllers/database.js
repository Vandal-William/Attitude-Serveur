
const { Model_name } = require('../models');

const database = {
    async findall(req, res) {
        const modelInfo = await Model_name.findAll(); // Récupérer la liste des tâches
        res.json(modelInfo); // Renvoyer la liste des tâches en json
    },

    async create(req, res) {
        const { champ_name } = req.body;
        const newInfo = await Model_name.create({ champ_name });
        res.send(newInfo);
    },

    async update(req, res) {
        const id = req.params.id;
        const info = await Model_name.findByPk(id);
        if (! info) {
            return res.status(404).json({ error: "Cannot find Task. Please verify the provided ID in the URL path."});
        }
        
        const { champ_name } = req.body;
        info.set({ champ_name });
        await info.save();
        res.json(info);
    },

    async delete(req, res) {
        const id = req.params.id;
        const info = await Model_name.findByPk(id);
        if (info) {
            await info.destroy();
        }
        res.status(204).end();
    }
};

module.exports = database;