import { styled } from "@material-ui/core/styles";
import { Button as MuiButton, Container } from "@material-ui/core";

export const Wrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  marginTop: 250,
}));
