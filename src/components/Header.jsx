import { AppBar, Toolbar, styled } from "@mui/material";
import logo from "../logo.png"
const Container = styled(AppBar)`
  background: #060606;
  postion: static;
  border-bottom: 1px solid #2f2f2f;
  height: 9vh;
`;

const Tool=styled(Toolbar)`
width:40;

`
const Header = () => {
  // const logo = "../logo.jpg";
  // const logo="../logo.png";
  return (
    <Container position="static">
      <Tool>
        <img src={logo} alt="L c" style={{width:40, }} />
      </Tool>
    </Container>
  );
};
export default Header;
