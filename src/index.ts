window.Webflow = window.Webflow || [];
window.Webflow.push(() => {
  const api_url =
    'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true';

  async function getData() {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      // access the ethereum object from api
      const ethereum = data.ethereum;

      // access the value of usd from api
      const usd = ethereum.usd;

      // check the value of usd and format it accordingly
      let formattedUsd = '';
      if (usd >= 1000000000) {
        formattedUsd = (usd / 1000000000).toFixed(1) + ' B';
      } else if (usd >= 1000000) {
        formattedUsd = (usd / 1000000).toFixed(1) + ' M';
      } else if (usd >= 1000) {
        formattedUsd = (usd / 1000).toFixed(1) + ' K';
      } else {
        formattedUsd = usd;
      }

      // access the value of usd_market_cap from api
      const usdMarketCap = ethereum.usd_market_cap;

      // check the value of usdMarketCap and format it accordingly
      let formattedUsdMarketCap = '';
      if (usdMarketCap >= 1000000000) {
        formattedUsdMarketCap = (usdMarketCap / 1000000000).toFixed(1) + ' B';
      } else if (usdMarketCap >= 1000000) {
        formattedUsdMarketCap = (usdMarketCap / 1000000).toFixed(1) + ' M';
      } else if (usdMarketCap >= 1000) {
        formattedUsdMarketCap = (usdMarketCap / 1000).toFixed(1) + ' K';
      } else {
        formattedUsdMarketCap = usdMarketCap;
      }

      // access the value of usd_24h_vol from api
      const usdTradingVol = ethereum.usd_24h_vol; //usdTradingVol is the 24hour trading volume

      // check the value of usdTradingVol and format it accordingly
      let formattedUsdTradingVol = '';
      if (usdTradingVol >= 1000000000) {
        formattedUsdTradingVol = (usdTradingVol / 1000000000).toFixed(1) + ' B';
      } else if (usdTradingVol >= 1000000) {
        formattedUsdTradingVol = (usdTradingVol / 1000000).toFixed(1) + ' M';
      } else if (usdTradingVol >= 1000) {
        formattedUsdTradingVol = (usdTradingVol / 1000).toFixed(1) + ' K';
      } else {
        formattedUsdTradingVol = usdTradingVol;
      }

      // update the usd element in Webflow with the formatted USD value
      document.getElementById('usd').textContent = formattedUsd;
      // update the market-cap element in Webflow with the formattedUsdMarketCap value
      document.getElementById('market-cap').textContent = formattedUsdMarketCap;
      // update the trading-vol element in Webflow with the formattedUsdTradingVol value
      document.getElementById('trading-vol').textContent = formattedUsdTradingVol;
    } catch (error) {
      console.log(error);
    }
  }

  //calling the function getData() so that it runs.
  getData(),
    // calling getData() at regular intervals to update the market cap periodically
    setInterval(getData, 60000); // 60000 ms = 1 minute
});

/*if (usdMarketCap >= 1000000000) {
  return (usdMarketCap / 1000000000).toFixed(1) + ' B';
}
if (usdMarketCap >= 1000000) {
  return (usdMarketCap / 1000000).toFixed(1) + ' M';
}
if (usdMarketCap >= 1000) {
  return (usdMarketCap / 1000).toFixed(1) + ' K';
}
return usdMarketCap;
*/
