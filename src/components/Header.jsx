import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
`;
const Header = () => {
  const logo = "../logo.jpg";
  return (
    <Container position="static">
      <Toolbar>
        <img src={logo} alt="L C" style={{ width: "40px" }} />
      </Toolbar>
    </Container>
  );
};
export default Header;
