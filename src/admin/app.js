const config = {
  locales: ["pt-BR", "en"],
  tutorials: false,
  notifications: {
    releases: false,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Dashboard",
      "Auth.form.welcome.subtitle": "Login to your account",
      "Auth.form.welcome.title": "Welcome",
    },
    "pt-BR": {
      "app.components.LeftMenu.navbrand.title": "Painel",
      "Auth.form.welcome.subtitle": "Entrar na sua conta",
      "Auth.form.welcome.title": "Bem-vindo(a)!",
    },
  },
};

const bootstrap = () => {};

export default {
  config,
  bootstrap,
};
