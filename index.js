import inquirer from 'inquirer';
import {save, get, obtenerTotalDeGastosRealizados} from './readWritePromises.js'
import {promptSpend, promptObtenerNombreGasto} from './promptSpend.js'



const main = async() => {
    let promptCorriendo = true
    while(promptCorriendo){
        const opciones = await inquirer.prompt([
            {
                type: 'list',
                name: 'choices',
                message: '¿Selecciona una opción',
                choices:[
                   // {value:1, name: "Escriba el nombre del producto"}, 
                    {value:1, name: "Agregar nuevo gasto"},
                    {value:2, name: "Obtener gastos realizados"},
                    {value:3, name: "Buscar gasto especifico"},
                    {value:4, name: "Salir"},
                ]
            }
        ])
    


switch(opciones.choices){
   // case 1:
       // await createNewSpendName();
       // break;
    case 1:
        await createNewSpend();
        break;
        case 2:
            await getAllSpends();
            break;
            case 3:
                await getOneSpend();
                break;
                case 4:
                    promptCorriendo = false
                    break
                    default:
                        promptCorriendo = false
                        break;
                        

}
}
}

main()
/*
const createNewSpendName = async () => {
    const spend = await promptNameSpend()
    const spendJson = await get("./spends.json")
    const newSpendData = [...spendJson, spend]

    save("./spends.json", newSpendData)
}*/

const createNewSpend = async () => {
    const spend = await promptSpend()
    const spendJson = await get("./spends.json")
    const newSpendData = [...spendJson, spend]

    save("./spends.json", newSpendData)
}

const getAllSpends = async() => {
    const spends = await get("./spends.json")
    console.log(spends)
}

const getOneSpend = async() => {
    const spend = await promptObtenerNombreGasto()
    const spends = await obtenerTotalDeGastosRealizados(spend)
    console.log(spends)
}