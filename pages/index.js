import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget/index.js'
import Footer from '../src/components/Footer/index.js'
import GitHubCorner from '../src/components/GitHubCorner/index.js'
import QuizBackground from '../src/components/QuizBackground/index.js'

// LAYOUT DA PÁGINA
// export const BackgroundImage = styled.div`
//   background-image: url( ${ db.bg } );
//   flex: 1;
//   background-size: cover;
//   background-position: center;

//   @media screen and (max-width: 500px) {
//     flex: 1;
//     background-size: cover;
//     background-position: 14%;
//   }
// `

export const GlassCard = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  background-color: rgba(255,255,255,0.1);
  box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  border-radius: 5px;
  backdrop-filter: blur(5px);
  transform: translateY(50%); 
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 15px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

// ESTRUTURA DA PÁGINA
export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>

      <GlassCard>
        <QuizContainer>

            <Widget>
              <Widget.Header>
                <h1>DEAD BY DAYLIGHT</h1>
              </Widget.Header>

              <Widget.Content>
                <p>Lorem Ipsum sei la das quantas</p>
              </Widget.Content>
            </Widget>
            
            <Widget>
              <Widget.Content>
                <h1>QUIZ DA GALERA</h1>
                <p>Lorem Ipsum sei la das quantas</p>
              </Widget.Content>
            </Widget>
            <Footer/>
        </QuizContainer>
      </GlassCard>

      <GitHubCorner projectUrl="https://github.com/helolah/"/>

    </QuizBackground>
  )
}
