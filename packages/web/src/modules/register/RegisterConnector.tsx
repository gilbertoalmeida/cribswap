import React, { PureComponent } from "react";
import { RegisterController } from "@cribswap/controller";

import { RegisterView } from "./ui/RegisterView";

/* So, We have a controller that does the calls to the backend.
The controllers are in a separate package, which is imported to
web and will be imported to the app too. This is for sharing code
This file here is the connector, which is meant to connect the
controller and pass it to a View with a function. */

export class RegisterConnector extends PureComponent {
  render() {
    return (
      <div>
        <RegisterController
        /* the children of the register controller is this function
        which pass submit to the view. In the controller package
        we are passing the submit function inside an object to the
        this.props.children. That's why we can get it here */
        >
          {({ submit }) => <RegisterView submit={submit} />}
        </RegisterController>
      </div>
    );
  }
}
