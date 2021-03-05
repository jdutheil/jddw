import React from 'react'

/* React bootstrap */
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/* Components */
import Header from '../layout/Header'
import HomeTitleScreen from './HomeTitleScreen'

/* Styles */
import './Home.scss'

const Home = () => {
  return (
    <>
      <Header />

      <section className='home d-flex align-items-center'>
        <Container>
          <Row className='text-center justify-content-center'>
            <Col lg={12}>
              <HomeTitleScreen />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home
