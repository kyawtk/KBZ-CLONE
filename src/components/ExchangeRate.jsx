import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'
const ExchangeRate = () => {
  const [rates, setRates] = useState({});
  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/mmk.json"
    )
      .then((response) => response.json())
      .then((data) => setRates(data));
  }, []);
  let cards = [];
  for (let property in rates.mmk) {
    if (1 == 1) {
      let card = (
        <ExchangeRateCard
          currency={property}
          key={property}
          targetCurrencyRate={rates.mmk[property]}
        ></ExchangeRateCard>
      );
      cards.push(card);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-blue-700 font-bold text-center my-4">
        Exchange Rate
      </h1>
      <p className="text-gray-800 font-medium ">{rates.date} </p>
      <div className="flex flex-wrap justify-center items-center ">{cards}</div>
    </div>
  );
};

export default ExchangeRate;

function ExchangeRateCard({ currency, targetCurrencyRate }) {
  const buy = Math.floor(1 / targetCurrencyRate);
  const sell = buy - 5;
  return (
    <motion.div 
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
    className="flex flex-col justify-center items-center m-4 shadow-lg">
      <p className="shadow-md px-10 py-4 uppercase">{currency}</p>
      <p>
        Buy: <span className="text-blue-700 font-bold">{buy}</span>{" "}
      </p>
      <p>
        Sell: <span className="text-blue-700 font-bold">{buy}</span>{" "}
      </p>
    </motion.div>
  );
}
