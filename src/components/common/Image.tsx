import { BoxProps, Box } from "@mui/material";

type ImgProps = {
  alt: string;
  src: string;
};

export const Image = (props: BoxProps & ImgProps) => (
  <Box component="img" {...props} />
);
