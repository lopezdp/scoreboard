/* This component creates a Route where the child component that it renders contains
 * the passed in props from this parent component. This works as follows:
 *
 * 1. The Route component takes a prop called component that represents the component
 *    that will be rendered when a matching route is found. childProps are sent to
 *    this component.
 *
 * 2. The Route component can also take a render method in place of the component. This
 *	  will let us control what is passed into the component.
 *
 * 3. Based on this we can create a component that returns a Route and takes a component
 * 	  and childProps property. This will let us pass in the component that we want
 *    rendered and the props that we want applied.
 *
 * 4. Finally, we take component (set as C) and props (set as cProps) and render inside
 *    our Route using the inline function:
 *			`props => <C {...props} {...cProps} />`
 *	  Remember that the props variable in the case above is what the Route component will
 *    be passing to us. Whereas, the
  is the childProps that we want to set.
 */

import React from "react";
import { Route } from "react-router-dom";

export default ({ component: C, props: cProps, ...rest }) => (
	<Route {...rest} render={props => <C {...props} {...cProps} />} />
);
