import inquirer from 'inquirer';

const nameSpend = [
    {
        type: 'input',
        name: 'name_spend',
        message: 'Escribe aqui el nombre nombre de tu producto'
    }
];

const questions = [
    {
        type: 'input',
        name: 'spend',
        message: 'Escribe aqui tu gasto reciente'
    }
];

const searchSpend = [
    {
        type: 'input',
        name: 'search_spend',
        message: 'Ingrese el gasto que desea buscar',
    },
];

export const promptNameSpend = () => {
    return new Promise((resolve, reject) => {
        try{
            inquirer.prompt(nameSpend).then(res => {resolve(res)})
        }catch(error){
            reject(error)
        }
    })
}

export const promptSpend = () => {
    return new Promise((resolve, reject) => {
        try{
            inquirer.prompt(questions).then(res => {resolve(res)})
        }catch(error){
            reject(error)
        }
    })
}

export const promptObtenerNombreGasto = () => {
    return new Promise((resolve, reject) => {
        try{
            inquirer.prompt(searchSpend).then(res => {resolve(res)})
        }catch(error){
            reject(error)
        }
    })
}