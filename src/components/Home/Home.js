import React from 'react';
import styles from './Home.module.css';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container>
        {/* Table  */}

        <Card className={styles.cardspace}>
          <Row className="mt-3 ml-5">
            <Col lg="3">
              <h5 className="p-2">Stock Details Table</h5>
            </Col>
            <Col>
              <input
                type="text"
                name="search"
                className="mb-3"
                placeholder="Search by Company Name"
              />
            </Col>
          </Row>
          {/* <Card.Header>Card Header</Card.Header> */}
          <table class="table table-borderless">
            <thead className={styles.bggray}>
              <tr>
                <th scope="col"></th>
                <th scope="col">COMPANY NAME</th>
                <th scope="col">SYMBOL</th>
                <th scope="col">MARKET CAP</th>
                <th scope="col"></th>
                <th scope="col">CURRENT PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>141 Capital Inc</td>
                <td>
                  <span class={styles.mybadge}>
                    <span class={styles.ellipse}></span>
                    <span
                      style={{
                        paddingLeft: '20px',
                        display: 'inline',
                        marginTop: '2px',
                        fontSize: '11px',
                      }}
                    >
                      ONCP
                    </span>
                  </span>
                </td>
                <td>$145.4K</td>
                <td>
                  <button className={styles.pbutton}>VIEW</button>
                </td>
                <td>
                  <b>$0.001</b>
                  <p
                    style={{
                      fontSize: '12px',
                    }}
                  >
                    USD
                  </p>
                </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>Cardlytics Inc</td>
                <td>
                  <span class={styles.mybadge}>
                    <span class={styles.ellipse}></span>
                    <span
                      style={{
                        paddingLeft: '20px',
                        display: 'inline',
                        marginTop: '2px',
                        fontSize: '11px',
                      }}
                    >
                      CDLX
                    </span>
                  </span>
                </td>
                <td>$1.88</td>
                <td>
                  <Button variant="primary">Save Data</Button>{' '}
                </td>
                <td>
                  <b>$66</b>
                  <p style={{ fontSize: '12px' }}>USD</p>
                </td>
              </tr>
            </tbody>
          </table>
          <Card.Footer>Card Footer</Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Home;
