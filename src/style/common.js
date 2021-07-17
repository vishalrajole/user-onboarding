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
