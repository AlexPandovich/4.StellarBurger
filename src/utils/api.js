export const loadIngredientsRequest = () => {
  return fetch("http://localhost:2000/ingredients")
    .then((response) => response.json())
    .then((data) => data);
};

export const forgotPasswordRequest = async (email) => {
  return await fetch("http://localhost:2000/password-reset", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(email),
  });
};

export const resetPasswordRequest = async ({ token, password }) => {
  const form = { token, password };
  return await fetch("http://localhost:2000/password-reset/reset", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  });
};

export const registerRequest = async ({ email, password, name }) => {
  const form = { email, password, name };
  return fetch("http://localhost:2000/register", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  });
};
export const loginRequest = async ({ email, password }) => {
  const form = { email, password };
  return await fetch("http://localhost:2000/login", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  });
};

export const logoutRequest = async ({ token }) => {
  const form = { token };
  return await fetch("http://localhost:2000/api/auth/logout", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  });
};

export const refreshTokenRequest = async ({ token }) => {
  const form = { token };
  return await fetch("http://localhost:2000/token", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  });
};

export const getUserRequest = async (token) => {
  console.log(token);
  return await fetch("http://localhost:2000/user", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
};

export const updateUserInfoRequest = async (user) => {
  return await fetch("http://localhost:2000/api/auth/user", {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(user),
  });
};
