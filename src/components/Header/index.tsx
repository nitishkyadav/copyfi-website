import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-scroll";

import CopyFiLogo from "../../assets/CopyfiLogo.png";

const Item = styled(Link)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  textDecoration: "none",
  textAlign: "center",
  color: theme.palette.text.primary,
  textTransform: "uppercase",
  fontWeight: theme.typography.fontWeightMedium,
}));

const GlassMorphismBox = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(40, 41, 45, 0.5)",
  backdropFilter: "blur(10px)",
  padding: theme.spacing(2, 3),
  borderRadius: theme.shape.borderRadius * 3,
}));

const Header = () => {
  return (
    <GlassMorphismBox>
      <Stack direction="row" justifyContent="space-between">
        <img src={CopyFiLogo} alt="" height={25} />
        <Stack direction="row">
          <Item to="about-copyfi" smooth={true} duration={500}>
            About CopyFi
          </Item>
          <Item to="utilities" smooth={true} duration={600}>
            Utilities
          </Item>
          <Item to="tokenomics" smooth={true} duration={700}>
            Tokenomics
          </Item>
          {/* <Item>Roadmap</Item> */}
          <Item to="our-team" smooth={true} duration={900}>
            Team
          </Item>
        </Stack>
      </Stack>
    </GlassMorphismBox>
  );
};
export default Header;
