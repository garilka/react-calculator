const get = (req, res) => {
  res.status(200).send('🧮 Hello, this is Calculator app\'s backend 🧮');
};

export default {
  get,
};
