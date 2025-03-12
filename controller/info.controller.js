const Info = require("../models/info.model")

const getAllInfo = async (req, res) => {
    try {
        const infos = await Info.find();
        res.json(infos);
    } catch (err) {
        console.error("Error fetching warriors:", err);
        res.status(500).json({ message: "Error fetching data", error: err.message });
    }
};

const getInfoByName = async (req, res) => {
    try {
        const { name } = req.params;
        console.log(name);
        
        const info = await Info.findOne({ title: name });
        console.log(info);

        if (!info) {
            return res.status(404).json({ message: "info not found" });
        }

        res.json(info);
    } catch (err) {
        console.error("Error fetching warrior:", err);
        res.status(500).json({ message: "Error fetching warrior", error: err.message });
    }
}


module.exports = {getInfoByName, getAllInfo};