import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

const NOT_AUTH = "not authenticated";

export const signUpEvent = () => {
  const email = document.querySelector("#inputEmail").value;
  const password = document.querySelector("#inputPassword").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;

  if (email === "") return alert("メールアドレスが未入力です");
  if (password === "") return alert("パスワードが未入力です");
  if (password.length < 8) return alert("パスワードは8文字以上です");
  if (confirmPassword === "") return alert("確認パスワードが未入力です");
  if (password !== confirmPassword) return alert("パスワードが一致しません");

  Auth.signUp(email, password)
    .then(data => {
      alert("登録メールアドレスに検証コードを送信しました");
      location.href = "/verify.html";
    })
    .catch(err => {
      console.log(err);
      alert("エラーが発生しました");
    });
};

export const verifyEvent = () => {
  const email = document.querySelector("#inputVerifyEmail").value;
  const code = document.querySelector("#inputVerifyCode").value;

  if (email === "") return alert("メールアドレスが未入力です");
  if (code === "") return alert("コードが未入力です");

  Auth.confirmSignUp(email, code)
    .then(data => {
      alert("ユーザ登録が完了しました。");
      location.href = "./signin.html";
    })
    .catch(err => {
      console.log(err);
      alert("検証に失敗しました");
    });
};

export const signInEvent = () => {
  const email = document.querySelector("#inputEmail").value;
  const password = document.querySelector("#inputPassword").value;

  if (email === "") return alert("メールアドレスが未入力です");
  if (password === "") return alert("パスワードが未入力です");

  Auth.signIn(email, password)
    .then(data => {
      alert("サインインに成功しました");
      location.href = "./service.html";
    })
    .catch(err => {
      console.log(err);
      alert("サインインに失敗しました");
    });
};

export const signOutEvent = () => {
  Auth.signOut()
    .then(data => {
      alert("サインアウトしました");
      location.href = "./";
    })
    .catch(err => {
      console.log(err);
      alert("サインアウトに失敗しました");
    });
};

export const forgetEvent = () => {
  const email = document.querySelector("#inputEmail").value;

  if (email === "") return alert("メールアドレスが未入力です");

  Auth.forgotPassword(email)
    .then(data => {
      alert("送信に成功しました");
    })
    .catch(err => {
      console.log(err);
      alert("送信に失敗しました");
    });
};

export const resetPasswordEvent = () => {
  const email = document.querySelector("#inputEmail").value;
  const code = document.querySelector("#inputCode").value;
  const password = document.querySelector("#inputPassword").value;

  if (email === "") return alert("メールアドレスが未入力です");
  if (code === "") return alert("コードが未入力です");
  if (password === "") return alert("パスワードが未入力です");

  Auth.forgotPasswordSubmit(email, code, password)
    .then(data => {
      alert("パスワードリセットに成功しました");
      location.href = "./signin.html";
    })
    .catch(err => {
      console.log(err);
      alert("パスワードリセットに失敗しました");
    });
};

export const currentUser = () => {
  const filter = data => {
    console.log(data);
    return data === NOT_AUTH ? data : data.attributes.email;
  };

  Auth.currentAuthenticatedUser({
    bypassCache: false
  })
    .then(user => renderCurrentUser(filter(user)))
    .catch(err => renderCurrentUser(filter(err)));
};

const renderCurrentUser = data => {
  if (data === NOT_AUTH) return (location.href = "./");
  document.querySelector("#signin-user").value = data;
};
