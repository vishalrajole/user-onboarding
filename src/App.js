import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { CssBaseline, Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { StyledEngineProvider } from "@material-ui/core/styles";
import { IntlProvider } from "react-intl";

import { LocaleContext, Locale, getShortLocale } from "./utils/languageContext";
import ErrorBoundary from "./components/error-boundary";
import getMessages from "./utils/getMessages";
import Step1 from "./pages/step1";
import Step2 from "./pages/step2";
import Step3 from "./pages/step3";
import theme from "./style/theme";

function App() {
  const [language, setLanguage] = useState(Locale.language);
  const [messages, setMessages] = useState();

  useEffect(() => {
    const fetchTranslations = async () => {
      const messages = await getMessages(language);
      setMessages(messages);
    };
    fetchTranslations();
  }, [language]);

  return (
    <LocaleContext.Provider value={{ language, setLanguage }}>
      <IntlProvider
        messages={messages}
        locale={getShortLocale(Locale.language)}
        defaultLocale={getShortLocale(Locale.language)}
      >
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <ErrorBoundary>
              <CssBaseline />
              <Container>
                <BrowserRouter>
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={() => <Redirect to="/step1" />}
                    />
                    <Route path="/step1" component={Step1} />
                    <Route path="/step2" component={Step2} />
                    <Route path="/step3/:id" component={Step3} />
                  </Switch>
                </BrowserRouter>
              </Container>
            </ErrorBoundary>
          </ThemeProvider>
        </StyledEngineProvider>
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export default App;
