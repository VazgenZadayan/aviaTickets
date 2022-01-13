import tickets from './db/tickets.json';
import MainPage from './pages/Main/MainPage';
import CurrenciesProvider from './contexts/currencies.context';
import TransfersProvider from './contexts/transferFilter.context';

function App() {
  return (
    <TransfersProvider>
      <CurrenciesProvider>
        <MainPage tickets={tickets} />
      </CurrenciesProvider>
    </TransfersProvider>
  );
}

export default App;
