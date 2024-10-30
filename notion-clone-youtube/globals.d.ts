import { User } from "./types/types";

export {};

// extending the CustomJwtSessionClaims interface to include the User type
// why: to have the User type available in the sessionClaims object
declare global {
  interface CustomJwtSessionClaims extends User {}
}
