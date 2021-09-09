import app from "./app";

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`App is running on ${Port}`);
});
