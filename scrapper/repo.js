const { request, response } = require("express");

//class="d-flex flex-wrap list-style-none gutter-condensed mb-
const axios = require('axios');
const cheerio = require('cheerio');
const url =
    'https://github.com/LinoMota';


axios(url).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const tabelaRepositorios = $('.pinned-item-list-item-content');
    const tabelaProjetos = [];


    tabelaRepositorios.each(function() {
        const nomeRepositorio = $(this).find('.repo').text();
        // const nomeDaLinguagem = $(this).find('.programmingLanguage').text();
        tabelaProjetos.push({
            nomeRepositorio
        });


    });
    console.log(tabelaProjetos);
}).catch(console.error);