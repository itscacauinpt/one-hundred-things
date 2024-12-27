'use client';

import { getJersay, getPoppins } from "@/utilities/fonts";
import { messagesList } from "@/utilities/messages";
import { useState } from "react";

export default function Home() {
  const [useMessage, setMessage] = useState(messagesList[0]);
  const [listOn, setListOn] = useState(false);

  const getRandom = () => Math.floor(Math.random() * messagesList.length);

  const aClick = () => {
    let randomMessageId = getRandom();
    setMessage(messagesList[randomMessageId]);
  };

  const showList = () => setListOn(true);
  const hideList = () => setListOn(false);

  return (
    <body className={`${getPoppins.className}`}>

      <main style={{color: "black", alignContent: "center", alignItems: "center", textAlign: "center", margin: "10%"}}>

        <h1 className={`${getJersay.className}`} style={{padding: "10%"}}>100 coisas (ou mais) para se dizer</h1>

        <section style={{margin: "5%"}}>

          <div style={{marginTop: "10%", marginBottom: "10%" }}>

            <text id="message" style={{ alignSelf: "center" }}>{`"${useMessage}"`}</text>

          </div>

          <div style={{margin: "5%" }}>

            <button onClick={aClick} className={`${getJersay.className}`} style={{cursor: "pointer", margin: "5%", backgroundColor: "#A56DE2", fontSize: "50px", paddingInline: "5%"}}>ME APERTE!</button>

          </div>

        </section>

        <section style={{marginTop: "25%"}}>
          <div>
            {
              !listOn ? (
                <button style={{
                  background: "none",
                  color: "inherit",
                  border: "none",
                  padding: "0",
                  font: "inherit",
                  cursor: "pointer",
                  outline: "inherit",
                  textDecorationLine: "underline"
                }}
                onClick={showList}
                >
                  <text>ler todas as mensagens</text>
                </button>
              ) : (
                <button style={{
                  background: "none",
                  color: "inherit",
                  border: "none",
                  padding: "0",
                  font: "inherit",
                  cursor: "pointer",
                  outline: "inherit",
                  textDecorationLine: "underline"
                }}
                onClick={hideList}
                >
                  <text>esconder mensagens</text>
                </button>
              )
            }
            </div>

            <div>
            {
              listOn ? (
                messagesList.map((message, i) => (
                  <div style={{marginTop: "5%"}}>
                    <text>{`${i+1}: ${message}`}</text>
                  </div>
                ))
              ) : (
                <text>...</text>
              )
            }
          </div>
        </section>
      </main>

    </body>
  );
}
