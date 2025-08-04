module.exports = {
  adminAuth: {
    type: "credentials",
    users: [
      {
        username: process.env.NODE_RED_USERNAME || "admin",
        password: process.env.NODE_RED_PASSWORD_HASH || "",
        permissions: "*",
      },
    ],
  },
  uiPort: process.env.PORT || 1880,
  editorTheme: {
    projects: { enabled: false },
  },
  logging: {
    console: { level: "info", metrics: false, audit: false },
  },
  functionGlobalContext: {},
};
