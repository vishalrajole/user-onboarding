import { InputBase, FormControl } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const CustomFormControl = styled(FormControl)(({ alignRight }) => ({
  marginLeft: alignRight ? "auto" : 0,
}));

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(4),
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
