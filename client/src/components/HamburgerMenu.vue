<script setup>
    import { RouterLink, useRoute } from 'vue-router'

    const route = useRoute()
    
    const isActive = (path) => {
        return route.path === path
    }

    const closeHamburgerMenu = () => {
        document.getElementById('hamburgerMenu').classList.remove('show');
    }
</script>

<template>
    <div id="hamburgerMenu" class="fixed w-full h-full p-[20px] flex-col justify-between bg-white dark:bg-dark">
        <!-- close -->
        <button @click="closeHamburgerMenu" class="absolute flex justify-center items-center text-third shadow-md bg-white border-[1px] border-third rounded-[50%] right-[20px] top-[20px]"><font-awesome-icon class="text-[2rem]" icon="fa-solid fa-circle-xmark" /></button>
        <!-- navigation -->
        <nav class="flex flex-col items-start gap-[10px] text-text dark:text-white">
            <RouterLink class="py-[10px]" to="/">
                <img class="h-16 dark:hidden" loading="lazy" src="/uploads/evyap-logo.svg" alt="Evyap Nakliyat">
                <img class="h-16 hidden dark:block" loading="lazy" src="/uploads/evyap-logo.svg" alt="Evyap Nakliyat">
            </RouterLink>
            <RouterLink @click="closeHamburgerMenu" :class="{ 'text-third': isActive('/') }" class="p-[10px] flex items-center gap-[8px] mt-[10px]" to="/"><span class="text-[1.4rem] font-semibold">Anasayfa</span></RouterLink>
            <RouterLink @click="closeHamburgerMenu" :class="{ 'text-third': isActive('/hizmetler') }" class="p-[10px] flex items-center gap-[8px] mt-[10px]" to="/services"><span class="text-[1.4rem] font-semibold">Hizmetlerimiz</span></RouterLink>
            <RouterLink @click="closeHamburgerMenu" :class="{ 'text-third': isActive('/hakkinda') }" class="p-[10px] flex items-center gap-[8px] mt-[10px]" to="/about"><span class="text-[1.4rem] font-semibold">Hakkımızda</span></RouterLink>
            <RouterLink @click="closeHamburgerMenu" :class="{ 'text-third': isActive('/iletisim') }" class="p-[10px] flex items-center gap-[8px] mt-[10px]" to="/contact"><span class="text-[1.4rem] font-semibold">İletişim</span></RouterLink>
        </nav>
    </div>
</template>

<style scoped>
    #hamburgerMenu {
        display: none;
        opacity: 0;
        transform: translateY(-20px);
    }
    #hamburgerMenu.show {
        display: flex;
        animation: fadeInSlideRight 0.3s ease forwards;
    }
</style>