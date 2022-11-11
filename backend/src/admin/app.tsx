// import MenuLogo from "./extensions/logo.png";
// import favicon from "./extensions/favicon.ico";

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: { logo: "/logo.png" /* MenuLogo */ },
    // Replace the favicon
    head: { favicon: "/favicon.ico" },
    // Replace the Strapi logo in the main navigation
    menu: { logo: "/logo.png" /* MenuLogo */ },
    // Override or extend the theme
    locales: ["en"],
    theme: {},
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "OneWorld CMS",
        "app.components.LeftMenu.navbrand.workplace": "Admin panel",
        "Auth.form.welcome.subtitle": "Log in to your OneWorld CMS account",
        "Auth.form.welcome.title": "Welcome to OneWorld CMS!",
      },
    },
    tutorials: false, // Disable video tutorials
    notifications: { release: false }, // Disable notifications about new Strapi releases
  },
  bootstrap(app) {
    console.log(app);
  },
};
