import { styled } from "@material-ui/core/styles";

export const GallaryWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridGap: "30px",
  gridTemplateColumns: "repeat(auto-fill,minmax(22%,1fr))",
  gridAutoFlow: "column",
  gridAutoColumns: "minmax(22%,1fr)",
  overflowX: "hidden",
}));

export const ImageTile = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  "> img": {
    maxWidth: "100%",
    height: "auto",
  },
  ">span": {
    textAlign: "center",
  },
}));

export const HorizontalWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridGap: "16px",
  alignItems: "center",
  gridAutoFlow: "column",
  gridTemplateColumns: "30px auto-fill 30px",
  marginTop: 30,
}));

export const IconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  padding: 15,
  justifyContent: "center",
  position: "fixed",
  bottom: 0,
}));
