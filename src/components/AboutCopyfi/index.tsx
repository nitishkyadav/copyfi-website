import { Box, Stack, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import Dashboard from "../../assets/Dashboard.png";
import AribnbLogo from "../../assets/AirbnbLogo.png";
import FedExLogo from "../../assets/FedExLogo.png";
import GoogleLogo from "../../assets/GoogleLogo.png";
import WalmartLogo from "../../assets/WalmartLogo.png";
import HubspotLogo from "../../assets/HubspotLogo.png";

const SectionHeading = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(10),
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightBold,
  textTransform: "uppercase",
  textAlign: "center",
}));

const ParagraphText = styled(Typography)(({ theme }) => ({
  maxWidth: "50vw",
  color: alpha(theme.palette.text.primary, 0.6),
  textAlign: "center",
  [theme.breakpoints.down(theme.breakpoints.values.md)]: {
    maxWidth: "100%",
  },
}));

const FooterDiv = styled(Box)(({ theme }) => ({
  bottom: "20px",
  width: "100%",
  height: 500,
  zIndex: -1,
  background: theme.palette.primary.main,
  position: "absolute",
}));

const AboutCopyfi = () => {
  return (
    <Box style={{ position: "relative", height: 1100 }}>
      <Stack alignItems="center" spacing={4}>
        <SectionHeading variant="h6">About copyfi</SectionHeading>
        <Typography variant="h3" align="center">
          Your Trades and Portfolio Ecosystem
        </Typography>
        <ParagraphText>
          CopyFi is an ecosystem with wide variety of essential features and
          services required for any crypto trader for effectively managing their
          trades and portfolio.
        </ParagraphText>
        <img
          src={Dashboard}
          alt="dashboard"
          style={{
            width: "60vw",
            marginTop: 80,
            boxShadow: "0px 0px 69px -6px rgba(159, 163, 166,0.15)",
          }}
        />
      </Stack>
      <FooterSection />
    </Box>
  );
};

const partners = [
  { src: AribnbLogo, alt: "", heigth: 35 },
  { src: HubspotLogo, alt: "", heigth: 35 },
  { src: GoogleLogo, alt: "", heigth: 35 },
  { src: WalmartLogo, alt: "", heigth: 35 },
  { src: FedExLogo, alt: "", heigth: 30 },
];

const FooterSection = () => {
  return (
    <FooterDiv>
      <Stack marginTop={40}>
        <Typography variant="h4" align="center">
          Our Proud Partners
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={7}
          marginTop={5}
        >
          {partners.map(({ alt, src, heigth }) => (
            <img src={src} alt={alt} height={heigth} />
          ))}
        </Stack>
      </Stack>
    </FooterDiv>
  );
};
export default AboutCopyfi;
