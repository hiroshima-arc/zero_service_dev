import {
  signUpEvent,
  verifyEvent,
  signInEvent,
  signOutEvent,
  currentUser,
  forgetEvent,
  resetPasswordEvent
} from "./javascript/auth";

import { signUpButtonClickEvent1, signUpButtonClickEvent2, signInButtonClickEvent, signOutButtonClickEvent } from "./javascript/analytics";

import "./javascript/api";

import "./javascript/graphql";
import "./javascript/appsync";

const SignUpButton = document.getElementById("sign-up");
if (SignUpButton) SignUpButton.addEventListener("click", signUpEvent);

const VerifyButton = document.getElementById("verify");
if (VerifyButton) VerifyButton.addEventListener("click", verifyEvent);

const SignInButton = document.getElementById("sign-in");
if (SignInButton) SignInButton.addEventListener("click", signInEvent);

const SignOutButton = document.getElementById("sign-out");
if (SignOutButton) SignOutButton.addEventListener("click", signOutButtonClickEvent);

const ForgetButton = document.getElementById("forget");
if (ForgetButton) ForgetButton.addEventListener("click", forgetEvent);

const ResetButton = document.getElementById("reset");
if (ResetButton) ResetButton.addEventListener("click", resetPasswordEvent);

const signinUser = document.getElementById("signin-user");
if (signinUser) currentUser();

const landingSignUp1 = document.getElementById("landing-sign-up-1");
if(landingSignUp1) landingSignUp1.addEventListener("click", signUpButtonClickEvent1);

const landingSignUp2 = document.getElementById("landing-sign-up-2");
if (landingSignUp2) landingSignUp2.addEventListener("click", signUpButtonClickEvent2);

const landingSignIn = document.getElementById("landing-sign-in");
if(landingSignIn) landingSignIn.addEventListener("click", signInButtonClickEvent);


