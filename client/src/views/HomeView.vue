<script setup>
    import { useFadeIn } from '../scripts/common';
    import { useRouter } from 'vue-router'
    useFadeIn();

    const router = useRouter();
    const navigateToContact = () => router.push('/iletisim');
</script>

<template>
  <div class="w-full flex flex-col justify-start items-center gap-[80px]">
    <div class="relative w-full flex flex-col justify-start items-center gap-[20px]">
      <div class="w-full max-w-[1600px] px-[80px] lg:px-[40px] md:px-[10px] xl:py-[40px] flex justify-between items-center">
        <div class="fade-in lg:justify-center lg:w-full lg:items-center flex flex-col justify-start items-start xl:gap-[20px] w-[50%] 2xl:w-[55%]">
          <div class="flex flex-col justify-start items-start lg:justify-center lg:items-center gap-8 xl:gap-10 px-6 xl:px-5">
            <h1 class="text-[2.75rem] 2xl:text-3lx xl:text-2xl lg:text-center text-third dark:text-white font-bold whitespace-nowrap">Evyap Evden Eve Nakliyat</h1>
            <p class="text-2xl 2xl:text-xl xl:text-lg font-bold text-main dark:text-third underline">Asansörlü Taşıma Kaskolu Evden Eve Nakliyat Şirketi</p>
            <div class="flex flex-col gap-4 dark:text-bg">
              <p class="text-justify">Evyap Ataşehir evden eve nakliyat eşya depolama firması en uygun Sigortalı Ev Eşyası depolama ve taşıma işi yapmaktadır. Ataşehir nakliyat A.Ş. olarak evden eve teslim, depo depolama ve asansörlü servis hizmetleri de vermekteyiz. Sektördeki köklü geçmişimiz ile sizin için yetenekli bir grup oluşturduk.</p>
              <p class="text-justify">Ataşehir asansörlü taşıma EVYAP Ataşehir asansör taşımacılığı hizmeti olarak bizi seçtiğinizde şehir içi nakliye o kadar da zorlu ve problemli olmadığını fark edeceksiniz. Yetenekli ekibimiz, kaliteli malzememiz ve son teknolojinin gerektirdiği ekipmanlarımız ile sizlere yardımcı oluyoruz.</p>
            </div>
            <button @click="navigateToContact" class="text-xl font-bold px-4 py-3 rounded-lg bg-main text-white shadow-lg shadow-main/20 hover:bg-second hover:text-white duration-200">Hemen iletişime Geçin</button>
          </div>
        </div>
        <div class="fade-in lg:hidden w-[40%] xl:w-[300px] flex justify-center items-center">
          <img loading="lazy" src="/uploads/transportation.png" alt="Evden eve nakliye">
        </div>
      </div>
    </div>
    <div class="w-full relative sm:p-4 bg-main-light dark:bg-main-shadow flex flex-col justify-center items-center bg-main/20">
      <div class="bottomWave top-[-10px] mainWave h-[10px]"></div>
      <div class="w-full max-w-[1600px] p-4 flex justify-between items-center">
        <div class="w-[45%] p-[50px] xl:p-[40px] lg:hidden">
          <img class="fade-in w-full" loading="lazy" src="/uploads/services.png" alt="Evyap Nakliyat Hizmetleri">
        </div>
        <div class="w-[55%] lg:w-full lg:p-8 md:p-2 sm:p-0 flex justify-center items-center">
          <div class="fade-in w-full bg-white flex lg:justify-between lg:items-center md:flex-col md:gap-4 gap-6 justify-start items-start p-10 xl:p-8 sm:p-6 border rounded-lg shadow-xl">
            <div class="flex flex-col gap-12 md:gap-4 md:w-full md:justify-center justify-start items-start">
              <div class="flex items-center justify-start gap-[28px] xl:gap-[16px]">
                <font-awesome-icon icon="fa-solid fa-circle-check"  class="text-3xl text-green-600"/>
                <span class="text-text font-semibold text-[1.2rem] xl:text-[1rem]">Asonsörlü Taşıma</span>
              </div>
              <div class="flex items-center justify-start gap-[28px] xl:gap-[16px]">
                <font-awesome-icon icon="fa-solid fa-circle-check"  class="text-3xl text-green-600"/>
                <span class="text-text font-semibold text-[1.2rem] xl:text-[1rem]">Eşya Paketleme</span>
              </div>
              <div class="flex items-center justify-start gap-[28px] xl:gap-[16px]">
                <font-awesome-icon icon="fa-solid fa-circle-check"  class="text-3xl text-green-600"/>
                <span class="text-text font-semibold text-[1.2rem] xl:text-[1rem]">Eşya Depolama</span>
              </div>
              <div class="flex items-center justify-start gap-[28px] xl:gap-[16px]">
                <font-awesome-icon icon="fa-solid fa-circle-check"  class="text-3xl text-green-600"/>
                <span class="text-text font-semibold text-[1.2rem] xl:text-[1rem]">Şehirler Arası Ofis Taşımacılığı</span>
              </div>
              <div class="flex items-center justify-start gap-[28px] xl:gap-[16px]">
                <font-awesome-icon icon="fa-solid fa-circle-check"  class="text-3xl text-green-600"/>
                <span class="text-text font-semibold text-[1.2rem] xl:text-[1rem]">Şehirler Arası Nakliyat</span>
              </div>
              <div class="flex items-center justify-start gap-[28px] xl:gap-[16px]">
                <font-awesome-icon icon="fa-solid fa-circle-check"  class="text-3xl text-green-600"/>
                <span class="text-text font-semibold text-[1.2rem] xl:text-[1rem]">Kurumsal Taşımacılık</span>
              </div>
            </div>
            <div class="flex flex-col gap-12 md:gap-4 md:w-full md:justify-center justify-start items-start">
              <div class="flex items-center justify-start gap-[28px] xl:gap-[16px]">
                <font-awesome-icon icon="fa-solid fa-circle-check"  class="text-3xl text-green-600"/>
                <span class="text-text font-semibold text-[1.2rem] xl:text-[1rem]">Moda Evden Eve Nakliye</span>
              </div>
              <div class="flex items-center justify-start gap-[28px] xl:gap-[16px]">
                <font-awesome-icon icon="fa-solid fa-circle-check"  class="text-3xl text-green-600"/>
                <span class="text-text font-semibold text-[1.2rem] xl:text-[1rem]">Villa Taşıma Nakliyesi</span>
              </div>
              <div class="flex items-center justify-start gap-[28px] xl:gap-[16px]">
                <font-awesome-icon icon="fa-solid fa-circle-check"  class="text-3xl text-green-600"/>
                <span class="text-text font-semibold text-[1.2rem] xl:text-[1rem]">Banka Taşıma</span>
              </div>
              <div class="flex items-center justify-start gap-[28px] xl:gap-[16px]">
                <font-awesome-icon icon="fa-solid fa-circle-check"  class="text-3xl text-green-600"/>
                <span class="text-text font-semibold text-[1.2rem] xl:text-[1rem]">Mağaza Taşıma</span>
              </div>
              <div class="flex items-center justify-start gap-[28px] xl:gap-[16px]">
                <font-awesome-icon icon="fa-solid fa-circle-check"  class="text-3xl text-green-600"/>
                <span class="text-text font-semibold text-[1.2rem] xl:text-[1rem]">Askılı Tekstil Taşıma</span>
              </div>
              <div class="flex items-center justify-start gap-[28px] xl:gap-[16px]">
                <font-awesome-icon icon="fa-solid fa-circle-check"  class="text-3xl text-green-600"/>
                <span class="text-text font-semibold text-[1.2rem] xl:text-[1rem]">Ofis Taşımna Büro Nakliyesi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="topWave bottom-[-10px] mainWave h-[10px]"></div>
    </div>

    <div class="w-full relative py-8 sm:p-5 bg-main-light dark:bg-main-shadow flex flex-col justify-center items-center">
      <div class="w-full max-w-[1600px] flex justify-around md:justify-center items-center flex-wrap gap-4">
        <div class="w-[320px] max-w-full aspect-[4/3] p-4 bg-white dark:bg-main rounded-lg shadow-xl flex flex-col items-center text-center gap-6">
          <font-awesome-icon icon="fa-solid fa-truck" class="text-4xl text-main dark:text-white" />
          <h2 class="font-bold text-lg text-main dark:text-white">Profesyonel Taşıma</h2>
          <span class="text-sm dark:text-bg">Ataşehir evden eve nakliyat ekiplerine Hizmet kalitesini en iyi noktaya getirmek amacıyla nakliye ekiplerine özel eğitimler veriliyor.</span>
        </div>
        <div class="w-[320px] max-w-full aspect-[4/3] p-4 bg-white dark:bg-main rounded-lg shadow-xl flex flex-col items-center text-center gap-6">
          <font-awesome-icon icon="fa-solid fa-lock" class="text-4xl text-main dark:text-white" />
          <h2 class="font-bold text-lg text-main dark:text-white">Hasar Güvencesi</h2>
          <span class="text-sm dark:text-bg">Eşyalarınız taşınma öncesi kontrol edildikten sonra, taşıma sonrası oluşan zararlar nakliye ekibi tarafından karşılanıyor.</span>
        </div>
        <div class="w-[320px] max-w-full aspect-[4/3] p-4 bg-white dark:bg-main rounded-lg shadow-xl flex flex-col items-center text-center gap-6">
          <font-awesome-icon icon="fa-solid fa-users" class="text-4xl text-main dark:text-white" />
          <h2 class="font-bold text-lg text-main dark:text-white">Sizin Yanınızdayız</h2>
          <span class="text-sm dark:text-bg">Herhangi bir ihtiyacın olduğunda bizimle iletişime geçmen yeterli. Bir sorun yaşaman durumunda çözeceğimizden emin olabilirsin.</span>
        </div>
        <div class="w-[320px] max-w-full aspect-[4/3] p-4 bg-white dark:bg-main rounded-lg shadow-xl flex flex-col items-center text-center gap-6">
          <font-awesome-icon icon="fa-solid fa-tags" class="text-4xl text-main dark:text-white" />
          <h2 class="font-bold text-lg text-main dark:text-white">Sabit Fiyat Garantisi</h2>
          <span class="text-sm dark:text-bg">Rezervasyon sırasında gördüğün fiyatın hatalı bir talebin olmadığı sürece değişmeyeceğinden emin olabilirsin.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainWave {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%2317567630" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
}
.dark .mainWave {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%2317567630" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
}
.topWave {
    position: absolute;
    left: 0;
    width: 100%;
    transform: rotate(180deg) scaleX(-1);
    background-repeat: repeat-x;
    background-size: contain;
    transition: all 200ms ease-in-out;
}
.bottomWave {
    position: absolute;
    left: 0;
    width: 100%;
    background-repeat: repeat-x;
    background-size: contain;
}
</style>
