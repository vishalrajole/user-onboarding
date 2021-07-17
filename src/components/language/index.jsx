import React, { useContext } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { useIntl } from "react-intl";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { LocaleContext, locales } from "../../utils/languageContext";
import messages from "./messages";

const Language = () => {
  const intl = useIntl();
  const { language, setLanguage } = useContext(LocaleContext);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="language-label">
        {intl.formatMessage(messages.languageLabel)}
      </InputLabel>
      <Select
        labelId="language-label"
        id="language"
        value={language}
        label="Language"
        onChange={handleChange}
        data-testid="language-selection"
      >
        {locales.map((locale) => {
          return (
            <MenuItem value={locale.code} key={locale.code}>
              {locale.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Language;
