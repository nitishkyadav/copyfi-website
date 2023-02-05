import { Box, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

import { Button } from "../common";

const Container = styled(Box)(({ theme }) => ({
  margin: theme.spacing(6, 2),
}));
const ParagraphText = styled(Box)(({ theme }) => ({
  maxWidth: "50vw",
  color: alpha(theme.palette.text.primary, 0.6),
  margin: theme.spacing(1, 0, 4, 0),
}));

const HeroSection = () => {
  return (
    <Container>
      <Typography variant="h1">LET’S</Typography>
      <Typography variant="h1" color="primary">
        REVOLUTIONIZE
      </Typography>
      <Typography variant="h1">CRYPTO</Typography>
      <ParagraphText>
        Your one stop solution for all your crypto needs. Welcome to the biggest
        ecosystem for crypto investors on binance smart chain
      </ParagraphText>
      <Button>LET’S START</Button>
    </Container>
  );
};

export default HeroSection;
