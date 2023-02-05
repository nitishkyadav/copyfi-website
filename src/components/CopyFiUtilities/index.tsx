import { Container, Grid, Typography, Paper } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import MultiChainSwap from "../../assets/MultiChainSwap.png";
import CopyTradeBot from "../../assets/CopyTradeBot.png";
import AirdropBot from "../../assets/AirdropBot.png";
import ArbitrageBot from "../../assets/ArbitrageBot.png";
import WalletTracker from "../../assets/WalletTracker.png";
import PortfolioTracker from "../../assets/PortfolioTracker.png";

const ParagraphText = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.6),
}));

const CardPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6, 2),
  justifyItems: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 4,
}));

const cards = [
  { src: MultiChainSwap, alt: "", width: 60, text: "MultiChain Swap" },
  { src: CopyTradeBot, alt: "", width: 60, text: "Copy Trade Bot" },
  { src: AirdropBot, alt: "", width: 60, text: "Airdrop Bot" },
  { src: ArbitrageBot, alt: "", width: 60, text: "Arbitrage Bot" },
  { src: WalletTracker, alt: "", width: 60, text: "Wallet Tracker" },
  { src: PortfolioTracker, alt: "", width: 60, text: "Portfolio Tracker" },
];

const CopyFiUtilities = () => {
  return (
    <Container>
      <Grid container spacing={3} mt={10} mb={10}>
        <Grid item xs={6}>
          <Typography variant="h4" mt={4} mb={2}>
            CopyFi Utilities
          </Typography>
          <ParagraphText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </ParagraphText>
        </Grid>
        {cards.map((card) => (
          <Grid item xs={3}>
            <CardPaper>
              <img src={card.src} alt={card.alt} width={card.width} />
              <Typography variant="h6">{card.text}</Typography>
            </CardPaper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default CopyFiUtilities;
