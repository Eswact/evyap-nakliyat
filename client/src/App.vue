<script setup>
import { onMounted, computed, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HamburgerMenu from './components/HamburgerMenu.vue'

const route = useRoute();
const isNotFound = computed(() => { return route.name === 'not-found' });

onMounted(() => {
  const scrollToTopButton = document.getElementById('scrollToTopButton');
  if (scrollToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        scrollToTopButton.classList.remove('opacity-0', 'pointer-events-none');
        scrollToTopButton.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        scrollToTopButton.classList.remove('opacity-100', 'pointer-events-auto');
        scrollToTopButton.classList.add('opacity-0', 'pointer-events-none');
      }
    });
    scrollToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      let scrollInterval = setInterval(() => {
        if (window.scrollY > 0) {
          window.scrollBy(0, -50);
        } else {
          clearInterval(scrollInterval);
        }
      }, 10);
    });
  }
});
</script>

<template>
  <HamburgerMenu class="z-30"/>
  <div class="w-full flex flex-col justify-center items-center">
    <!-- header -->
    <header v-if="!isNotFound" class="z-20 fixed top-0 left-0 w-full h-[110px] md:h-[80px] flex flex-col justify-center items-center bg-white dark:bg-dark transition-all duration-200 shadow-md">
      <Header />
    </header>
    <!-- main -->
    <main :class="{ 'mt-[110px] md:mt-[80px]': !isNotFound }" class="w-full dark:text-white">
      <RouterView />
    </main>
    <!-- footer -->
    <footer class="w-full mt-[40px]" v-if="!isNotFound">
      <Footer />
    </footer>
  </div>
  <!-- whatsapp -->
  <a v-if="!isNotFound" class="whatsapp-logo bg-[#25D366] p-[4px] z-20 fixed bottom-[24px] right-[24px] lg:bottom-[10px] lg:right-[10px] overflow-hidden rounded-[50%]" target="_blank" href="https://web.whatsapp.com/send?phone=+905324720590&text=Merhaba"><img class="aspect-square w-[55px] lg:w-[50px] rounded-[50%]" loading="lazy" src="/uploads/whatsapp-logo.png" alt="whatsapp logo"></a>
  <!-- arrow up -->
  <a href="#" id="scrollToTopButton" class="fixed text-[1.5rem] bottom-[30vh] right-0 z-30 py-[8px] pl-[12px] pr-[6px] bg-main text-white shadow-md transition-opacity duration-300 opacity-0 pointer-events-none" style="border-radius: 50% 0 0 50%;">
    <font-awesome-icon icon="fa-solid fa-chevron-up" />
  </a>
</template>

<style scoped>
</style>