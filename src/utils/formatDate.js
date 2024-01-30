// export const formatDate = (date) => {
//   const options = {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//   };
//   return new Intl.DateTimeFormat('ru', options).format(new Date(date));
// };

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  const formattedDate = `${
    day < 10 ? '0' + day : day
  }.${month < 10 ? '0' + month : month}.${year}`;

  return formattedDate;
};
