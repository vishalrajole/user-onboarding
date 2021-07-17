import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import { IconButton, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Logo from "../../components/logo";
import {
  GallaryWrapper,
  ImageTile,
  HorizontalWrapper,
  IconWrapper,
} from "./styles";
import messages from "./messages";
import Loading from "../../components/loading";
import { getUsers } from "../../utils/api";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const Step2 = () => {
  const refContainer = useRef({});
  const history = useHistory();
  const intl = useIntl();
  const [users, setUsers] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const users = await getUsers();
        setUsers(users);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const onUserSelected = (user) => {
    setSelectedUser(user.id);
  };

  const onNext = () => {
    history.push(`step3/${selectedUser}`);
  };

  const slideLeft = () => {
    const ref = refContainer.current;
    const tileWidth = ref.children[0].offsetWidth;
    ref.scroll({
      left: ref.scrollLeft - tileWidth - 30,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    const ref = refContainer.current;
    const tileWidth = ref.children[0].offsetWidth + 30;
    ref.scroll({
      left: ref.scrollLeft + tileWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      {users?.length === 0 && !isLoading && (
        <div data-testid="noUserFound">
          {intl.formatMessage(messages.noUsersFound)}
        </div>
      )}
      {isLoading ? (
        <Loading message={intl.formatMessage(messages.loading)} />
      ) : (
        <>
          <Logo />
          <Typography variant="h6" data-testid="step2">
            {intl.formatMessage(messages.stepTitle)}
          </Typography>
          <Typography variant="h6">
            {intl.formatMessage(messages.stepInfo)}
          </Typography>
          <HorizontalWrapper>
            <IconButton aria-label="prev" onClick={slideLeft}>
              <ArrowBackIos />
            </IconButton>
            <GallaryWrapper ref={refContainer}>
              {users?.map((user) => {
                return (
                  <ImageTile
                    onClick={() => onUserSelected(user)}
                    key={user.id}
                    data-testid={`user-${user.id}`}
                  >
                    <img
                      src={user.avatar}
                      height={200}
                      alt={user.first_name}
                      data-testid="avatar"
                    />
                    <span>{user.first_name}</span>
                  </ImageTile>
                );
              })}
            </GallaryWrapper>
            <IconButton aria-label="prev" onClick={slideRight}>
              <ArrowForwardIos />
            </IconButton>
          </HorizontalWrapper>
          <IconWrapper>
            <Button
              variant="contained"
              onClick={onNext}
              disabled={!selectedUser}
              data-testid="next"
            >
              {intl.formatMessage(messages.next)}
            </Button>
            <Button
              variant="outlined"
              onClick={() => history.push("/step1")}
              data-testid="back"
            >
              {intl.formatMessage(messages.back)}
            </Button>
          </IconWrapper>
        </>
      )}
    </>
  );
};

Step2.propTypes = {};

export default Step2;
