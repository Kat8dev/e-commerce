import styled from 'styled-components';

export const Flexbox = styled.div`
  display: flex;
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  flex-direction: ${({ direction }) => direction || 'column'};
  flex-grow: ${({ grow }) => grow || 0};
  flex-wrap: ${({ flex }) => flex || 'no-wrap'};
  width: ${({ w }) => w || '100%'};
  gap: ${({ gap }) => gap || "1rem"};
`;