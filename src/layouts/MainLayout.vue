<template>
  <q-layout view="hhh lPr fff">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer style="padding-top: 0px">
      <section class="contact-section">
        <h2>CONTACT US</h2>
        <p>
          We are here to help! Whether you have questions about our products, need assistance with
          an order, or want to discuss a business partnership, don’t hesitate to get in touch with
          us.
        </p>

        <div class="contact-container">
          <div class="contact-card">
            <h3>Get In Touch</h3>

            <strong>Phone</strong>
            <p>098 413 366 0393<br />098 413 432 9665</p>

            <strong>Email</strong>
            <p>info@alumpeyman.com</p>

            <strong>Address</strong>
            <p>
              Office: 16th Floor, Unit 1, World Trade Center Tower, World Trade Street, World Trade
              Square, Tabriz, Iran
              <br /><br />
              Factory: Km 27, Shahid Salami Industrial Zone, Km 30 of Azarshahr – Tabriz Road,
              Tabriz, Iran
            </p>

            <div class="social">
              <a href="https://www.instagram.com/alumpeyman" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#"><i class="fab fa-telegram"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
          </div>

          <div class="contact-img">
            <img src="assets/cc1.png" alt="Office Building" />
          </div>
        </div>
      </section>

      <footer>
        <div class="footer-logo">
          <img src="assets/logo2.png" alt="Logo" />
          <div>
            <h4>ALUM</h4>
            <span>PEYMAN</span>
          </div>
        </div>
        <div class="footer-links">
          <a href="#">Alum Peyman</a> <span>|</span> <a href="#">Privacy Policy</a> <span>|</span>
          <a href="#">Terms & Conditions</a> <span>|</span>
          © 2025
        </div>
      </footer>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts"></script>

<style lang="css">
.contact-section {
  width: 100%;
  margin: 0 auto;
  padding: 60px 20px;
  text-align: center;
  background-color: rgb(217, 234, 248);
}

.contact-section h2 {
  font-size: 32px;
  font-weight: bold;
  color: #11304c;
  margin-bottom: 10px;
}

.contact-section p {
  font-size: 15px;
  color: #3a4a5a;
  margin-bottom: 40px;
  max-width: 1000px;
  margin: 40px auto;
}

.contact-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-card {
  background: #fff;
  padding: 10px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  max-width: 400px;
  text-align: left;
}

.contact-card h3 {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  color: #11304c;
}

.contact-card p {
  margin: 8px 0;
  font-size: 14px;
  color: #333;
  line-height: 1.6;
}

.contact-card strong {
  display: block;
  margin-top: 12px;
  margin-bottom: 4px;
  font-size: 15px;
  color: #11304c;
}

.contact-card .social {
  text-align: center;
}

.contact-card .social a {
  margin: 0 6px;
  display: inline-block;
  font-size: 18px;
  color: #11304c;
  text-decoration: none;
}

.contact-img {
  max-width: 400px;
  border-radius: 6px;
  overflow: hidden;
}

.contact-img img {
  width: 100%;
  display: block;
  border-radius: 6px;
  height: 420px;
}

footer {
  background: #fff;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #eee;
}

.footer-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.footer-logo img {
  width: 35px;
  height: 35px;
}

.footer-logo h4 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #11304c;
  text-align: left;
}

.footer-logo span {
  display: block;
  font-size: 18px;
  font-weight: 100;
  color: #11304c;
  letter-spacing: 3px;
  text-align: left;
}

.footer-links {
  font-size: 13px;
  color: #11304c;
}

.footer-links a {
  color: #11304c;
  text-decoration: none;
  margin: 0 5px;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-links span {
  margin: 0 5px;
  color: #11304c;
}
</style>
