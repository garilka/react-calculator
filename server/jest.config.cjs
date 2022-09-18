module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};

// Or async function
module.exports = async () => {
  return {
    verbose: true,
  };
};
