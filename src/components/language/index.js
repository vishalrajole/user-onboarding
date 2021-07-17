import React, { useContext } from "react";
import { useIntl } from "react-intl";
import PropTypes from "prop-types";
import { MenuItem, Typography } from "@material-ui/core";
import { LocaleContext, locales } from "../../utils/languageContext";
import messages from "./messages";
import { FormControl, Input, Select } from "./style";

const Language = ({ showLabel, alignRight }) => {
  const intl = useIntl();
  const { language, setLanguage } = useContext(LocaleContext);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl variant="standard" alignRight={alignRight}>
      {showLabel && (
        <Typography variant="h6" data-testid="step2" sx={{ marginBottom: 6 }}>
          {intl.formatMessage(messages.languageLabel)}
        </Typography>
      )}

      <Select
        labelId="language-label"
        id="language"
        alignRight={alignRight}
        value={language}
        onChange={handleChange}
        data-testid="language-selection"
        input={<Input />}
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

Language.propTypes = {
  showLabel: PropTypes.bool,
  alignRight: PropTypes.bool,
};
Language.defaultProps = {
  showLabel: false,
  alignRight: false,
};
export default Language;
