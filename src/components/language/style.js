import {
  InputBase,
  FormControl as MuiFormControl,
  InputLabel as MuiInputLabel,
  Select as MuiSelect,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const FormControl = styled(MuiFormControl)(({ alignRight }) => ({
  marginLeft: alignRight ? "auto" : 0,
}));

export const Select = styled(MuiSelect)(({ alignRight }) => ({
  minWidth: 150,
}));

export const InputLabel = styled(MuiInputLabel)((theme) => ({
  color: "red",
  fontSize: 20,
  fontWeight: 500,
  lineHeight: "1.6",
}));
export const Input = styled(InputBase)(({ theme }) => ({
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
