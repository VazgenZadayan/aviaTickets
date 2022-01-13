export const styles = (curr, item) => {
  const block = {
    display: 'flex',
    height: '40px',
    borderRadius: '5px',
    justifyContent: 'space-between',
    margin: '15px 0',
  };
  const currency_button = {
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    background: curr === item ? 'rgb(33,150,243)' : 'white',
    border: curr === item ? '1px solid rgb(33,150,243)' : 'none',
    borderRadius: '5px',
    color: curr === item ? 'white' : 'rgb(33,150,243)',
  };
  return { block, currency_button };
};
