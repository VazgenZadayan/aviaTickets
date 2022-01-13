import React from 'react';

import Ticket from '../../components/Ticket/Ticket';
import CurrencyButtons from '../../components/Currency/CurrencyButtons';
import TransfersFilter from '../../components/TransfersFilter/TransfersFilter';

import { useTransfers } from '../../contexts/transferFilter.context';

import { styles } from './styles';

const MainPage = ({ tickets }) => {
  const { transfer } = useTransfers();
  const sortedArray = tickets.tickets.sort((a, b) => a.price - b.price);

  const allTransfers = Object.values(transfer).every(el => el) || Object.values(transfer).every(el => !el);

  if (!tickets) return null;

  return (
    <div style={styles.main}>
      <div style={styles.filter_block}>
        <strong>Валюта</strong>
        <CurrencyButtons />
        <strong>Количество пересадок</strong>
        <TransfersFilter tickets={tickets} allTransfers={allTransfers} />
      </div>
      <div style={styles.ticket_list}>
        {sortedArray.map(
          (ticket, index) =>
            (allTransfers || !transfer[ticket.stops]) && (
              <Ticket ticket={ticket} key={index} />
            )
        )}
      </div>
    </div>
  );
};

export default MainPage;
