import React from 'react';
import styles from './View.module.css';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const View = () => {
  return (
    <>
      <Container>
        {/* Save data */}
        <Card className={styles.cardspace} id={styles.datatable}>
          <h6 className={`${styles.savedata} ${styles.bggray}`}>
            SAVED DATA TABLE
          </h6>
          {/* <Card.Header></Card.Header> */}
          <table class="table table-borderless">
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
                  <button className={styles.pbutton}>DELETE</button>
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
                  <button className={styles.pbutton}>DELETE</button>
                </td>
                <td>
                  <b>$66</b>
                  <p style={{ fontSize: '12px' }}>USD</p>
                </td>
              </tr>
            </tbody>
          </table>
          <Card.Footer>
            <div className={styles.back}>
              <button className={`${styles.pbutton}`}>BACK</button>
            </div>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default View;
