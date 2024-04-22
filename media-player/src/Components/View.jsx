import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VedioCard from './VideoCard'

function View() {
  return (
    <>
      <Row>
        <Col className='mb-4' sm={12} md={6} lg={4} >
          <VedioCard/>
        </Col>
      </Row>
    </>
  )
}

export default View