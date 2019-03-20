<template>
  <div id="wrapper">
    <Header></Header>
    <Information msg_intro="CALCUL IMPÔT À LA SOURCE"></Information>
    <CalculetteV2></CalculetteV2>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Information from "../components/layout/Information";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
//import Calculette from "../components/Calculette";
import CalculetteV2 from "../components/CalculetteV2";
export default {
  name: 'Home',
  components: {
    Header,
    Information,
    CalculetteV2,
    Footer
  }
}
</script>
