import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useHistory, useParams } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";

import { getUser } from "../../api/users";
import Logo from "../../components/logo";
import Loading from "../../components/loading";
import { Image, ContainerWrapper, ButtonWrapper } from "../../style/common";
import Language from "../../components/language";
import messages from "./messages";

const Step3 = () => {
  const history = useHistory();
  const intl = useIntl();
  let { id } = useParams();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const user = await getUser(id);
        setUser(user);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  return (
    <ContainerWrapper>
      {isLoading ? (
        <Loading message={intl.formatMessage(messages.loading)} />
      ) : (
        <>
          <Language alignRight={true} />
          <Logo />

          <Typography variant="h4" sx={{ marginBottom: 6 }}>
            {intl.formatMessage(messages.stepTitle, {
              name: user?.first_name,
            })}
          </Typography>
          <div data-testid="user">
            <Image src={user?.avatar} alt={user?.first_name} />
          </div>
          <ButtonWrapper>
            <Button
              variant="outlined"
              data-testid="back"
              size="large"
              onClick={() => history.push("/step2")}
            >
              {intl.formatMessage(messages.back)}
            </Button>
          </ButtonWrapper>
        </>
      )}
    </ContainerWrapper>
  );
};

export default Step3;
