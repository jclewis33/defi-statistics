window.Webflow = window.Webflow || [];
window.Webflow.push(() => {
  const api_url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ref-finance&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  async function getData() {
    try {
      const response = await fetch(api_url);
      const data = await response.json();

      // access the value of price from api
      const price = data[0].current_price;

      // check the value of price and format it accordingly
      let formattedPrice = '';
      if (price === null) {
        formattedPrice = 'N/A';
      } else if (price >= 1000000000) {
        formattedPrice = '$ ' + (price / 1000000000).toFixed(1) + ' B';
      } else if (price >= 1000000) {
        formattedPrice = '$ ' + (price / 1000000).toFixed(1) + ' M';
      } else if (price >= 1000) {
        formattedPrice = '$ ' + (price / 1000).toFixed(1) + ' K';
      } else {
        formattedPrice = `$ ${price} USD`;
      }

      // access the value of market_cap from api
      const marketCap = data[0].market_cap;

      // check the value of marketCap and format it accordingly
      let formattedMarketCap = '';
      if (marketCap === null) {
        formattedMarketCap = 'N/A';
      } else if (marketCap >= 1000000000) {
        formattedMarketCap = (marketCap / 1000000000).toFixed(1) + ' B';
      } else if (marketCap >= 1000000) {
        formattedMarketCap = (marketCap / 1000000).toFixed(1) + ' M';
      } else if (marketCap >= 1000) {
        formattedMarketCap = (marketCap / 1000).toFixed(1) + ' K';
      } else {
        formattedMarketCap = marketCap;
      }

      // access the value of high_24h from api
      const high24h = data[0].high_24h; //high_24h trading volume in 24hour period
      // access the value of high_24h from api
      const low24h = data[0].low_24h; //low_24h trading volume in 24hour period
      // average high_24h and low_24h to get average tradingVol
      const tradingVol = (high24h + low24h) / 2; //average trading vol in 24hour period

      // check the value of tradingVol and format it accordingly
      let formattedTradingVol = '';
      if (tradingVol === null) {
        formattedTradingVol = 'N/A';
      } else if (tradingVol >= 1000000000) {
        formattedTradingVol = (tradingVol / 1000000000).toFixed(1) + ' B';
      } else if (tradingVol >= 1000000) {
        formattedTradingVol = (tradingVol / 1000000).toFixed(1) + ' M';
      } else if (tradingVol >= 1000) {
        formattedTradingVol = (tradingVol / 1000).toFixed(1) + ' K';
      } else {
        formattedTradingVol = tradingVol;
      }

      // access the value of fully_diluted_valuation from api
      const dilutedValuation = data[0].fully_diluted_valuation;

      // check the value of dilutedValuation and format it accordingly
      let formattedDilutedValuation = '';
      if (dilutedValuation === null) {
        formattedDilutedValuation = 'N/A';
      } else if (dilutedValuation >= 1000000000) {
        formattedDilutedValuation = (dilutedValuation / 1000000000).toFixed(1) + ' B';
      } else if (dilutedValuation >= 1000000) {
        formattedDilutedValuation = (dilutedValuation / 1000000).toFixed(1) + ' M';
      } else if (dilutedValuation >= 1000) {
        formattedDilutedValuation = (dilutedValuation / 1000).toFixed(1) + ' K';
      } else {
        formattedDilutedValuation = dilutedValuation;
      }

      // access the value of circulating_supply from api
      const circulatingSupply = data[0].circulating_supply;

      // check the value of circulatingSupply and format it accordingly
      let formattedCirculatingSupply = '';
      if (circulatingSupply === null) {
        formattedCirculatingSupply = 'N/A';
      } else if (circulatingSupply >= 1000000000) {
        formattedCirculatingSupply = (circulatingSupply / 1000000000).toFixed(1) + ' B';
      } else if (circulatingSupply >= 1000000) {
        formattedCirculatingSupply = (circulatingSupply / 1000000).toFixed(1) + ' M';
      } else if (circulatingSupply >= 1000) {
        formattedCirculatingSupply = (circulatingSupply / 1000).toFixed(1) + ' K';
      } else {
        formattedCirculatingSupply = circulatingSupply;
      }

      // access the value of total_supply from api
      const totalSupply = data[0].total_supply;

      // check the value of totalSupply and format it accordingly
      let formattedTotalSupply = '';
      if (totalSupply === null) {
        formattedTotalSupply = 'N/A';
      } else if (totalSupply >= 1000000000) {
        formattedTotalSupply = (totalSupply / 1000000000).toFixed(1) + ' B';
      } else if (totalSupply >= 1000000) {
        formattedTotalSupply = (totalSupply / 1000000).toFixed(1) + ' M';
      } else if (totalSupply >= 1000) {
        formattedTotalSupply = (totalSupply / 1000).toFixed(1) + ' K';
      } else {
        formattedTotalSupply = totalSupply;
      }

      // access the value of max_supply from api
      const maxSupply = data[0].max_supply;

      // check the value of maxSupply and format it accordingly
      let formattedMaxSupply = '';
      if (maxSupply === null) {
        formattedMaxSupply = 'N/A';
      } else if (maxSupply >= 1000000000) {
        formattedMaxSupply = (maxSupply / 1000000000).toFixed(1) + ' B';
      } else if (maxSupply >= 1000000) {
        formattedMaxSupply = (maxSupply / 1000000).toFixed(1) + ' M';
      } else if (maxSupply >= 1000) {
        formattedMaxSupply = (maxSupply / 1000).toFixed(1) + ' K';
      } else {
        formattedMaxSupply = maxSupply;
      }
      // update the price element in Webflow with the formattedPrice value
      document.getElementById('price').textContent = formattedPrice;
      // update the market-cap element in Webflow with the formattedMarketCap value
      document.getElementById('market-cap').textContent = formattedMarketCap;
      // update the trading-vol element in Webflow with the formattedTradingVol value
      document.getElementById('trading-vol').textContent = formattedTradingVol;
      // update the diluted-valuation element in Webflow with the formattedDilutedValuation value
      document.getElementById('diluted-valuation').textContent = formattedDilutedValuation;
      // update the circulating-supply element in Webflow with the formattedCiculatingSupply value
      document.getElementById('circulating-supply').textContent = formattedCirculatingSupply;
      // update the total-supply element in Webflow with the formattedTotalSupply value
      document.getElementById('total-supply').textContent = formattedTotalSupply;
      // update the max-supply element in Webflow with the formattedMaxSupply value
      document.getElementById('max-supply').textContent = formattedMaxSupply;
    } catch (error) {
      console.log(error);
    }
  }

  //calling the function getData() so that it runs.
  getData(),
    // calling getData() at regular intervals to update the market cap periodically
    setInterval(getData, 60000); // 60000 ms = 1 minute
});
