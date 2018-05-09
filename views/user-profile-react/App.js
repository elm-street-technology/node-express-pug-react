import React from "react";
import ThemeProvider from "elevate-ui/ThemeProvider";

import UserProfileForm from "./UserProfileForm";

const App = (props) => (
  <ThemeProvider>
    <UserProfileForm {...props} />
  </ThemeProvider>
);

export default App;
