import axios from 'axios';

const Restapi = axios.create({baseURL:'https://api.coinmarketcap.com/v2/ticker/?convert=IDR&limit=50'});

export default Restapi;