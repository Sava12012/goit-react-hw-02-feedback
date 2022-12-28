import styled from '@emotion/styled';

export const Votes = styled.ul`
  margin: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const VotesItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--secondary);
`;

export const Name = styled.span`
  text-align: left;
  font-size: 16px;
  color: var(--secondary);
`;

export const Rate = styled.span`
  text-align: left;
  font-size: 16px;
  color: var(--accent);
`;
