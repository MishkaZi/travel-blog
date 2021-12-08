// eslint-disable-next-line import/no-anonymous-default-export
export default (currentId = '', action) => {
  switch (action.type) {
    case 'CURRENT_ID':
      return action.payload;
    default:
      return currentId;
  }
};
