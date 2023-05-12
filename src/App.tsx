// eslint-disable-next-line
import Symbol_observable from "symbol-observable";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

import enFR from "antd/lib/locale/fr_FR";
// i18n translted document
import { locales } from "./i18n/locales";
import arabic from "./i18n/languages/ar.json";
import english from "./i18n/languages/en.json";
import french from "./i18n/languages/fr.json";
import AppRouter from "./routes/AppRouter";

function App() {
  const messages = {
    en: english,
    fr: french,
    ar: arabic,
  };

  return (
    <Provider store={store}>
      <IntlProvider
        messages={messages["fr"]}
        locale={"fr"}
        defaultLocale={locales.arabic}
      >
        <AppRouter />
      </IntlProvider>
    </Provider>
  );
}

export default App;
