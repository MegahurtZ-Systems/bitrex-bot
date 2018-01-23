var app = app || {};

(module => {

    const homePage = {}
    // const $view = $('#markets')



    homePage.init = (Markets) => {
       
        $('#markets').empty()
        Markets.forEach(markets=> {
            console.log(markets);
 
            $('#markets').append(`
            <li class="market-data" data-id="${markets.MarketName}">
            <img class="coin-logo" src="${markets.LogoUrl }">
            <h6>${markets.MarketCurrency }</h6> 
            <h6>${markets.BaseCurrency }</h6>
            <h6>${markets.MinTradeSize }</h6>
            </li>
            `)
        })
 
    //   $('#markets').on('click', 'li', (event) => {

    //     const id = $(event.target).data('id')
    //     page('/api/markets/one/' + id)

    // })    

    // $view.show()

    }
    
    module.homePage = homePage

}) (app)