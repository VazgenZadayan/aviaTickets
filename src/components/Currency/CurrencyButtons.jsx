import React from 'react';

import { currencies } from '../../contexts/defaultCurrencies';
import { useCurrencies } from '../../contexts/currencies.context';

import { styles } from './styles';

const CurrencyButtons = () => {
  const { curr, changeCurrency } = useCurrencies();
  
  return (
    <div style={styles()?.block}>
      {Object.values(currencies).map((item, index) => (
        <button
          key={index}
          style={styles(curr, item).currency_button}
          onClick={() => changeCurrency(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CurrencyButtons;
