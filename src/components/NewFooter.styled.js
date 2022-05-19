import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../utils/GlobalStyles";

export const NewFooterContainer = styled.div`
  background-image: url(/newImages/newTextures/texture5.png);
  padding-top: 15px;
  padding-bottom: 15px;
  line-height: 0.5;
  color: white;
`;

export const EmployeeLink = styled(Link)`
  color: white;
  background-color: black;
  &:hover {
    background-color: black;
    color: ${colors.secondary};
    cursor: pointer;
  }
`;
