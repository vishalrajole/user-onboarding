import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import { IntlProvider } from "react-intl";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { LocaleContext, Locale, getShortLocale } from "./languageContext";
import getMessages from "./getMessages";

import theme from "../style/theme";
export const history = createMemoryHistory();

const AllTheProviders = ({ children }) => {
  const fetchTranslations = async () => {
    return await getMessages(Locale.language);
  };
  const messages = fetchTranslations();

  return (
    <IntlProvider
      messages={messages}
      locale={getShortLocale(Locale.language)}
      defaultLocale={getShortLocale(Locale.language)}
    >
      <ThemeProvider theme={theme}>
        <Router history={history}>{children}</Router>
      </ThemeProvider>
    </IntlProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
