<script setup>
import { useFadeIn } from '../scripts/common';
useFadeIn();
</script>

<template>
    <div class="w-full flex flex-col relative justify-center items-center">
    <div class="w-full max-w-[1600px] relative flex flex-col justify-center items-center gap-[20px]">
      <!-- About Us -->
      <div class="fade-in w-full lg:flex-col-reverse lg:p-0 flex gap-[30px] justify-between items-center p-[20px] pb-0">
          <div class="lg:w-full lg:max-w-[100%] lg:min-h-0 flex flex-col gap-[40px] max-w-[50%] px-[40px]">
            <p class="h-0 text-[1.2rem] font-bold text-third">Hakkımızda</p>
            <h1 class="text-[3.2rem] xl:text-[2.5rem] lg:text-[2rem] sm:text-[1.5rem] font-bold pl-[24px] md:pl-0">Evyap Nakliye Firması</h1>
            <div class="relative flex flex-col gap-[10px] p-[10px] text-justify">
              <p>EVYAP Nakliyat, 25 yılı aşkın tecrübesiyle İstanbul’un en güvenilir nakliyat firmalarından biri olarak hizmet vermektedir. Evden eve taşımacılıktan ofis nakliyesine, eşya depolamadan şehirler arası taşımacılığa kadar geniş bir hizmet yelpazesi sunuyoruz. Profesyonel ekibimiz ve son teknoloji taşıma ekipmanlarımız ile müşterilerimize %100 güvenli ve konforlu bir nakliye deneyimi yaşatıyoruz. Yılların verdiği deneyimle, taşıma sürecini titizlikle planlıyor, eşyalarınızı özenle ambalajlayarak herhangi bir zarar görmesini engelliyoruz.</p>
              <p>Müşteri memnuniyetini her zaman ön planda tutan firmamız, zamanında ve eksiksiz teslimat anlayışıyla hizmet vermektedir. Her müşterimizin ihtiyaçlarına özel çözümler üreterek, taşınma sürecini hızlı ve sorunsuz hale getiriyoruz. EVYAP Nakliyat olarak, sektördeki en iyi hizmeti sunmayı hedefliyor ve her geçen gün kendimizi geliştirmeye devam ediyoruz.</p>
            </div>
          </div>
          <div class="relative w-[500px] h-[500px] lg:w-full lg:h-[400px] lg:p-[20px] p-[50px]">
            <div class="w-full h-full bg-main/20 rounded-lg lg:hidden"></div>
            <img class="absolute bottom-0 right-0 lg:relative lg:w-full lg:h-full w-[400px] h-[400px] object-cover rounded-lg" loading="lazy" src="/uploads/aboutUs.jpg" alt="About Us">
          </div>
      </div>
      <!-- statistics -->
      <div class="fade-in w-full p-[20px] flex flex-col justify-center items-center gap-[20px]">
        <div class="relative md:flex-wrap md:gap-[20px] md:h-auto w-full max-w-[1100px] h-[120px] px-[40px] py-[20px] flex justify-around items-center border-[2px] border-main-shadow rounded-xl dark:bg-main/20 shadow-lg overflow-hidden">
          <div class="topWave h-[40px]"></div>
          <div class="flex flex-col justify-center items-center">
            <span class="text-[3rem] max-h-[60px] text-main dark:text-third font-newAmsterdam">25+</span>
            <h3 class="text-[1.2rem] font-semibold pr-[10px] font-ptSans">Yıllık Tecrübe</h3>
          </div>
          <div class="flex flex-col justify-center items-center">
            <span class="text-[3rem] max-h-[60px] text-main dark:text-third font-newAmsterdam">20+</span>
            <h3 class="text-[1.2rem] font-semibold pr-[10px] font-ptSans">Uzman Personel</h3>
          </div>
          <div class="flex flex-col justify-center items-center">
            <span class="text-[3rem] max-h-[60px] text-main dark:text-third font-newAmsterdam">5500+</span>
            <h3 class="text-[1.2rem] font-semibold pr-[10px] font-ptSans">Başarılı Taşıma</h3>
          </div>
          <div class="flex flex-col justify-center items-center">
            <span class="text-[3rem] max-h-[60px] text-main dark:text-third font-newAmsterdam">5448+</span>
            <h3 class="text-[1.2rem] font-semibold pr-[10px] font-ptSans">Mutlu Müşteri</h3>
          </div>
        </div>
      </div>
      <!-- Our Vision & Mission -->
      <div class="fade-in w-full lg:flex-col flex gap-[30px] justify-between items-center p-[20px] pt-0">
        <div class="relative w-[500px] h-[500px] lg:w-full lg:h-[400px] lg:p-[20px] p-[50px]">
          <div class="w-full h-full bg-main/20 rounded-lg lg:hidden"></div>
          <img class="absolute bottom-0 right-0 lg:relative lg:w-full lg:h-full w-[400px] h-[400px] object-cover rounded-lg" loading="lazy" src="/uploads/aboutUs2.jpg" alt="Vision And Mission">
        </div>
        <div class="lg:w-full lg:max-w-[100%] lg:min-h-0 flex flex-col gap-[40px] max-w-[50%] px-[40px] lg:p-[20px]">
            <p class="h-0 text-[1.2rem] font-bold text-third">Vizyonumuz & Misyonumuz</p>
            <h1 class="text-[3.2rem] xl:text-[2.5rem] lg:text-[2rem] sm:text-[1.5rem] font-bold pl-[24px] md:pl-0">Evyap Güvenilir Nakliye Firması</h1>
            <div class="relative flex flex-col gap-[10px] p-[10px] text-justify">
              <p>EVYAP Nakliyat olarak vizyonumuz, Türkiye’nin en güvenilir ve yenilikçi taşımacılık firmalarından biri olmaktır. Taşımacılık sektöründe kaliteyi en üst seviyeye çıkararak, teknolojik gelişmelere ayak uyduran ve müşteri memnuniyetini en üst düzeyde tutan bir hizmet anlayışı sunmayı hedefliyoruz. Şehir içi ve şehirler arası taşımacılıkta lider konumda olmak ve her müşterimize beklentilerinin ötesinde bir deneyim yaşatmak en büyük amacımızdır.</p>
              <p>Misyonumuz, müşterilerimize güvenli, hızlı ve ekonomik taşımacılık hizmetleri sunarak taşınma sürecini kolaylaştırmaktır. Her taşıma işlemini büyük bir titizlikle planlıyor, eşyaların güvenliğini sağlamak için en iyi ambalajlama ve taşıma tekniklerini kullanıyoruz. Tecrübeli ekibimizle, zamanında teslimat ve sorunsuz nakliye garantisi vererek müşterilerimizin taşınma sürecini stressiz ve konforlu bir hale getirmeye kararlıyız.</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .topWave {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      transform: rotate(180deg) scaleX(-1);
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%2317567676" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
      background-repeat: repeat-x;
      background-size: contain;
  }
  .dark .topWave {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%2317567676" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  }
  .bottomWave {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%2317567676" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
      background-repeat: repeat-x;
      background-size: contain;
  }
  .dark .bottomWave {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%2317567676" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  }
</style>