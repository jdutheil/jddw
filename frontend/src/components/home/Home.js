import React from 'react'

/* React bootstrap */
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/* Components */
import Header from '../layout/Header'
import HomeTitleScreen from './HomeTitleScreen'

/* Pages */
import About from '../pages/About'

/* Styles */
import './Home.scss'

const Home = () => {
  return (
    <>
      <Header />

      <section className='home__fixed-bg'></section>

      <section className='home d-flex align-items-center'>
        <Container>
          <Row className='text-center justify-content-center'>
            <Col lg={12}>
              <HomeTitleScreen />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='home__content'>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={12}>
              <About />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home
