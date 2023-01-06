import styled from 'styled-components';

export const CastTitle = styled.h3`
  color: #9e1501;
  font-size: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Picture = styled.img`
  max-width: 100px;
  height: auto;
  margin-right: 16px;
  border: 1px solid #ccc;
  object-fit: contain;
`;

export const CastItem = styled.li`
  display: flex;
  height: 145px;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
