export const actionGenerator = (type) => {
  return (payload) => ({
    type,
    payload,
  });
};
