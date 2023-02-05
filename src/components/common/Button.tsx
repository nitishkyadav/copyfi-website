import { ReactNode } from "react";
import MuiButton from "@mui/material/Button";
import { styled, darken } from "@mui/material/styles";
import { ButtonBaseProps } from "@mui/material";

const CustomButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  padding: theme.spacing(1.2, 4),
  fontWeight: theme.typography.fontWeightBold,
  fontSize: "1.15rem",
  "&:hover": {
    backgroundColor: darken(theme.palette.primary.main, 0.2),
  },
}));

interface Props {
  children: ReactNode;
}

export const Button = ({ children }: Props & ButtonBaseProps) => {
  return <CustomButton color="secondary">{children}</CustomButton>;
};
