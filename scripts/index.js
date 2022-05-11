import getData from "../helpers/getData.js";
import character from "../module/character.js";



const container = document.getElementById('container')

const url = 'https://rickandmortyapi.com/api/character/';
const url2 = 'https://rickandmortyapi.com/api/episode/28';

document.addEventListener('DOMContentLoaded', async ()=>{

    let data = await getData(url)

    character(data, container)

 
})