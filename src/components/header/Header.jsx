import { Button } from "../UI/Button/Button";
import styled from "styled-components";

function Header({ openModalHandler }) {
  return (
    <HeaderMovie>
      <ImgLogo src="https://shorturl.at/TjVav" alt="logo" />
      <HeaderNav>
        <a href="#">Фильмы</a>
        <a href="#">Сериалы</a>
        <a href="#">Мультфильмы</a>
        <a href="#">Windows</a>
        <a href="#">Календарь</a>
      </HeaderNav>
      <div>
        <MyButtonMovue>Смотреть 30 дней за 1с</MyButtonMovue>
      </div>
      <div>
        <MyButtonLogo className="logoBtn" onClick={openModalHandler}>
          Добавить
        </MyButtonLogo>
      </div>
    </HeaderMovie>
  );
}

export default Header;
const ImgLogo = styled.img`
  width: 130px;
`;

const HeaderNav = styled.nav`
  display: flex;
  gap: 20px;
  a {
    color: white;
    font-weight: 900;
  }
`;
const HeaderMovie = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;
const MyButtonMovue = styled.button`
  width: 300px;
  background-color: orange;
  height: 40px;
  color: white;
  font-size: large;
  font-weight: 700;
  border-radius: 8px;
  border: 1px solid red;
`;

const MyButtonLogo = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  background-color: black;
  color: white;
  font-size: large;
  border: 1px solid white;
`;
