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

export const Note = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed ${({ theme }) => theme.color.borderNote};

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const DetalisNote = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.colorTextDescription};
`;

const ButtonNote = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.deleteNote};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const EditNote = styled(ButtonNote)`
  color: ${({ theme }) => theme.color.editNote};
`;

export const DeleteNote = styled(ButtonNote)`
  color: ${({ theme }) => theme.color.deleteNote};
`;
