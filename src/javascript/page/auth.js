const {
  signUpEvent,
  verifyEvent,
  signInEvent,
  signOutEvent,
  currentUser,
  forgetEvent,
  resetPasswordEvent
} = require("../auth");


export const authPage = () => {
  const SignUpButton = document.getElementById("sign-up");
  if (SignUpButton) SignUpButton.addEventListener("click", signUpEvent);

  const VerifyButton = document.getElementById("verify");
  if (VerifyButton) VerifyButton.addEventListener("click", verifyEvent);

  const SignInButton = document.getElementById("sign-in");
  if (SignInButton) SignInButton.addEventListener("click", signInEvent);

  const SignOutButton = document.getElementById("sign-out");
  if (SignOutButton) SignOutButton.addEventListener("click", signOutEvent);

  const ForgetButton = document.getElementById("forget");
  if (ForgetButton) ForgetButton.addEventListener("click", forgetEvent);

  const ResetButton = document.getElementById("reset");
  if (ResetButton) ResetButton.addEventListener("click", resetPasswordEvent);

  const signinUser = document.getElementById("signin-user");
  if (signinUser) currentUser();
};

