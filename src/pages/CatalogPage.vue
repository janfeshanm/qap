<template>
  <q-page>
    <nav-comp style="background-color:#11304c;height:100px" textColor="#ffffffff" />
    <div class="book-container">
      <div class="book-frame">
        <button class="arrow-btn left" @click="prevPage" :disabled="isStart">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <template v-if="isMobile || currentPage === 0">
          <img :src="`/catalogs/${currentPage + 1}.jpg`" alt="catalog page" class="page-image single" />
        </template>
        <template v-else>
          <img v-if="leftPageSrc" :src="leftPageSrc" alt="left page" class="page-image left" />
          <img v-if="rightPageSrc" :src="rightPageSrc" alt="right page" class="page-image right" />
        </template>
        <button class="arrow-btn right" @click="nextPage" :disabled="isEnd">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <div class="page-number">
        {{ currentDisplay + 1 }} / {{ totalDisplay }}
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import NavComp from 'src/components/NavComp.vue'
const totalPages = 31
const currentPage = ref(0)
const isMobile = ref(false)
const checkViewport = () => {
  isMobile.value = window.innerWidth < 768
}
onMounted(() => {
  checkViewport()
  window.addEventListener('resize', checkViewport)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkViewport)
})
const leftPageSrc = computed(() => `/catalogs/${currentPage.value + 1}.jpg`)
const rightPageSrc = computed(() => {
  if (currentPage.value === 0) return null
  const next = currentPage.value + 1
  return next < totalPages ? `/catalogs/${next + 1}.jpg` : null
})
const totalDisplay = computed(() => (isMobile.value ? totalPages : Math.ceil((totalPages - 1) / 2) + 1))
const currentDisplay = computed(() => {
  if (isMobile.value) return currentPage.value
  return currentPage.value === 0 ? 0 : Math.floor((currentPage.value - 1) / 2) + 1
})
const nextPage = () => {
  if (currentPage.value === 0) {
    currentPage.value++ 
  } else if (!isMobile.value) {
    if (currentPage.value < totalPages - 2) currentPage.value += 2
    else if (currentPage.value === totalPages - 2) currentPage.value++ 
  } else {
    if (currentPage.value < totalPages - 1) currentPage.value++
  }
}
const prevPage = () => {
  if (currentPage.value === 1 && !isMobile.value) {
    currentPage.value = 0
  } else if (!isMobile.value && currentPage.value > 1) {
    currentPage.value -= 2
  } else if (currentPage.value > 0) {
    currentPage.value--
  }
}
const isEnd = computed(() => {
  if (isMobile.value) return currentPage.value >= totalPages - 1
  return currentPage.value >= totalPages - 1
})
const isStart = computed(() => currentPage.value === 0)
</script>

<style lang="scss">
.book-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9eef3;
  min-height: calc(100vh - 100px);
  padding: 80px 0 40px 0 ;
}
.book-frame {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;
  width: 1123px;
  height: 794px;
}
.page-image {
  width: 50%;
  height: 100%;
  object-fit: contain;
  background-color: #fff;
}
.page-image.left {
  border-right: 1px solid #ddd;
}
.page-image.single {
  width: 100%;
}
.arrow-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(17, 48, 76, 0.8);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}
.arrow-btn svg {
  width: 24px;
  height: 24px;
}
.arrow-btn:hover:enabled {
  background: #1d4b6f;
}
.arrow-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.arrow-btn.left {
  left: 20px;
}
.arrow-btn.right {
  right: 20px;
}
.page-number {
  margin-top: 20px;
  color: #11304c;
  font-weight: 600;
  font-size: 16px;
}
@media (max-width: 768px) {
  .book-frame {
    width: 100%;
    max-width: 800px;
    height: auto;
    aspect-ratio: 1/1.414;
  }
  .page-image {
    width: 100%;
  }
  .arrow-btn {
    width: 45px;
    height: 45px;
  }
  .arrow-btn.left {
    left: 10px;
  }
  .arrow-btn.right {
    right: 10px;
  }
}
</style>
