<template>
  <q-page>
    <header>
      <q-carousel v-model="slide" ref="carousel">
        <q-carousel-slide :name="1" img-src="assets/container.png" />
        <template v-slot:control>
          <q-carousel-control position="top" class="text-white rounded-borders">
            <nav-comp />
          </q-carousel-control>

          <q-carousel-control position="bottom" style="max-width: 60%"
            ><div class="containeroverlay">
              <h1><span>ALUM</span> PEYMAN</h1>
              <p>
                The First and Largest Aluminum Foil and Disposable <br />
                Container Manufacturer in Northwest Iran
              </p>
            </div>
          </q-carousel-control>
        </template>
      </q-carousel>
    </header>
    <section class="containerr">
      <div class="search-box">
        <input type="text" placeholder="Search..." />
        <button><img src="assets/search.png" alt="Search" /></button>
      </div>
      <div class="container-grid">
        <div class="container-card">
          <img src="assets/40.png" alt="Product" />
          <div class="container-info">
            <p>Code: 40</p>
            <p>Top out: 46 × 122 × 146 mm</p>
            <p>Top in: 35 × 103 × 130 mm</p>
          </div>
          <a href="30.html?id=1" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/50.png" alt="Product" />
          <div class="container-info">
            <p>Code: 50</p>
            <p>Top out: 56 × 126 × 152 mm</p>
            <p>Top in: 45 × 108 × 136 mm</p>
          </div>
          <a href="30.html?id=2" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/30.png" alt="Product" />
          <div class="container-info">
            <p>Code: 30</p>
            <p>Top out: 41 × 113 × 203 mm</p>
            <p>Top in: 31 × 98 × 178 mm</p>
          </div>
          <a href="30.html?id=3" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/301.png" alt="Product" />
          <div class="container-info">
            <p>Code: 30.1</p>
            <p>Top out: 41 × 113 × 203 mm</p>
            <p>Top in: 31 × 98 × 178 mm</p>
          </div>
          <a href="30.html?id=4" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/111.png" alt="Product" />
          <div class="container-info">
            <p>Code: 111</p>
            <p>Top out: 52 × 141 × 191 mm</p>
            <p>Top in: 40 × 121 × 171 mm</p>
          </div>
          <a href="30.html?id=5" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/711.png" alt="Product" />
          <div class="container-info">
            <p>Code: 711</p>
            <p>Top out: 48 × 147 × 212 mm</p>
            <p>Top in: 38 × 126 × 189 mm</p>
          </div>
          <a href="30.html?id=6" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/105t.png" alt="Product" />
          <div class="container-info">
            <p>Code: 105t</p>
            <p>Top out: 50 × 151 × 216 mm</p>
            <p>Top in: 38 × 132 × 196 mm</p>
          </div>
          <a href="30.html?id=7" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/105s.png" alt="Product" />
          <div class="container-info">
            <p>Code: 105s</p>
            <p>Top out: 46 × 151 × 217 mm</p>
            <p>Top in: 35 × 133 × 197 mm</p>
          </div>
          <a href="30.html?id=8" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/109.png" alt="Product" />
          <div class="container-info">
            <p>Code: 109</p>
            <p>Top out: 47 × 154 × 218 mm</p>
            <p>Top in: 34 × 134 × 199 mm</p>
          </div>
          <a href="30.html?id=9" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/106.png" alt="Product" />
          <div class="container-info">
            <p>Code: 106</p>
            <p>Top out: 55 × 156 × 219 mm</p>
            <p>Top in: 44 × 137 × 197 mm</p>
          </div>
          <a href="30.html?id=10" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/729.png" alt="Product" />
          <div class="container-info">
            <p>Code: 729</p>
            <p>Top out: 42 × 176 × 227 mm</p>
            <p>Top in: 32 × 159 × 211 mm</p>
          </div>
          <a href="30.html?id=11" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/107.png" alt="Product" />
          <div class="container-info">
            <p>Code: 107</p>
            <p>Top out: 58 × 167 × 222 mm</p>
            <p>Top in: 48 × 149 × 204 mm</p>
          </div>
          <a href="30.html?id=12" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/114.png" alt="Product" />
          <div class="container-info">
            <p>Code: 114</p>
            <p>Top out: 58 × 160 × 227 mm</p>
            <p>Top in: 45 × 141 × 206 mm</p>
          </div>
          <a href="30.html?id=13" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/222.png" alt="Product" />
          <div class="container-info">
            <p>Code: 222</p>
            <p>Top out: 43 × 184 × 232 mm</p>
            <p>Top in: 35 × 146 × 209 mm</p>
          </div>
          <a href="30.html?id=14" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/320.png" alt="Product" />
          <div class="container-info">
            <p>Code: 320</p>
            <p>Top out: 38 × 174 × 228 mm</p>
            <p>Top in: 26 × 153 × 209 mm</p>
          </div>
          <a href="30.html?id=15" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/230.png" alt="Product" />
          <div class="container-info">
            <p>Code: 230</p>
            <p>Top out: 49 × 162 × 259 mm</p>
            <p>Top in: 38 × 139 × 239 mm</p>
          </div>
          <a href="30.html?id=16" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/240.png" alt="Product" />
          <div class="container-info">
            <p>Code: 240</p>
            <p>Top out: 46 × 163 × 311 mm</p>
            <p>Top in: 34 × 142 × 291 mm</p>
          </div>
          <a href="30.html?id=17" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/250.png" alt="Product" />
          <div class="container-info">
            <p>Code: 250</p>
            <p>Top out: 46 × 176 × 237 mm</p>
            <p>Top in: 34 × 151 × 305 mm</p>
          </div>
          <a href="30.html?id=18" class="containerbtn">Explore More</a>
        </div>
        <div class="container-card">
          <img src="assets/118.png" alt="Product" />
          <div class="container-info">
            <p>Code: 118</p>
            <p>Top out: 52 × 208 × 366 mm</p>
            <p>Top in: 38 × 185 × 346 mm</p>
          </div>
          <a href="30.html?id=19" class="containerbtn">Explore More</a>
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
import { ref } from 'vue';
const slide = ref(1);
</script>

<style lang="scss">
$fontColor: #1e3950;
.navbar ul li a {
  color: $fontColor;
  text-decoration: none;
  padding: 4px 10px;
}
.containeroverlay {
  left: 21%;
  color: #11304c;
  z-index: 10;
}

.containeroverlay h1 {
  font-size: 34px;
  margin: 0;
  font-weight: bold;
  line-height: 1.2;
}

.containeroverlay h1 span {
  display: block;
}

.containeroverlay p {
  margin: 10px 0;
  color: #11304c;
}

@media (max-width: 768px) {
  .containeroverlay {
    top: 10%;
    left: 10%;
    color: #11304c;
    z-index: 10;
    width: 80%;
    position: absolute;
  }

  .containeroverlay h1 {
    font-size: 26px;
    line-height: 1.1;
  }

  .containeroverlay p {
    font-size: 12px;
    margin: 8px 0;
  }
}

@media (max-width: 480px) {
  .containeroverlay {
    top: 8%;
    left: 5%;
    width: 90%;
  }

  .containeroverlay h1 {
    font-size: 16px;
  }

  .containeroverlay p {
    font-size: 12px;
  }
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

.catalog-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 140px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
}

.catalog-image {
  flex: 1;
}

.catalog-image img {
  width: 100%;
  border-radius: 8px;
}

.catalog-content {
  flex: 1;
}

.catalog-content h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #11304c;
}

.catalog-content p {
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 30px;
  color: #11304c;
}

.catalog-btn {
  display: inline-block;
  background: #11304c;
  color: #fff;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.catalog-btn:hover {
  background: #11304c;
}

section.containerr {
  background-color: rgb(217, 234, 248);
  padding: 100px 40px;
  margin-top: -4px;
}

.container-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 40px 20px;
  max-width: 1100px;
  margin: auto auto;
}

.container-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
  padding: 20px;
  transition: transform 0.2s ease;
}

.container-card:hover {
  transform: translateY(-5px);
}

.container-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}

.container-info {
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.6;
}

.containerbtn {
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
