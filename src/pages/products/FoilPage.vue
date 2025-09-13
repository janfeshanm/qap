<template>
  <q-page
    ><nav-comp style="background-color: rgb(255, 240, 191); height: 74px" />
    <div class="containeroverlay">
      <h1><span>ALUM</span> PEYMAN</h1>
      <p>
        The First and Largest Aluminum Foil and Disposable <br />
        Container Manufacturer in Northwest Iran
      </p>
    </div>
    <img src="assets/foill.png" style="width: 100%; margin-bottom: -3px" />

    <section class="foil">
      <div class="search-box">
        <input type="text" placeholder="Search..." />
        <button><img src="assets/search.png" alt="Search" /></button>
      </div>
      <div class="foil-grid">
        <div class="foil-card">
          <img src="assets/6020.png" alt="Product" />
          <div class="foil-info">
            <p>Code: 20/60</p>
            <p>Size: 600 × 1000 mm</p>
            <p>Thickness: 20 microns</p>
          </div>
          <a href="fp.html?id=1" class="foilbtn">Explore More</a>
        </div>
        <div class="foil-card">
          <img src="assets/8045.png" alt="Product" />
          <div class="foil-info">
            <p>Code: 80/45</p>
            <p>Size: 800 × 1000 mm</p>
            <p>Thickness: 45 microns</p>
          </div>
          <a href="fp.html?id=2" class="foilbtn">Explore More</a>
        </div>

        <div class="foil-card">
          <img src="assets/1430.png" alt="Product" />
          <div class="foil-info">
            <p>Code: 14/30</p>
            <p>Size: 300 × 76000 mm</p>
            <p>Thickness: 14 microns</p>
          </div>
          <a href="fp.html?id=3" class="foilbtn">Explore More</a>
        </div>

        <div class="foil-card">
          <img src="assets/6050.png" alt="Product" />
          <div class="foil-info">
            <p>Code: 60/50</p>
            <p>Size: 6000 × 1000 mm</p>
            <p>Thickness: 50 microns</p>
          </div>
          <a href="fp.html?id=4" class="foilbtn">Explore More</a>
        </div>

        <div class="foil-card">
          <img src="assets/8070.png" alt="Product" />
          <div class="foil-info">
            <p>Code: 80/70</p>
            <p>Size: 800 × 1000 mm</p>
            <p>Thickness: 70 microns</p>
          </div>
          <a href="fp.html?id=5" class="foilbtn">Explore More</a>
        </div>

        <div class="foil-card">
          <img src="assets/3014.png" alt="Product" />
          <div class="foil-info">
            <p>Code: 30/14</p>
            <p>Size: 300 × 10000 mm</p>
            <p>Thickness: 14 microns</p>
          </div>
          <a href="fp.html?id=6" class="foilbtn">Explore More</a>
        </div>

        <div class="foil-card">
          <img src="assets/1420.png" alt="Product" />
          <div class="foil-info">
            <p>Code: 14/20</p>
            <p>Size: 200 × 130000 mm</p>
            <p>Thickness: 14 microns</p>
          </div>
          <a href="fp.html?id=7" class="foilbtn">Explore More</a>
        </div>
      </div>
    </section>
    <section class="catalog-section">
      <div class="catalog-image">
        <img src="assets/catalog.png" alt="Catalog Preview" />
      </div>

      <div class="catalog-content">
        <h2>CATALOG</h2>
        <p>
          To get a comprehensive overview of our products, including detailed specifications, sizes,
          and various applications, you can download our digital catalog. It provides all the
          necessary information to help you choose the right product for your needs.
        </p>
        <a href="#" class="catalog-btn">DOWNLOAD CATALOG</a>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import NavComp from 'src/components/NavComp.vue';
</script>

<style lang="scss">
$fontColor: #1e3950;
.navbar ul li a {
  color: $fontColor;
  text-decoration: none;
  padding: 4px 10px;
}

.containeroverlay {
  position: absolute;
  left: 20%;
  color: #11304c;
  z-index: 10;
  float: left;
  top: 200px;
}
.containeroverlay h1 {
  font-size: 48px;
  margin: 0;
  font-weight: bold;
  line-height: 1.2;
}

.containeroverlay h1 span {
  display: block;
}

.containeroverlay p {
  font-size: 18px;
  margin: 10px 0;
  color: #11304c;
}

.search-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #11304c;
  padding: 25px;
  border-radius: 10px;
  margin: 10px auto 100px auto;
  max-width: 1000px;
  justify-content: center;
}

.search-box input {
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
}

.search-box button {
  background: none;
  border: none;
  margin-left: 10px;
  cursor: pointer;
}

.search-box img {
  width: 16px;
  height: 16px;
}

section.foil {
  background-color: rgb(255, 240, 191);
  padding: 100px 40px;
  margin-top: -4px;
}

.foil-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 40px 20px;
  max-width: 1100px;
  margin: auto auto;
}

.foil-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
  padding: 20px;
  transition: transform 0.2s ease;
}

.foil-card:hover {
  transform: translateY(-5px);
}

.foil-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}

.foil-info {
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.6;
}

.foilbtn {
  display: inline-block;
  background: #1e3a5f;
  color: #fff;
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s ease;
}

.pagination {
  text-align: center;
  margin: 30px 0 10px;
}

.pagination a {
  margin: 0 8px;
  text-decoration: none;
  color: #1e3a5f;
  font-weight: bold;
}

.pagination a:hover {
  text-decoration: underline;
}
</style>
