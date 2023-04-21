/*
    I would suggest you base your host url variable on process.env.NODE_ENV
    read more about process.env if you haven't heard about it.

    Based on it, in production mode we can assign the render url and on
    development mode we can assign the local url.
*/

const env = process.env.NODE_ENV;
const host =
  env === "production"
    ? "https://beetreeapi.onrender.com"
    : "http://localhost:3003";

const loginRoute = `${host}/api/auth/login`;
const registerRoute = `${host}/api/auth/register`;
const BeehiveRoute = `${host}/api/hives`;

export { host, BeehiveRoute, loginRoute, registerRoute };
