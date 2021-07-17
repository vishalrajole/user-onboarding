import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { injectIntl } from "react-intl";
import { Typography } from "@material-ui/core";
import Language from "../../components/language";
import Logo from "../../components/logo";
import messages from "./messages";
import { Button } from "./styles";
import { ContainerWrapper } from "../../style/common";

const Step1 = ({ intl }) => {
  const history = useHistory();

  return (
    <ContainerWrapper>
      <Logo />
      <Typography variant="h4" data-testid="step1">
        {intl.formatMessage(messages.stepTitle)}
      </Typography>
      <Language />
      <Button
        variant="contained"
        onClick={() => history.push("/step2")}
        data-testid="next"
      >
        {intl.formatMessage(messages.next)}
      </Button>
    </ContainerWrapper>
  );
};

// for demonstration purpose
Step1.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }),
};

export default injectIntl(Step1);
