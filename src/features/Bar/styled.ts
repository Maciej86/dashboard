import styled from "styled-components";
import { widthNawigation } from "../../core/styled";

export const Header = styled.header`
  position: fixed;
  width: calc(100% - ${widthNawigation}px);
  height: 70px;
  margin-left: ${widthNawigation}px;
  padding: 0 20px;
  background: rgb(39, 39, 39);
  color: rgb(253, 253, 253);
`;
