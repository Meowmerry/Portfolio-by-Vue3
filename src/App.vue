<script setup>
import Nav from './components/Nav.vue';
import Header from "./components/Header.vue";
import TheCanvas from './components/TheCanvas.vue';
import About from "./components/About.vue";
import WorkExperience from "./components/WorkExperience.vue";
import Portfolio from './components/Portfolio.vue'
import Educational from "./components/Educational.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/footer.vue";

</script>

<template>
   

   <Nav></Nav> 
   <Header></Header>
   <TheCanvas></TheCanvas>
    <About></About>
    <Portfolio ></Portfolio>
    <WorkExperience ></WorkExperience>
    <Educational ></Educational>
    <Contact ></Contact>
    <Footer></Footer>

    
</template>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>