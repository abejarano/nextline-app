export const actionGenerator = (type) => {
  return (payload) => ({
    type,
    payload,
  });
};

export const RESET_STORE = 'RESET_STORE';
export const resetStore = actionGenerator(RESET_STORE);
