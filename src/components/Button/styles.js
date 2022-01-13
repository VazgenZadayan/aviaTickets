export const styles = hover => {
  const button = {
    width: '180px',
    height: '90px',
    background: hover ? 'rgb(237 104 5)' : 'rgb(255,109,0)',
    padding: '20px',
    border: '0',
    borderRadius: '10px',
    cursor: 'pointer',
    color: 'white',
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: '23px',
    transition: '0.5s',
    '&:firstChild': {
      color: 'red',
    },
  };

  return { button };
};
