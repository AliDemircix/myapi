import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRef, useState } from "react";

export default function Home() {
  const userMail = useRef();
  const [subscribers, setSubscribers] = useState([]);
  function handlerSubmit(event) {
    event.preventDefault();
    const userMailRef = userMail.current.value;
    const reqBody = {
      mail: userMailRef,
    };
    fetch("/api/subscription", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    return alert("Subscription Completed Succesfully...!!!");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Submit Our NewsLetter</h1>

        <p className={styles.description}>Get news as soon as possible</p>
      </main>
      <div>
        <form onSubmit={handlerSubmit}>
          <div className='myform'>
            <label htmlFor='email'>Your Email</label>
            <input type='mail' id='email' ref={userMail}></input>
            <button>Send</button>
          </div>
        </form>
      </div>

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
