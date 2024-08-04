async function getStockPrice() {
            const ticker = document.getElementById('ticker').value;
            const apiKey = 'LHLI28OSFXWLTAEP';
            const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=${apiKey}`;
            
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data['Time Series (1min)']) {
                    const latestTime = Object.keys(data['Time Series (1min)'])[0];
                    const stockPrice = data['Time Series (1min)'][latestTime]['1. open'];
                    document.getElementById('result').innerText = `The latest stock price of ${ticker} is: $${stockPrice}`;
                } else {
                    document.getElementById('result').innerText = 'Error fetching stock price. Please try again.';
                }
            } catch (error) {
                console.error('Error fetching stock price:', error);
                document.getElementById('result').innerText = 'Error fetching stock price. Please try again.';
            }
        }