import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const ContainerWrapper = styled("div")(({ theme }) => ({
  marginTop: 60,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const Image = styled("img")(({ theme }) => ({
  border: "1px solid #797979",
  height: 200,
}));

export const ButtonWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  padding: 50,
  justifyContent: "center",
  position: "fixed",
  bottom: 240,
  background: "#fff",
}));

export const InfoMessage = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  margin: theme.spacing(15),
  fontSize: 20,
}));
