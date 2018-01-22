'use strict';

var app = app || {};

(function(module) {

  // const api_url = 'http://mhzsys.net:21010/api'; // remote
  // const api_url = 'http://192.168.1.10:3000/api'; // remote nick
  const api_url = 'http://localhost:3005/api'; // local


  function Bittrex() {

  }

  Bittrex.getMarkets = () => {
    return $.getJSON(`${api_url}/bittrex/markets`).then(data => { 
      app.homePage.init(data);
      console.log(data, 'got markets data')
    }).catch(err => console.error(err));
  };

//   Movie.getRecommend = () => {
//     return $.getJSON(`${api_url}/movies/recommend`).then(data => { 
//       app.homeView.init(data);
//       console.log(data, 'got your reccommended')
//     }).catch(err => console.error(err));
//   };

//   Movie.getOne = (id) => {
//     return $.getJSON(`${api_url}api/movies/one/${id}`).catch(err => console.error(err));
//   };

//   Movie.searchAll = (title) => {
//     return $.getJSON(`${api_url}/movies/${title}`).catch(err => console.error(err));
//   };

//   Movie.createUser = (user) => {
//     $.post(`${api_url}/movies/create_user`, user).catch(err => console.error(err));
//   };

  module.Bittrex = Bittrex;
})(app);