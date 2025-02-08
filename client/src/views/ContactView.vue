<script setup>
    import { toast } from 'vue3-toastify';

    const isEmpty = (value) => {
        return value === '' || value === null || value === undefined;
    }
    const handleSubmit = () => {
        if (isEmpty(document.getElementById('formName').value) || 
            isEmpty(document.getElementById('formMail').value) || 
            isEmpty(document.getElementById('formMessage').value)) {
            toast(t('toastMessages.contactForm.blankForm'), { autoClose: 3000, type: "error", position: "bottom-right" });
            return;
        }
        const data = {
            name: document.getElementById('formName').value,
            email: document.getElementById('formMail').value,
            message: document.getElementById('formMessage').value,
        };
        const onSuccess = (res) => {
            document.getElementById('formName').value = '';
            document.getElementById('formMail').value = '';
            document.getElementById('formMessage').value = '';
            toast(t('toastMessages.contactForm.success'), { autoClose: 3000, type: "success", position: "bottom-right" });
        };
        const onError = (err) => {
            console.warn(err);
            toast($t('toastMessages.contactForm.error'), { autoClose: 3000, type: "error", position: "bottom-right" });
        };
        AjaxScripts.SendMail({data, onSuccess, onError});
    }
</script>

<template>
    <div class="w-full flex flex-col justify-center items-center gap-[16px]">
        <!-- contact image -->
        <div class="w-full h-[304px] grid place-items-center bg-[#575456] shadow-lg shadow-[rgba(0,0,0,0.37)]">
            <div
                class="relative flex justify-center items-center w-full max-w-[1600px] h-[304px] before:absolute before:inset-0 before:right-auto before:pointer-events-none before:w-20 before:bg-gradient-to-r before:from-[#575456] before:to-[#57545600] before:z-20 after:absolute after:inset-0 after:left-auto after:pointer-events-none after:w-20 after:bg-gradient-to-l after:from-[#575456] after:to-[#57545600] after:z-20 2xl:before:w-0 2xl:after:w-0">
                <img class="w-full h-full object-cover object-bottom"
                    loading="lazy" src="/uploads/contact.jpg" alt="contact">
                <div class="absolute inset-0 bg-black opacity-55 md:opacity-40"></div>
                <h1 class="absolute text-[4rem] md:text-[3rem] font-semibold text-white">Bize Ulaşın</h1>
            </div>
        </div>
        <div class="w-full max-w-[1600px] flex flex-col gap-[40px] px-[40px] 3xl:px-[60px] 2xl:px-[40px] py-[40px] md:px-[20px] md:py-[20px] md:flex-col">
            <!-- contact infos -->
            <div class="w-full flex flex-wrap justify-around items-center md:items-start md:justify-start gap-[20px]">
                <div class="px-[20px] md:w-full flex items-center gap-[20px] border-b-1 sm:items-start">
                    <div class="text-[2rem] md:text-[1.5rem] p-[16px] md:p-[10px] rounded-[50%] flex justify-center items-center border border-main bg-main-light text-main dark:bg-main dark:text-white shadow-md shadow-main-shadow">
                        <font-awesome-icon class="min-w-[30px] flex justify-center items-center" icon="fa-solid fa-phone" />
                    </div>
                    <div class="flex flex-col gap-1 text-[1.1rem] xl:text-base max-w-[300px] md:max-w-full sm:pt-[7px]">
                        <span class="w-full flex justify-between gap-4"><span class="font-semibold">Ataşehir :</span>0216 573 71 34</span> 
                        <span class="w-full flex justify-between gap-4"><span class="font-semibold">Feneryolu :</span>0216 347 99 04</span> 
                        <span class="w-full flex justify-between gap-4"><span class="font-semibold">Mecidiyeköy :</span>0212 288 71 12</span>
                    </div>
                </div>
                <div class="px-[20px] md:w-full flex items-center gap-[20px] border-b-1 sm:items-start">
                    <div class="text-[2rem] md:text-[1.5rem] p-[16px] md:p-[10px] rounded-[50%] flex justify-center items-center border border-main bg-main-light text-main dark:bg-main dark:text-white shadow-md shadow-main-shadow">
                        <font-awesome-icon class="min-w-[30px] flex justify-center items-center" icon="fa-solid fa-envelope" />
                    </div>
                    <div class="flex items-center">
                        <span class="text-[1.5rem] xl:text-[1.25rem] md:text-[1.1rem] max-w-[300px] sm:pt-[7px]">info@evyapnakliyat.com</span>
                    </div>  
                </div>
                <div class="px-[20px] md:w-full flex items-center gap-[20px] border-b-1 sm:items-start">
                    <div class="text-[2rem] md:text-[1.5rem] p-[16px] md:p-[10px] rounded-[50%] flex justify-center items-center border border-main bg-main-light text-main dark:bg-main dark:text-white shadow-md shadow-main-shadow">
                        <font-awesome-icon class="min-w-[30px] flex justify-center items-center" icon="fa-solid fa-location-dot" />
                    </div>
                    <div class="flex items-center">
                        <span class="text-[1.25rem] md:text-[1.1rem] max-w-[300px] sm:pt-[7px]">Gedikpaşa sok. Gedik İş merkezi Ataşehir / İstanbul</span>
                    </div>  
                </div>
            </div>
            <div class="w-full flex items-center justify-between lg:flex-col-reverse gap-[30px]">
                <!-- contact form -->
                <div class="w-full max-w-[45%] lg:max-w-[100%] flex flex-col gap-[32px] text-text dark:text-white p-[20px] sm:p-0">
                    <div class="px-[6px]">
                        <h3 class="text-[2.25rem] font-semibold text-main dark:text-white">İletişime Geçin</h3>
                        <span class="text-[1.25rem] text-text/75 dark:text-white/75">Senin için buradayız! Nasıl Yardımcı Olabiliriz ?</span>
                    </div>
                    <form @submit.prevent="handleSubmit" class="flex flex-col gap-[20px] px-[4px]">
                        <div class="flex flex-col items-start justify-start gap-[2px]">
                            <input class="w-full border-[2px] px-[20px] py-[10px] bg-[#FAF9F9] rounded-md border-main-shadow shadow-md shadow-main-light placeholder:text-[#AAA0A2] text-[1.15rem]" type="text" name="formName" id="formName" placeholder="Adınız Soyadınız" required/>
                        </div>
                        <div class="flex flex-col items-start justify-start gap-[2px]">
                            <input class="w-full border-[2px] px-[20px] py-[10px] bg-[#FAF9F9] rounded-md border-main-shadow shadow-md shadow-main-light placeholder:text-[#AAA0A2] text-[1.15rem]" type="email" name="formMail" id="formMail" placeholder="Mail Adresiniz" required/>
                        </div>
                        <div class="flex flex-col items-start justify-start gap-[2px]">
                            <textarea class="w-full h-[240px] max-h-[320px] min-h-[100px] overflow-y-auto border-[2px] px-[20px] py-[10px] bg-[#FAF9F9] rounded-md border-main-shadow shadow-md shadow-main-light placeholder:text-[#AAA0A2] text-[1.15rem]" name="formMessage" id="formMessage" placeholder="Mesajınız" required></textarea>
                        </div>
                        <button type="submit" class="py-[6px] rounded-md border border-main bg-main text-white text-[1.4rem] font-semibold shadow-lg shadow-main-shadow duration-200 hover:bg-main-light hover:text-main">Gönder</button>
                    </form>
                </div>
                <!-- address image -->
                <div class="w-full max-w-[50%] lg:max-w-[100%] flex flex-col items-center justify-center gap-[24px] p-[20px] sm:p-0">
                    <a class="w-full border-[2px] border-main/50 dark:border-main shadow-md shadow-main/25 rounded-lg overflow-hidden hover:shadow-lg hover:scale-[1.01] duration-200" target="_blank" href="https://www.google.com/maps/place/Evyap+Nakliyat/@40.97975,29.113877,16z/data=!4m6!3m5!1s0x14cac63e71c31251:0x85f3b05c03ef46c0!8m2!3d40.97975!4d29.113877!16s%2Fg%2F1ptzy25js?hl=tr&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D">
                        <img class="w-full" loading="lazy" src="/uploads/address.png" alt="address">
                    </a>
                </div>
            </div>
        </div>
        <!-- social media -->
        <div class="fixed 2xl:hidden left-0 bottom-[400px] py-[24px] pl-[10px] pr-[16px] border border-l-0 bg-white z-20 dark:bg-dark border-main dark:border-white text-main dark:text-white text-[1.3rem] flex flex-col gap-[16px] justify-center items-center duration-200 hover:pl-[16px]" style="border-radius: 0 20px 20px 0;">
            <a class="hover:scale-[1.1] duration-200" rel="canonical" target="_blank" href=""><font-awesome-icon icon="fa-brands fa-facebook" size="lg" /></a> 
            <a class="hover:scale-[1.1] duration-200" rel="canonical" target="_blank" href=""><font-awesome-icon icon="fa-brands fa-twitter" size="lg" /></a> 
            <a class="hover:scale-[1.1] duration-200" rel="canonical" target="_blank" href=""><font-awesome-icon icon="fa-brands fa-instagram" size="lg" /></a> 
            <a class="hover:scale-[1.1] duration-200" rel="canonical" target="_blank" href=""><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
        </div>
    </div>
</template>