<template>

  <!-- Portfolio Grid -->
  <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Portfolio</h2>
          <h3 class="section-subheading text-muted">
            Here are my portfolio since I have been work on web developer
          </h3>
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-4 col-sm-6 portfolio-item"
          v-for="(obj, key) in portfolioJSON"
          :key="key"
        >
          <a class="portfolio-link" data-toggle="modal" target="_blank" :href="obj.href">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <div class="portfolio-caption">
              <h4>{{ obj.caption }}</h4>
              <p class="text-muted">{{ obj.title }}</p>
              <img class="img-fluid" v-bind:src="obj.img" alt />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import landingPage from '../assets/img/Landing-Page.png';
import iEnergywhiz from '../assets/img/ienergy.png';
import Level11 from '../assets/img/level.png';
import Restaurant from '../assets/img/reserved.png';
import Petcare from "../assets/img/petCare.png";
import Weather from "../assets/img/wether.jpeg";
import BootStrap from "../assets/img/bootstrap.png";
export default {
  data: () => ({
    portfolioJSON: [
        {
        img:landingPage,
        caption: "Influencer-Platform",
        href: "https://github.com/Meowmerry/INFLUENCER-AGENCIES-PLATFORM",
        title: "ReactHook & NextJs TypeScript with MongoDB",
      },
      {
        img: iEnergywhiz,
        caption: "iEnergywhiz",
        href: "https://www.ienergywhiz.com/",
        title: "React & Redux with MongoDB",
      },
      {
        img: Level11,
        caption: "Asset management software",
        href: "https://staging.level11.dev/login",
        title: "ReactHook with NextJs and Postgresql",
      },
      {
        img: Restaurant,
        caption: "Restaurant Reservation",
        href: "https://github.com/Meowmerry/Reservations-redux",
        title: "React & Redux with SQL DB",
      },
      {
        img: Petcare,
        caption: "PetCare",
        href: "https://github.com/Meowmerry/PetCare",
        title: "React Project",
      },
      {
        img:
          "https://chargerod.com/wp-content/uploads/2021/02/ptt-ev-charger.jpg",
        caption: "EV Station",
        href: "https://evstation.pttor.com/",
        title: "React/Redux Project",
      },
      {
        img:
          "https://static.vecteezy.com/system/resources/previews/004/666/571/non_2x/area-chart-blue-flat-design-long-shadow-glyph-icon-rising-graph-with-indexes-increasing-diagram-business-report-visualization-marketing-research-presentation-silhouette-illustration-vector.jpg",
        caption: "Token App Frontend",
        href: "https://tokenkulap-web-app.netlify.app/",
        title: "React-Frontend Project",
      },
       {
        img: "https://miro.medium.com/max/1838/1*TlGoD3h0Dxawxx9k3AGO-g.png",
        caption: "killswitch.finance",
        href: "https://killswitch.finance/",
        title: "React Project Frontend",
      },
      {
        img: Weather,
        caption: "Wanderlust Check the WEATHER!",
        href: "https://wanderlust-weather.netlify.app/",
        title: "The WEATHER! - API HTTP Requests",
      },
      {
        img: BootStrap,
        caption: "Welcome to my World!",
        href: "https://welcome-to-myworld.netlify.app/",
        title: "Bootstrap Project",
      },
      {
        img:
          "https://marina-ferreira.github.io/img/tutorials/js/memory-game/memory-game.gif",
        caption: "Javascript Memory game",
        href: "https://js-memery-game.netlify.app/",
        title: "HTML, CSS, Javascript Project",
      },
      {
        img:
          "https://static-assets.codecademy.com/Courses/Learn-JavaScript/Event-Loop-and-Concurrency/JavaScript-Engine-Diagram.png",
        caption: "Concurrency Model and Event Loop in JavaScript",
        href: "https://event-loop-callstack-javascript.netlify.app/",
        title: "HTML, CSS, Javascript Project",
      },
    ],
  }),
};
</script>
