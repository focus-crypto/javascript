import express from "express";
import { deleteEquipment, getEquipmentByCategory, getEquipmentByID, updateEquipment } from "./data/db.js";
const PORT = 3000;
const app = express();

app.use(express.json);

app.get("/api/equipment/:id", (req, res) => {
  const id = req.params.id;
  const equipment = getEquipmentByID(id);
  if (!equipment)
    return res.status(404).json({ message: "Equipment not found." });
  return res.status(200).json(equipment);
});

app.get("/api/equipment/category/:category", (req, res)=>{
    const category = req.params.id;
    const equipment = getEquipmentByCategory(category);
    if (!equipment)
    return res.status(404).json({ message: "Equipment not found." });
    return res.status(200).json(equipment);
})

app.put("/api/equipment/:id", (req, res)=>{
    const id = req.params.id;
    const {name,category,brand,price,quantity} = req.body;
    if(name === "" || category === ""|| brand === ""|| price < 0 || quantity >= 0)
        return res.status(400).json({message : "Hibás adatok"})
  const equipment = getEquipmentByID(id);
  if (!equipment)
    return res.status(404).json({ message: "Equipment not found." });
    updateEquipment(id,name,category,brand,price,quantity)
    return res.status(200).json({message: "sikeres módosítás"})

})

app.delete("/api/equipment/:id", (req, res)=>{
    const id = req.params.id;
    if(!id)
        return res.status(404).json({message: "az id nem található"})
    deleteEquipment(id)
    return res.status(200).json({message: "sikeres törlés"})
})
app.listen(PORT, ()=>{
    console.log(`App running on http://localhost:${PORT}`)
})