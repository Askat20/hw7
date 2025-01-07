import styled from "styled-components";

export const ModalUi = ({ children, onClose }) => {
  return (
    <ModalDiv onClick={onClose}>
      <ContentModalDiv onClick={(e) => e.stopPropagation()}>
        {children}
      </ContentModalDiv>
    </ModalDiv>
  );
};

const ModalDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(93, 93, 93, 0.42);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
`;
const ContentModalDiv = styled.div`
  width: 400px;
  height: auto;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
`;
