import React from 'react';

import { renderTransferList, stopsCount } from '../../utils/helpers';

import { useTransfers } from '../../contexts/transferFilter.context';

import { styles } from './styles';

const TransfersFilter = ({ tickets, allTransfers }) => {
  const transferArray = renderTransferList(tickets.tickets);
  const { transfer, changeTransfer } = useTransfers();

  const handleClickToAll = () => {
    changeTransfer(prevState => {
      let newObj = Object.values(prevState).map(el => (el = true));
      return {
        ...newObj,
      };
    });
  };

  const handleChangeFilter = item => {
    changeTransfer(prevState => {
      return { ...prevState, [item]: !prevState[item] };
    });
  };

  return (
    <div style={styles.filter_block}>
      <div style={styles.item}>
        <input
          onChange={() => handleClickToAll}
          style={styles.checkbox}
          type='checkbox'
          checked={allTransfers}
        />
        <span onClick={handleClickToAll}>Все</span>
      </div>
      {transferArray.map(item => (
        <div key={item} style={styles.item}>
          <input
            style={styles.checkbox}
            type='checkbox'
            onChange={() => handleChangeFilter(item)}
            checked={!transfer[item]}
          />
          <span onClick={() => handleChangeFilter(item)}>
            {item > 0 ? `${item} ` : null}
            {stopsCount(item)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TransfersFilter;
