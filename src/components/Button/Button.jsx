import React, { useState } from 'react';

import { useCurrencies } from '../../contexts/currencies.context';

import { styles } from './styles';

const Button = ({ price, onClick }) => {
  const [hover, setHover] = useState(false);
  const { curr } = useCurrencies();

  const style = styles(hover);

  return (
    <button
      onClick={onClick}
      style={style.button}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <p>Купить</p>
      <p>
        за {price} {curr}
      </p>
    </button>
  );
};

export default Button;
