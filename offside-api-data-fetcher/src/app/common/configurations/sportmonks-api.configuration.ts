export default () => {
  if (!process.env.SPORTMONKS_API_TOKEN) {
    throw new Error('SPORTMONKS_API_TOKEN is not defined');
  }
  return {
    apiConfig: { token: process.env.SPORTMONKS_API_TOKEN },
  };
};
