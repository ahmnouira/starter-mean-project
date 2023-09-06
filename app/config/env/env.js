module.exports = (app) => {
  app.set("env", process.env.NODE_ENV || "development");
  app.set("port", process.env.PORT || 3000);
  app.set("host", process.env.HOST || "localhost");
};
