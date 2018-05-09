const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

export function routes(app) {
  // GET
  app.get("/user-profile-react", function(req, res) {
    res.render("user-profile-react", {
      title: "User Profile | React Example",
      props: {
        user: {
          firstName: "Christopher",
        },
      },
    });
  });

  // POST
  app.post("/api/user-profile-react", jsonParser, function(req, res) {
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

    res.json({
      error,
      success,
      user: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    });
  });
}
