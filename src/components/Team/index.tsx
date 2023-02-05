import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import TeamImg from "../../assets/TeamImg.png";
import TelegramIcon from "../../assets/TelegramIcon.png";

const ParagraphText = styled(Typography)(({ theme }) => ({
  maxWidth: "50vw",
  color: alpha(theme.palette.text.primary, 0.6),
  textAlign: "center",
  [theme.breakpoints.down(theme.breakpoints.values.md)]: {
    maxWidth: "100%",
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.6),
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightBold,
  textTransform: "uppercase",
  textAlign: "center",
}));

const teams = [
  {
    name: "Faisal Mukhtar",
    designation: "UX Designer",
    link: "",
    image: TeamImg,
  },
  {
    name: "Faisal Mukhtar",
    designation: "UX Designer",
    link: "",
    image: TeamImg,
  },
  {
    name: "Faisal Mukhtar",
    designation: "UX Designer",
    link: "",
    image: TeamImg,
  },
];

const Team = () => {
  return (
    <Box my={15}>
      <Container>
        <Stack alignItems="center" spacing={4}>
          <SectionHeading variant="h6">Our Team</SectionHeading>
          <Typography variant="h3" align="center">
            Your Trades and Portfolio Ecosystem
          </Typography>
          <ParagraphText>
            CopyFi is an ecosystem with wide variety of essential features and
            services required for any crypto trader for effectively managing
            their trades and portfolio.
          </ParagraphText>
          <Grid container>
            {teams.map((team) => (
              <Grid item xs={4} mt={2}>
                <img src={team.image} alt="team-img" width={"80%"} />
                <Stack spacing={2} direction="row" alignItems="center">
                  <Typography variant="h5" fontWeight="bold">
                    {team.name}
                  </Typography>
                  <img src={TelegramIcon} alt="" width={50} />
                </Stack>
                <SubTitle variant="h5">{team.designation}</SubTitle>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Team;
