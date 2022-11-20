import styled from "styled-components";
import { ReactComponent as NoNotesSvg } from "./empty.svg";

export const NoNotes = styled.div`
  margin-top: 25px;
  text-align: center;
  color: ${({ theme }) => theme.color.colorTextDescription};
`;

export const IconNoNotes = styled(NoNotesSvg)`
  opacity: 0.8;
  transform: scale(0.8);
  fill: ${({ theme }) => theme.color.colorTextDescription};
`;

export const Description = styled.p`
  margin: 0;
  line-height: 1.1;
`;

export const WrapperNotes = styled.div`
  margin-top: 25px;
`;
