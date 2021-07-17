import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import Button from "@material-ui/core/Button";
import { useHistory, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";

import { getUser } from "../../api/users";
import Logo from "../../components/logo";
import Loading from "../../components/loading";
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
    <>
      {isLoading ? (
        <Loading message={intl.formatMessage(messages.loading)} />
      ) : (
        <div>
          <Logo />
          <Language />
          <Typography variant="h3">
            {intl.formatMessage(messages.stepTitle, {
              name: user?.first_name,
            })}
          </Typography>
          <div data-testid="user">
            <img
              src={user?.avatar}
              width={200}
              height={200}
              alt={user?.first_name}
            />
          </div>
          <Button
            variant="outlined"
            data-testid="back"
            size="large"
            onClick={() => history.push("/step2")}
          >
            {intl.formatMessage(messages.back)}
          </Button>
        </div>
      )}
    </>
  );
};

export default Step3;
