import { createContext, useCallback, useContext, useState } from 'react';
import { currencies } from './defaultCurrencies';

const CurrenciesContext = createContext(currencies.rub);

function CurrenciesProvider({ children }) {
  const [currentCurrency, setCurrency] = useState(currencies.rub);

  const handleChangeCurrency = useCallback(
    curr => setCurrency(curr),
    [setCurrency]
  );

  return (
    <CurrenciesContext.Provider
      value={{
        changeCurrency: handleChangeCurrency,
        curr: currentCurrency,
      }}
    >
      {children}
    </CurrenciesContext.Provider>
  );
}

export const useCurrencies = () => {
  const context = useContext(CurrenciesContext);
  return context;
};

export default CurrenciesProvider;
