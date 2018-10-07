const defaultProps = {
  USER_SESSION: "user"
};
module.exports = defaultProps;
switch (process.env.NODE_ENV) {
  case "development":
    module.exports = Object.assign(defaultProps, {
      API_BASE_URL: "https://reqres.in"
    });
    break;
  case "production":
    module.exports = Object.assign(defaultProps, {
      API_BASE_URL: "https://reqres.in"
    });
    break;
}
