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

export const obtenerTotalDeGastosRealizados = async (nombre) => {
    const spends = await get("./spends.json")
    const userToReturn = spends.filter(user => user.name_spend === nombre.search_spend)
    return userToReturn[0]
}