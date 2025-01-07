import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { ModalUi } from "./components/UI/modal/ModalUi";
import { movies } from "./utils/constants";
import { Button } from "./components/UI/Button/Button";
import styled from "styled-components";

function App() {
  const [movie, setMovie] = useState(movies);
  const [openModal, setOpenModal] = useState(false);
  const [movieImage, setMovieImage] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieStatus, setMovieStatus] = useState("");
  const [editMovie, setEditMovie] = useState(null);

  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const handelImageChange = (e) => {
    setMovieImage(e.target.value);
  };
  const handelTitleChange = (e) => {
    setMovieTitle(e.target.value);
  };
  const handelStatusChange = (e) => {
    setMovieStatus(e.target.value);
  };

  const updateOrAddMovieHandler = () => {
    if (!movieImage || !movieTitle || !movieStatus)
      return alert("заполните пропуск");
    if (editMovie) {
      const updateMovie = movie.map((item) =>
        item.movieId === editMovie.movieId
          ? { ...item, movieImage, movieStatus, movieTitle }
          : item
      );
      setMovie(updateMovie);
      setEditMovie(null);
    } else {
      const newMovie = {
        movieImage: movieImage,
        movieTitle: movieTitle,
        movieStatus: movieStatus,
        id: Date.now(),
      };
      setMovie([...movie, newMovie]);
    }
    closeModalHandler();
    setMovieImage("");
    setMovieStatus("");
    setMovieTitle("");
  };

  const openEditMovieModal = (kino) => {
    setEditMovie(kino);
    setMovieImage(kino.movieImage);
    setMovieTitle(kino.movieTitle);
    setMovieStatus(kino.movieStatus);
    setOpenModal(true);
  };

  // const addMoviehandler = () => {};

  const deleteMovieHandler = (id) => {
    const filteredMovie = movie.filter((el) => el.movieId !== id);
    setMovie(filteredMovie);
  };

  return (
    <div>
      {openModal && (
        <ModalUi onClose={closeModalHandler}>
          <DivWtaperInpt>
            <input
              type="text"
              placeholder="Ссылка на фото"
              value={movieImage}
              onChange={handelImageChange}
            />
            <input
              type="text"
              placeholder="Название фильма"
              value={movieTitle}
              onChange={handelTitleChange}
            />
            <input
              type="text"
              placeholder="Статус фильма"
              value={movieStatus}
              onChange={handelStatusChange}
            />
          </DivWtaperInpt>

          <ContainerSection>
            <button onClick={closeModalHandler}>отменить</button>
            <button
              // onClick={addMoviehandler}
              onClick={updateOrAddMovieHandler}
            >
              {editMovie ? "сохранить" : "добавить"}
              {/* добавить */}
            </button>
          </ContainerSection>
        </ModalUi>
      )}

      <Header openModalHandler={openModalHandler} />
      <Main
        movie={movie}
        onDelete={deleteMovieHandler}
        openEditMovieModal={openEditMovieModal}
      />
      <Footer />
    </div>
  );
}

export default App;
const DivWtaperInpt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    width: 100%;
    height: 40px;
    background-color: white;
    color: black;
    padding: 10px;
    font-size: large;
    border-radius: 10px;
  }
`;
const ContainerSection = styled.section`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;
