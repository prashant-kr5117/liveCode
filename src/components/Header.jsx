import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
`;
const Header = () => {
  // const logo = "../logo.jpg";
  const logo="https://drive.google.com/file/d/1rGgLLtxLyj4CPFyqVUuuZCjpi7oWxpXx/view?usp=sharing";
  return (
    <Container position="static">
      <Toolbar>
        <img src="https://drive.google.com/file/d/1rGgLLtxLyj4CPFyqVUuuZCjpi7oWxpXx/view?usp=sharing" alt="LC" style={{ width: "40px" }} />
      </Toolbar>
    </Container>
  );
};
export default Header;
