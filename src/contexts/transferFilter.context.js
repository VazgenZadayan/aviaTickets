import { createContext, useCallback, useContext, useState } from 'react';
import tickets from '../db/tickets.json'
import { renderTransferList } from '../utils/helpers';

const transfers = renderTransferList(tickets.tickets);

const TransfersContext = createContext(transfers);

function TransfersProvider({ children }) {

  const defaultTransfers = Object.assign({...transfers}, [true, true, true, true]);

  const [currentTransfer, setTransfer] = useState(defaultTransfers);
  const handleChangeTransfers = useCallback(transfer => setTransfer(transfer), [setTransfer]);

  return (
    <TransfersContext.Provider
      value={{
        changeTransfer: handleChangeTransfers,
        transfer: currentTransfer
      }}
    >
      {children}
    </TransfersContext.Provider>
  );
}

export const useTransfers = () => {
  const context = useContext(TransfersContext);
  return context;
};

export default TransfersProvider;
