const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

export function routes(app) {
  // GET
  app.get("/user-profile-pug", function(req, res) {
    res.render("user-profile-pug", {
      title: "User Profile | Pug Example",
      props: {
        user: {
          firstName: "Christopher",
        },
      },
    });
  });

  // POST
  app.post("/user-profile-pug", urlencodedParser, function(req, res) {
    if (!req.body) return res.sendStatus(400);

    let error = false;
    let success = false;
    // Really quick and terrible validation
    if (
      typeof req.body.firstName !== "string" ||
      req.body.firstName === "" ||
      typeof req.body.lastName !== "string" ||
      req.body.lastName === ""
    ) {
      error = true;
    } else {
      success = true;
    }

    res.render("user-profile-pug", {
      title: "User Profile | Pug Example",
      props: {
        error,
        success,
        user: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        },
      },
    });
  });
}
