import styled from "styled-components";

export const Tile = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.color.backgroundTile};
  border: 1px solid ${({ theme }) => theme.color.borderTile};
  border-radius: 5px;
  box-shadow: 0 0 5px ${({ theme }) => theme.color.boxShadowLight};
`;

export const TileTitle = styled.h3`
  margin: 0;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderTile};
  font-size: 23px;
  font-weight: 500;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 14px;
  line-height: 1;
  color: ${({ theme }) => theme.color.colorTextDescription};
`;
