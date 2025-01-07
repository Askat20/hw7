// import { movies } from "../../utils/constants";
import { Button } from "../UI/Button/Button";
import styled from "styled-components";

export function Main({ movie, onDelete, openEditMovieModal }) {
  return (
    <MainComponent>
      <h2>АКЫРКЫ ЧЫККАН ТАСМАЛАР</h2>
      <MoviesContainerSection>
        {movie.map((item) => (
          <MovuieBlockDiv key={item.movieId}>
            <MovieImg src={item.movieImage} alt="Чон кыз" />
            <WraperInfoAction>
              <div>
                <MovieTitle>{item.movieTitle}</MovieTitle>
                <MovieStatus>{item.movieStatus}</MovieStatus>
              </div>
              <WraperBtn>
                <MyButton onClick={() => openEditMovieModal(item)}>
                  Изменить
                </MyButton>
                <MyButton onClick={() => onDelete(item.movieId)}>
                  Удалить
                </MyButton>
              </WraperBtn>
            </WraperInfoAction>
          </MovuieBlockDiv>
        ))}
      </MoviesContainerSection>
    </MainComponent>
  );
}

export default Main;
const MainComponent = styled.main`
  padding: 30px;
`;
const MoviesContainerSection = styled.section`
  margin-top: 30px;
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
`;
const MovuieBlockDiv = styled.div`
  border: 1px solid white;
  padding: 10px 20px 6px 20px;
  border-radius: 10px;
  &:hover {
    scale: 1.01;
    cursor: pointer;
  }
`;
const MovieImg = styled.img`
  width: 250px;
`;
const WraperInfoAction = styled.article`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const MovieTitle = styled.h4`
  font-size: larger;
`;
const MovieStatus = styled.p`
  color: green;
  font-weight: 500;
`;
const WraperBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const MyButton = styled.button`
  width: 80px;
  height: 25px;
  background-color: blueviolet;
  border: 1px solid white;
  border-radius: 7px;
  color: white;
  font-size: 14px;
  font-weight: 600;
`;
