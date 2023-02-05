import { Divider, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const CopyRightText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.primary.main,
  margin: theme.spacing(3),
}));
const Footer = () => {
  return (
    <Container>
      <Divider color="#ccc" light variant="middle" />
      <CopyRightText>
        Copyright @CopyFi 2022. All Rights Reserved.
      </CopyRightText>
    </Container>
  );
};

export default Footer;
