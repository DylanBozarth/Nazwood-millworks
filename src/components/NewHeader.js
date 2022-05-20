import React, { useState } from "react";
import { Modal } from "./Modal";
// import { Link } from "react-router-dom";
import {
  Container,
  HeaderText,
  MainLogo,
  NavbarContainer,
  TitleContainer,
  MenuButton,
} from "./NewHeader.styles";
// import { NewNavbar } from "./Modal";

export const NewHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="modal-container">
      <Container>
        <TitleContainer>
          <MainLogo to="/"></MainLogo>
          <HeaderText>
            <h1>Nazwood</h1>
            <h1>Millworks</h1>
          </HeaderText>
        </TitleContainer>
        <NavbarContainer>
          <MenuButton onClick={() => setIsOpen(true)}></MenuButton>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Fancy
          </Modal>
        </NavbarContainer>
      </Container>
    </div>
  );
};
