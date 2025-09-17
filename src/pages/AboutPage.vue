<template>
  <q-page>
    <nav-comp style="background-color: #11304c; height: 100px" />
    <section class="about-section">
      <div class="about-content">
        <h2>ABOUT US</h2>
        <p>
          Founded in 2005, Alum Peyman was established to meet the growing market demands in the
          packaging industry for food, pharmaceuticals, industrial products, bitumen sheets, and
          more. As the first and largest manufacturer of disposable containers and aluminium foil
          using the latest global technologies, the company began its operations in the Shahid
          Salimi Industrial Park in Tabriz, northwest of Iran. From its inception, the strong market
          presence and high customer satisfaction in the region inspired the management team to
          enhance product quality, expand the product range, and grow its target markets. Market
          research to better respond to industry needs.
        </p>
        <div class="about-buttons">
<router-link to="/contact" class="btn primary">Learn More</router-link>
          <a href="https://www.aparat.com/v/l49is36" class="btn secondary"> Watch Video <span class="play-icon">▶</span> </a>
        </div>
      </div>
      
      <div class="about-stats">
        <div class="stat-box">
          <div class="number">20</div>
          <div class="label">Years of experience</div>
        </div>
        <div class="stat-box">
          <div class="number">+10</div>
          <div class="label">Our Exports</div>
        </div>
        <div class="stat-box">
          <div class="number">+15</div>
          <div class="label">Distributors</div>
        </div>
        <div class="stat-box">
          <div class="number">+50</div>
          <div class="label">Expert Colleagues</div>
        </div>
      </div>
    </section>
    <div style="background-color: #11304c; width: 100%; justify-content: center; display: flex">
      <img src="assets/about.png" alt="Office Building" class="aboutphoto" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import NavComp from 'src/components/NavComp.vue';
</script>

<style lang="scss">
$fontColor: white;
.navbar ul li a {
  color: $fontColor;
  text-decoration: none;
  padding: 4px 10px;
}

.about-section {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  background-color: #11304c;
  color: white;
  gap: 50px;
}

@media (max-width: 1000px) {
  .about-section {
    display: grid;
    grid-template-columns: auto;
  }
}

.about-content {
  max-width: 450px;
  width: 100%;
}

.about-content h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

.about-content p {
  font-size: 14px;
  line-height: 1.8;
  text-align: justify;
}

.about-buttons {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  transition: 0.3s;
  border: 1px solid white;
}

.btn.primary {
  background-color: white;
  color: #11304c;
  border: none;
}

.btn.secondary {
  border: 1px solid white;
  color: white;
  background-color: transparent;
}

.play-icon {
  margin-left: 8px;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
  max-width: 400px;
  width: 100%;
}

.stat-box {
  background-color: white;
  color: #11304c;
  padding: 25px 20px;
  text-align: center;
  border-radius: 2px;
}

.stat-box .number {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
}

.stat-box .label {
  font-size: 13px;
}
</style>
