import React, { PureComponent } from "react";
import { RegisterView } from "./ui/RegisterView";

export class RegisterConnector extends PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return (
      <div>
        <RegisterView submit={this.dummySubmit} />
      </div>
    );
  }
}
