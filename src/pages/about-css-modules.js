import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
console.log("styles",styles);
const User =props=>(
    
<div className={styles.user}>
<img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
</div>

)
console.log("user===>",User)
export default () => (
  <Container>
    <h1>User's List</h1>
  <User
  username="Logesh"
  excerpt="Developer in pipesort"
  avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"

  />
  <User
  username="Harish"
  excerpt="Developer in pipesort"
  avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"

  />
  <User
  username="Madhan"
  excerpt="Developer in pipesort"
  avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
  />
  <User
  username="Siva"
  excerpt="Developer in pipesort"
  avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
  />

  </Container>
)