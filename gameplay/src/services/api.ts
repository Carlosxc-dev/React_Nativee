import axios from 'axios'

const api = axios.create({
    baseURL: 'https://discord.com/api'  //com isso  nao precisa ficar reescrevendo a mesma URL
})

export {api}