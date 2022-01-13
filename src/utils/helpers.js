export const stopsCount = stops => {
  let word;
  if (stops === 1) {
    word = 'Пересадка';
  } else if (stops > 1 && stops < 5) {
    word = 'Пересадки';
  } else if (stops >= 5) {
    word = 'Пересадок';
  } else {
    word = 'Без пересадок';
  }
  return word;
};

export const renderTransferList = arr => {
  const count = [];
  for (let i = 0; i < arr.length; i++) {
    count.push(arr[i].stops);
  }
  return [...new Set(count)].sort((a, b) => a - b);
};
