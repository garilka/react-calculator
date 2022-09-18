import app from './src';

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Back-end server started on port ${PORT}`);
});
