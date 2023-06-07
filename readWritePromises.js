import fs from "fs"

export const get = (file) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(file, "utf-8",(error, contenido) => {
            if(error){
                reject(error)
            }else{
                resolve(JSON.parse(contenido))
            }
        })
    })
}

export const save = (file, newData) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile(file, JSON.stringify(newData), (error) => {
            if(error){
                reject(error)
                }else{
                    resolve("se escribio el archivo correctamente")
            }
         })
    })
}

export const obtenerTotalDeGastosRealizados = async (spend) => {
    const spends = await get("./spends.json")
    const nameLower = spend.search_spend.toLowerCase();
    const userToReturn = spends.filter(user => user.name_spend === nameLower)
    return userToReturn[0]
}