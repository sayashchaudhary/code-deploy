import app from "./app";

const Port = process.env.PORT || 4000;

app.listen(Port, () => {
  console.log(`App is running on ${Port}`);
});
