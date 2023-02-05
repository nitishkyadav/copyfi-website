import {
  Grid,
  Typography,
  Box,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import CTAImg from "../../assets/CTAImg.png";
import { Button } from "../common";

const ParagraphText = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.6),
}));

const ContainerBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: "#0E1215",
}));

const InnerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(7, 0, 2, 5),
}));
const EmailInput = styled(TextField)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(0.4, 1, 0.4, 1),
  marginRight: theme.spacing(1.5),
  background: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  "& fieldset": { border: "none" },
}));
const SubscribeButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
}));

const Contact = () => {
  return (
    <Container>
      <ContainerBox my={20}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <InnerBox>
              <Typography variant="h3" fontWeight="regular">
                Be the first to know when we launch
              </Typography>
              <ParagraphText mt={2}>
                Your one stop solution for all your crypto needs. Welcome to the
                biggest ecosystem for crypto investors on binance smart chain
              </ParagraphText>
              <Box component="form" mt={3}>
                <Stack direction="row">
                  <EmailInput
                    hiddenLabel
                    placeholder="Enter your email address"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    size="small"
                    type="email"
                    required
                  />
                  <SubscribeButton>Subscribe</SubscribeButton>
                </Stack>
              </Box>
            </InnerBox>
          </Grid>
          <Grid item xs={6}>
            <img src={CTAImg} alt="" width={"100%"} />
          </Grid>
        </Grid>
      </ContainerBox>
    </Container>
  );
};

export default Contact;
