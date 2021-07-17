import React, { useContext } from "react";
import { useIntl } from "react-intl";
import PropTypes from "prop-types";
import { MenuItem, Select, InputLabel } from "@material-ui/core";
import { LocaleContext, locales } from "../../utils/languageContext";
import messages from "./messages";
import { CustomFormControl, BootstrapInput } from "./style";

const Language = ({ showLabel, alignRight = false }) => {
  const intl = useIntl();
  const { language, setLanguage } = useContext(LocaleContext);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <CustomFormControl variant="standard" alignRight={alignRight}>
      {showLabel && (
        <InputLabel id="language-label" FormLabelClasses={{}}>
          {intl.formatMessage(messages.languageLabel)}
        </InputLabel>
      )}

      <Select
        labelId="language-label"
        id="language"
        value={language}
        onChange={handleChange}
        data-testid="language-selection"
        input={<BootstrapInput />}
      >
        {locales.map((locale) => {
          return (
            <MenuItem value={locale.code} key={locale.code}>
              {locale.label}
            </MenuItem>
          );
        })}
      </Select>
    </CustomFormControl>
  );
};

Language.propTypes = {
  showLabel: PropTypes.bool,
};
Language.defaultProps = {
  showLabel: false,
};
export default Language;
