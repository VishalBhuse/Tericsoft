import { Box, Button, Container, Stack, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialButton = ({ children }) => {
  return (
    <Button
      sx={{
        borderRadius: "50%",
        width: "30px",
        height: "40px",
        cursor: "pointer",
        display: "inline-flex",
        justifyContent: "center",
        transition: "background-color 0.3s ease",
        "&:hover": {
          background: "#009EFF",
          color: "#fff",
        },
      }}
    >
      {children}
    </Button>
  );
};

export const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#E8F3D6",
        fontSize: "22px",
        boxShadow: 5,
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignItems: "center",
        Width: "100%",
        marginTop: "20px",
      }}
    >
      <Container
        as={Stack}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Box>
          <img
            src="https://tericsoft.com/wp-content/uploads/2021/08/Web-Logo-371x90px-200x49.png"
            alt="tericsoft logo"
          ></img>
        </Box>
        <Stack
          direction={"row"}
          spacing={6}
          color="#6D67E4"
          justifyContent="center"
        >
          <Typography>Home</Typography>
          <Typography>About</Typography>
          <Typography>Contact</Typography>
        </Stack>
      </Container>

      <Box>
        <Container
          as={Stack}
          py={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Typography color="#6D67E4">© Developed by Vishal Bhuse. </Typography>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"}>
              <TwitterIcon />
            </SocialButton>
            <SocialButton label={"YouTube"}>
              <YouTubeIcon />
            </SocialButton>
            <SocialButton label={"Instagram"}>
              <InstagramIcon />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
