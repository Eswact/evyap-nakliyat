<script setup>
    import { RouterLink, useRoute } from 'vue-router'
    import DarkMode from './DarkMode.vue'

    const route = useRoute()
    
    const isActive = (path) => {
        return route.path === path
    }

    const openHamburgerMenu = () => {
        document.getElementById('hamburgerMenu').classList.add('show');
    }
</script>

<template>
    <div class="h-6 md:hidden w-full bg-main/20 dark:bg-bg/20 flex justify-center items-center">
        <div class="w-full max-w-[1600px] px-[20px] flex justify-between items-center">
            <span></span>
            <a class="text-sm font-bold text-text dark:text-white" href="tel:0216 573 71 34">Tel : 0216 573 71 34</a>
        </div>
    </div>
    <div class="w-full h-[calc(100%-1.5rem)] md:h-full flex justify-between items-center max-w-[1600px] py-[12px] px-[20px] lg:px-[10px]">
        <nav class="flex items-end gap-[20px] xl:gap-[10px] text-text dark:text-white md:hidden">
            <RouterLink class="mr-16 pb-2 xl:pl-[10px]" to="/">
                <img class="h-14 dark:hidden xl:hidden" loading="lazy" src="/uploads/evyap-logo.svg" alt="Evyap Nakliyat">
                <img class="h-14 hidden dark:block xl:dark:hidden" loading="lazy" src="/uploads/evyap-logo.svg" alt="Evyap Nakliyat">
                <img class="h-14 hidden xl:block" loading="lazy" src="/uploads/evyap-logo-mobile.svg" alt="Evyap Nakliyat">
            </RouterLink>
            <RouterLink :class="{ 'text-main': isActive('/') }" class="py-[6px] px-[12px] xl:px-[6px] flex items-center gap-[8px] relative group font-ptSans font-semibold" to="/"> 
                <span class="text-[1.2rem] font-semibold">Anasayfa</span>
                <span :class="{ 'w-full': isActive('/'), 'w-0': !isActive('/') }" class="absolute left-0 bottom-1 h-[2px] bg-main transition-all duration-200 group-hover:w-full"></span>
            </RouterLink>
            <RouterLink :class="{ 'text-main': isActive('/services') }" class="py-[6px] px-[12px] xl:px-[6px] flex items-center gap-[8px] relative group font-ptSans font-semibold" to="/services"> 
                <span class="text-[1.2rem] font-semibold">Hizmetlerimiz</span>
                <span :class="{ 'w-full': isActive('/services'), 'w-0': !isActive('/services') }" class="absolute left-0 bottom-1 h-[2px] bg-main transition-all duration-200 group-hover:w-full"></span>
            </RouterLink> 
            <RouterLink :class="{ 'text-main': isActive('/about') }" class="py-[6px] px-[12px] xl:px-[6px] flex items-center gap-[8px] relative group font-ptSans font-semibold" to="/about"> 
                <span class="text-[1.2rem] font-semibold">Hakkımızda</span>
                <span :class="{ 'w-full': isActive('/about'), 'w-0': !isActive('/about') }" class="absolute left-0 bottom-1 h-[2px] bg-main transition-all duration-200 group-hover:w-full"></span>
            </RouterLink>   
            <RouterLink :class="{ 'text-main': isActive('/contact') }" class="py-[6px] px-[12px] xl:px-[6px] flex items-center gap-[8px] relative group font-ptSans font-semibold" to="/contact"> 
                <span class="text-[1.2rem] font-semibold">İletişim</span>
                <span :class="{ 'w-full': isActive('/contact'), 'w-0': !isActive('/contact') }" class="absolute left-0 bottom-1 h-[2px] bg-main transition-all duration-200 group-hover:w-full"></span>
            </RouterLink>   
        </nav>
        <div class="hidden md:block">
            <button @click="openHamburgerMenu"><font-awesome-icon class="text-[2rem] px-[6px] text-main dark:text-white" icon="fa-solid fa-bars"/></button>
        </div>
        <div class="flex items-center justify-end gap-[30px] xl:gap-[20px] lg:gap-[10px] md:gap-[30px]">
            <!-- phone -->
            <a href="tel:0216 573 71 34" class="hidden md:block"><font-awesome-icon class="text-[2rem] px-[6px] text-main dark:text-white" icon="fa-solid fa-phone"/></a>
            <!-- darkmode -->
            <DarkMode />
        </div>
    </div>
</template>