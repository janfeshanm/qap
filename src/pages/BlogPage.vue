<template>
  <q-page>
    <nav-comp style="background-color: #11304c; height: 100px" />
    <div
      style="
        width: 100%;
        margin: 0 auto;
        padding: 40px 20px;
        font-family: Arial, sans-serif;
        background-color: #11304c;
        color: #fff;
      "
    >
      <h2 style="text-align: center; margin-bottom: 40px; font-size: 26px; font-weight: bold">
        OUR LATEST ARTICLES & BLOG POSTS
      </h2>
      <div
        style="
          max-width: 1000px;
          background: #f9f9f9;
          color: #333;
          border-radius: 12px;
          padding: 20px;
          margin: 40px auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
        "
      >
        <img
          src="assets/b1.png"
          alt="Aluminum container"
          style="max-width: 300px; border-radius: 8px"
        />
        <div style="flex: 1; min-width: 250px">
          <h3 style="font-size: 20px; margin-bottom: 10px">
            Why Aluminum Containers are Perfect for Food Storage
          </h3>
          <p style="line-height: 1.6; font-size: 15px">
            Aluminum containers are one of the most reliable and versatile solutions for food
            storage... <br />
            1. Excellent Heat Conductivity <br />
            2. Lightweight Yet Strong
          </p>
        </div>
      </div>
      <div
        style="
          max-width: 1000px;
          background: #f9f9f9;
          color: #333;
          border-radius: 12px;
          padding: 20px;
          margin: 40px auto;
        "
      >
        <div style="flex: 1; min-width: 250px; margin: 40px auto; max-width: 1000px">
          <h3 style="font-size: 20px; margin-bottom: 10px">
            The Environmental Benefits of Recycling Aluminum
          </h3>
          <p style="line-height: 1.6; font-size: 15px">
            Recycling aluminum is one of the most impactful ways we can protect the environment and
            conserve valuable resources...
          </p>
          <div
            style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 20px; align-items: center"
          >
            <img
              src="assets/b2.png"
              alt="Containers"
              style="flex: 1; max-width: 220px; border-radius: 8px"
            />
            <div style="flex: 2; font-size: 15px; line-height: 1.6">
              <p>
                1. Saves Energy <br />
                2. Reduces Landfill Waste <br />
                3. Lowers Carbon Emissions <br />
                4. Conserves Natural Resources <br />
                5. Supports a Circular Economy
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style="
          max-width: 1000px;
          background: rgba(255, 255, 255, 0.1);
          text-align: center;
          padding: 30px;
          border-radius: 12px;
          margin: 40px auto;
        "
      >
        <h3 style="font-size: 20px; margin-bottom: 10px">Want to learn more?</h3>
        <p style="font-size: 15px">
          Explore our blog for more tips, articles, and industry updates.
        </p>
      </div>
      <div
        style="
          text-align: center;
          font-size: 15px;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        "
      >
        <p>
          Explore our blog for more tips, articles, and industry updates. <br />
          We'd love to hear from you! Let us know what you'd like to learn more about—our company,
          our process, or our products. <br />
          Your feedback and questions help us improve and serve you better.
        </p>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import NavComp from 'src/components/NavComp.vue';
</script>

<style lang="scss"></style>
