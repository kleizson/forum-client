import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import isIncludeInAuthorizedRoles from "../helpers/isIncludeInAuthorizedRoles";

const uiConfig: firebaseui.auth.Config = {
  signInFlow: "popup",
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: function (authResult: any): boolean {
      authResult.user.getIdTokenResult().then((tokenResult: any) => {
        if (isIncludeInAuthorizedRoles(tokenResult.claims.role)) {
          window.location.assign("/manage-categories");
        } else {
          window.location.assign("/");
        }
      });

      return false;
    },
  },
};

export default uiConfig;
