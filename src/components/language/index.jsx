import React, { useContext } from "react";
import { useIntl } from "react-intl";
import {
  MenuItem,
  Select,
  InputBase,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

import { LocaleContext, locales } from "../../utils/languageContext";
import messages from "./messages";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(5),
    width: 260,
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:focus": {},
  },
}));

const Language = () => {
  const intl = useIntl();
  const { language, setLanguage } = useContext(LocaleContext);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <FormControl variant="standard">
        <InputLabel id="language-label">
          {intl.formatMessage(messages.languageLabel)}
        </InputLabel>
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
      </FormControl>
    </>
  );
};

export default Language;
