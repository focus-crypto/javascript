import Database from "better-sqlite3"

const db =new Database("./data/sports.db")

export const getEquipmentByID = (id)=>
    db.prepare("SELECT * FROM equipments WHERE id = ?").get(id)
export const getEquipmentByCategory = (category)=>
    db.prepare("SELECT * FROM equipments WHERE category =?").all(category)

export const updateEquipment = (id,name,category,brand,price,quantity)=>{
    db.prepare("UPDATE equipments WHERE id = ? (name,category,brand,price,quantity) (?,?,?,?,?)").run(id,name,category,brand,price,quantity)
}
export const deleteEquipment = (id)=>{
    db.prepare("DELETE FROM equipment where id=?").run(id)
}