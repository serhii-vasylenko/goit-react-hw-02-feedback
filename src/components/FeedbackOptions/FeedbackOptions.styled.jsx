import styled from '@emotion/styled';

export const List = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  paddingLeft: '8px',
});

export const Button = styled.button({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  paddingLeft: '8px',
  paddingRight: '8px',

  textTransform: 'capitalize',

  border: 'none',
  borderRadius: '4px',

  fontFamily: 'inherit',
  fontSize: '16px',

  cursor: 'pointer',

  boxShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16)`,

  '&:hover': {
    backgroundColor: '#2196f3',
    color: '#fff',
  },
});
