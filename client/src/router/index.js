import { createRouter, createWebHistory } from 'vue-router'
import { useHead } from '@unhead/vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'anasayfa',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: "Evden Eve Nakliyat | Profesyonel Taşımacılık Hizmetleri",
        description: "Evyap Nakliyat web sayfasına hoşgeldiniz.",
        keywords: "Evden Eve Nakliyat, Şehirler Arası Taşımacılık, Sigortalı Nakliyat, Profesyonel Taşıma"
      }
    },
    {
      path: '/hizmetler',
      name: 'hizmetler',
      component: () => import('../views/ServicesView.vue'),
      meta: {
        title: "Evyap - Hizmetlerimiz",
        description: "Evyap Nakliyat Hizmetlerimiz.",
        keywords: "Hizmetlerimiz, Asonsörlü Taşıma, Eşya Paketleme, Eşya Depolama, Şehirler Arası Ofis Taşımacılığı, Kurumsal Taşımacılık, Moda Evden Eve Naklie, Villa Taşıma Nakliyesi, Banka Taşıma, Mağaza Taşıma, Askılı Tekstil Taşıma, Ofis Taşıma Büro Nakliyesi,İstanbul Evden Eve Nakliyat,Ataşehir Evden Eve Nakliyat,"
      }
    },
    {
      path: '/hakkinda',
      name: 'hakkinda',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "Hakkımızda | Evypa Nakliyat Firması",
        description: "Evyap Nakliyat Hakkımızda.",
        keywords: "Nakliyat Firması, Güvenilir Nakliyat, Taşımacılık Şirketi, Evden Eve Nakliye, Hakkımızda, Biz, Vizyon, Misyon"
      }
    },
    {
      path: '/iletisim',
      name: 'iletisim',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: "Evyap - İletişim",
        description: "Bizimle iletişime geçin.",
        keywords: "Nakliyat İletişim, Ev Taşıma Telefon, Nakliye Adres, Destek Hattı, İletişim, Telefon, E-posta, Adres, Nakliyat"
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
      meta: {
        title: "Evyap - 404",
        description: "Aradığınız sayfa bulunamadı.",
        keywords: "404 Hata, Sayfa Bulunamadı, Nakliyat Hizmetleri, Ev Taşıma"
      }
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta) {
    const title = to.meta.title;
    const description = to.meta.description;
    const keywords = to.meta.keywords;
    useHead({
      title: title || 'Evyap Nakliyat',
      meta: [
        {
          name: 'description',
          content: description || 'Hedefinize% 100 güvenli ulaşın Zaman çizelgenizi ve bütçenizi karşılayan hızlı ve güvenilir teslimat hizmeti.',
        },
        {
          name: 'keywords',
          content: keywords || 'Nakliyat, Ev, Ofis, Taşımacılık, Evyap',
        },
      ],
    });
  }
  next();
});

export default router
