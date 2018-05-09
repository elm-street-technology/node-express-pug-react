export function routes(app) {
  // GET
  app.get("/", function(req, res) {
    res.render("index", {
      title: "Node! Express! Pug! React! Yup!",
    });
  });
}
