import React, { useEffect } from "react";
import Header from "../Header/Header";
import Industry from "../Industry/Industry";

export default function Home() {
  useEffect(() => {}, []);
  return (
    <div>
      <Header />
      <div
        style={{
          marginTop: "100px",
        }}
      >
        <div> ytg </div>
        <section id="industry">
          <Industry />
        </section>
        <div> asfdjafkjdsgfjds</div>
      </div>
    </div>
  );
}
