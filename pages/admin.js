import Head from "next/head";
import styles from "../styles/Admin.module.css";
import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import Link from "next/link";

export default function Admin() {
  const [subscribers, setSubscribers] = useState([]);
  function getSubscribers(e) {
    // If you want to use get button use e.preventDefault();

    // e.preventDefault();
    console.log("get subscriber button work");
    fetch("/api/subscription")
      .then((response) => response.json())
      .then((data) => setSubscribers(data.subscribers));
    console.log(subscribers);
  }
  getSubscribers();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Subscribers</h1>

        <p className={styles.description}>List of Subscribers</p>
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Mail</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((sub) => (
              <tr key={sub.id}>
                <td>{sub.id}</td>
                <td>{sub.mail}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
      {/* If you want to use button to get data use this code */}
      {/* <main className={styles.button}>
        <button onClick={getSubscribers}> Get Subscribers</button>
      </main> */}
      <Link href='/'>
        <Button
          variant='danger'
          style={{ marginBottom: "50px", marginTop: "0px" }}
        >
          Home Page
        </Button>
      </Link>
      <footer className={styles.footer}>
        <a
          href='https://viptalkers.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://user.viptalkers.com/static/media/logo.3f681277.svg'
            alt='Viptalkers'
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}
