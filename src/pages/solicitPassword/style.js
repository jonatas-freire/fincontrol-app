import styled from 'styled-components'

export const Content = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`

export const Title = styled.h2`
  text-align: center;
  color: #29ABE2;
  font-size: 1.5rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
`
export const SubTitle = styled.h2`
  text-align: center;
  color: #29ABE2;
  font-size: 1.4rem;
  margin-top: 3rem;
  margin-bottom: 0.1rem;
`

export const Paragraph = styled.p`
  text-align: center;
  color: #2B2B2B;
  font-size: 1rem;  
  margin-bottom: 2.4rem;
`

export const Background = styled.img`
  width: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;

`
export const Details = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
`

export const Spacing = styled.div`
  margin-bottom: 10px;
  width: 100%;
`