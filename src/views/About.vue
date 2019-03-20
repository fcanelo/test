<template>
  <div id="wrapper">
    <Header></Header>
    <Information msg_intro="About"></Information>
    <div>Body</div>
    <Footer></Footer>
  </div>
</template>

<script>
  // @ is an alias to /src

  import Information from "../components/layout/Information";
  import Footer from "../components/layout/Footer";
  import Header from "../components/layout/Header";

  export default {
    name: 'Home',
    components: {
      Header,
      Information,
      Footer
    }
  }
</script>
