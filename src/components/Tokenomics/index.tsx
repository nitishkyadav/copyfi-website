import { Box, Container, Typography, Stack } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import TokenomicsChartImg from "../../assets/TokenomicsChart.png";
import { Image } from "../common";

const Background = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(10, 0),
}));

const ParagraphText = styled(Box)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.6),
  margin: theme.spacing(1, 0, 4, 0),
}));

const TokenomicsChart = styled(Image)(({ theme }) => ({
  width: "50vw",
  marginTop: theme.spacing(5),
}));

const Tokenomics = () => {
  return (
    <Background>
      <Container>
        <Typography variant="h4">Tokenomics</Typography>
        <ParagraphText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat quis
          lorem facilisis nulla posuere mauris tincidunt. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </ParagraphText>
        <Typography variant="body2" fontWeight="bold">
          Token Name
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="primary">
          Token Name
        </Typography>
        <Stack alignItems="center">
          <TokenomicsChart src={TokenomicsChartImg} alt="" />
        </Stack>
      </Container>
    </Background>
  );
};
export default Tokenomics;
