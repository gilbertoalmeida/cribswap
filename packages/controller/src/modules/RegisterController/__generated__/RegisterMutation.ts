/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// generated with this. Be sure to have the server runing
// apollo client:codegen --endpoint=http://localhost:4000 --target=typescript

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_register {
  __typename: "Error";
  path: string;
  message: string;
}

export interface RegisterMutation {
  register: RegisterMutation_register[] | null;
}

export interface RegisterMutationVariables {
  email: string;
  password: string;
}
