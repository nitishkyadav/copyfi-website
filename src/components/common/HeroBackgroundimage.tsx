import { ReactNode } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import HeroImage from "../../assets/HeroImg.png";

interface Props {
  children: ReactNode;
}

const Backgroundimage = styled(Box)(({ theme }) => ({
  background: `url(${HeroImage})`,
  backgroundSize: "50% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom right",
  paddingTop: theme.spacing(3),
  height: 700,
}));

export const HeroBackgroundimage = ({ children }: Props) => {
  return <Backgroundimage>{children}</Backgroundimage>;
};
