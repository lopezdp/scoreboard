import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Page404 from "./components/Page404";

import AppliedRoute from "./components/AppliedRoute";
//import TermsAndConditions from "./components/TermsAndConditions";
//import PrivacyPolicy from "./components/PrivacyPolicy";
//import Support from "./components/Support";
//import AuthenticatedRoute from "./components/AuthenticatedRoute";
//import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ childProps }) => (
  <Switch>
    {/* This is our home page route for the main landing page to the app */}
    <AppliedRoute path="/" exact component={Home} props={childProps} />

    {/* This is the terms-conditions Route 
                                   <AppliedRoute path="/terms-conditions"
                                     exact
                                     component={ TermsAndConditions }
                                     props={ childProps } />

                                   { /* This is the privacy-policy Route 
                                   <AppliedRoute path="/privacy-policy"
                                     exact
                                     component={ PrivacyPolicy }
                                     props={ childProps } />

                                   { /* This is the support Route 
                                   <AppliedRoute path="/support"
                                     exact
                                     component={ Support }
                                     props={ childProps } />

                                   { /* This route will catch all unmatched routes && MUST BE LAST!!! */}
    <Route component={Page404} />
  </Switch>
);
