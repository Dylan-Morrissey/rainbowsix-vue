<template>
  <div class="hero">
    <h1 class="vue-title">RainBow 6 Home</h1>

    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>Welcome to the rainbow 6 siege web app</i></b>
          <p>Now you can create your own operators for the game.</p>
          <p>Just click <a href ="/operators#/operators">here</a> to go to the operators page and view all operator</p>
        </td>
      </tr>
      <p class="lead"><b><i>Intresed in learning more about the Game?</i></b>
        <p>Watch the youtube video attached to see a review and learn what the game has to offer</p>
      <iframe width="700" height="500" src="https://www.youtube.com/embed/Pt6v2cCjdG4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </table>
  </div>
</template>

<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
  body{
    background: url("../assets/background.jpg") repeat center top;;
  }
</style>
