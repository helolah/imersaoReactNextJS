import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.background};
  /* border: 1px solid ${({ theme }) => theme.colors.background}; */
  border-radius: 5px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`

Widget.Header = styled.header`
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 32px;
    background-color: ${({ theme }) => theme.colors.secondary};

    * {
    margin: 0;
    }
`

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  
  & > *:first-child {
    margin-top: 0;
  }
  
  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`

export default Widget;