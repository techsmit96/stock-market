import React from 'react';
import Google from '../../assets/GOOGL.png';
import FB from '../../assets/FB.png';
import Amazon from '../../assets/AMZN.svg';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import styles from './Herocards.module.css';

const Herocards = () => {
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <div className={styles.herocard}>
            <Row>
              <Col>
                <h6>GOOGL</h6>
              </Col>
              <Col>
                <Image
                  style={{ float: 'right' }}
                  variant="left"
                  src={Google}
                  width="50"
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <h2 style={{ textAlign: 'center' }}>1515 USD</h2>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.herocard}>
            <Row>
              <Col>
                <h6>FB</h6>
              </Col>
              <Col>
                <Image
                  style={{ float: 'right' }}
                  variant="left"
                  src={FB}
                  width="50"
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <h2 style={{ textAlign: 'center' }}>266 USD</h2>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.herocard}>
            <Row>
              <Col>
                <h6>AMZN</h6>
              </Col>
              <Col>
                <Image
                  style={{ float: 'right' }}
                  variant="left"
                  src={Amazon}
                  width="50"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 style={{ textAlign: 'center' }}>3116 USD</h2>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Herocards;
