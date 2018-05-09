const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

import React from "react";
import { renderToString } from "react-dom/server";
import { JssProvider, SheetsRegistry } from "react-jss";

import App from "views/user-profile-react/App";
import { Layout } from "views/user-profile-react-ssr/Layout";

export function routes(app) {
  // GET
  app.get("/user-profile-react-ssr", function(req, res) {
    const props = {
      user: {
        firstName: "Christopher",
      },
    };
    const sheets = new SheetsRegistry();
    const body = renderToString(
      <JssProvider registry={sheets}>
        <App {...props} />
      </JssProvider>
    );

    return res.send(
      Layout({
        body,
        bodyTags: `
          <script src='/js/user-profile-react-ssr.js'></script>
        `,
        props,
        sheets,
        title: "User Profile | React SSR Example",
      })
    );
  });

  // POST
  app.post("/user-profile-react-ssr", urlencodedParser, function(req, res) {
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

    const props = {
      error,
      success,
      user: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    };
    const sheets = new SheetsRegistry();
    const body = renderToString(
      <JssProvider registry={sheets}>
        <App {...props} />
      </JssProvider>
    );

    return res.send(
      Layout({
        body,
        bodyTags: `
          <script src='/js/user-profile-react-ssr.js'></script>
        `,
        props,
        sheets,
        title: "User Profile | React SSR Example",
      })
    );
  });
}
