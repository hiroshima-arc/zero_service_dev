import Amplify, { Analytics, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);
Analytics.configure(awsconfig);

const recordEvent = (name, params, callback) => {
  console.log(name);
  console.log(params);

  Analytics.record({
    name: name,
    attributes: params
  }).then(async evt => {
    console.log("done");
    await callback();
  });
};

export const signUpButtonClickEvent1 = () => {
  recordEvent("Sign Up", { position: "1" }, () => {
    location.href = "./signup.html";
  });
};

export const signUpButtonClickEvent2 = () => {
  recordEvent("Sign Up", { position: "2" }, () => {
    location.href = "./signup.html";
  });
};

export const signInButtonClickEvent = () => {
  recordEvent("Sign In", {}, () => {
    location.href = "./signin.html";
  });
};

export const signOutButtonClickEvent = async () => {
  Auth.signOut()
    .then(data => {
      let name = "Sign Out";
      let params = {};
      Analytics.record({
        name: name,
        attributes: params
      }).then(async evt => {
        console.log("done");
        alert("サインアウトしました");
        location.href = "./";
      });
    })
    .catch(err => {
      console.log(err);
      alert("サインアウトに失敗しました");
    });
};
