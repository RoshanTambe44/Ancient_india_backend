const Warrior = require("../models/warrior.model");

// Get all warriors
const getAllWarriors = async (req, res) => {
    try {
        const warriors = await Warrior.find();
        res.json(warriors);
    } catch (err) {
        console.error("Error fetching warriors:", err);
        res.status(500).json({ message: "Error fetching data", error: err.message });
    }
};


// Get a single warrior by name
const getWarriorByName = async (req, res) => {
    try {
        const { name } = req.params;
        const warrior = await Warrior.findOne({ name: name });

        if (!warrior) {
            return res.status(404).json({ message: "Warrior not found" });
        }

        res.json(warrior);
    } catch (err) {
        console.error("Error fetching warrior:", err);
        res.status(500).json({ message: "Error fetching warrior", error: err.message });
    }
}


module.exports = { getAllWarriors, getWarriorByName };