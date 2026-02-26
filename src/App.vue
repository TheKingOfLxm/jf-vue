<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentSlide = ref(0);
const isPaused = ref(false);
const isLoaded = ref([false, false, false]);
const progress = ref(0);
let autoPlayInterval = null;
let progressInterval = null;
let touchStartX = 0;
let touchEndX = 0;

const slides = [
    { image: '/images/home/首页头图 (1).jpg', title: '五十年技术积累', desc: '专业风机制造，品质保证' },
    { image: '/images/home/首页头图 (2).jpg', title: '打叶复烤风机', desc: '烟草行业专用设备' },
    { image: '/images/home/首页头图 (3).jpg', title: '离心风机系列', desc: '高效节能，运行稳定' }
];

const currentRoute = computed(() => {
    const path = route.path;
    if (path.includes('home') || path === '/') return 'home';
    if (path.includes('about')) return 'about';
    if (path.includes('products')) return 'products';
    if (path.includes('honors')) return 'honors';
    if (path.includes('order')) return 'order';
    return 'home';
});

const goToSlide = (index) => {
    if (index === currentSlide.value) return;
    currentSlide.value = index;
    resetAutoPlay();
};

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

const handleMouseEnter = () => {
    isPaused.value = true;
    clearInterval(autoPlayInterval);
    clearInterval(progressInterval);
};

const handleMouseLeave = () => {
    isPaused.value = false;
    startAutoPlay();
    startProgress();
};

const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
};

const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
        resetAutoPlay();
    }
};

const startProgress = () => {
    progress.value = 0;
    clearInterval(progressInterval);

    const duration = 5000;
    const interval = 50;
    const increment = (interval / duration) * 100;

    progressInterval = setInterval(() => {
        if (!isPaused.value) {
            progress.value += increment;
            if (progress.value >= 100) {
                progress.value = 0;
            }
        }
    }, interval);
};

const startAutoPlay = () => {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(nextSlide, 5000);
};

const resetAutoPlay = () => {
    progress.value = 0;
    clearInterval(autoPlayInterval);
    clearInterval(progressInterval);
    if (!isPaused.value) {
        startAutoPlay();
        startProgress();
    }
};

const handleImageLoad = (index) => {
    isLoaded.value[index] = true;
};

onMounted(() => {
    startAutoPlay();
    startProgress();
});

onUnmounted(() => {
    clearInterval(autoPlayInterval);
    clearInterval(progressInterval);
});
</script>

<template>
    <div id="app">
        <!-- 顶部区域 -->
        <header class="header">
            <div class="header-top">
                <div class="container">
                    <div class="header-left">
                        <img src="/logo.png" alt="京丰 logo" class="company-logo">
                        <div class="company-info">
                            <span class="company-name">京丰</span>
                            <span class="company-fullname">北京京丰通风设备有限公司</span>
                        </div>
                    </div>
                    <div class="header-right">
                        <span class="phone-icon">📞</span>
                        <span class="phone-label">咨询服务热线：</span>
                        <span class="phone-number">18810213381</span>
                    </div>
                </div>
            </div>
            <nav class="nav">
                <div class="nav-container">
                    <ul class="nav-list">
                        <li class="nav-item" :class="{ active: currentRoute === 'home' }">
                            <router-link to="/home">网站首页</router-link>
                        </li>
                        <li class="nav-item" :class="{ active: currentRoute === 'about' }">
                            <router-link to="/about">关于我们</router-link>
                        </li>
                        <li class="nav-item" :class="{ active: currentRoute === 'products' }">
                            <router-link to="/products">产品展示</router-link>
                        </li>
                        <li class="nav-item" :class="{ active: currentRoute === 'honors' }">
                            <router-link to="/honors">资质荣誉</router-link>
                        </li>
                        <li class="nav-item" :class="{ active: currentRoute === 'order' }">
                            <router-link to="/order">订货须知</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <!-- 轮播图区域 -->
        <section
            class="banner"
            :class="{ paused: isPaused }"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
        >
            <div class="banner-slider">
                <div
                    v-for="(slide, index) in slides"
                    :key="index"
                    class="banner-item"
                    :class="{ active: currentSlide === index, loaded: isLoaded[index] }"
                >
                    <div class="banner-image-wrapper">
                        <img
                            :src="slide.image"
                            :alt="slide.title"
                            @load="handleImageLoad(index)"
                        >
                    </div>
                    <div class="banner-caption" style="display: none;">
                        <h2>{{ slide.title }}</h2>
                        <p>{{ slide.desc }}</p>
                    </div>
                </div>
            </div>
            <div class="banner-progress">
                <div
                    v-for="(_, index) in slides"
                    :key="index"
                    class="progress-bar"
                    :class="{ active: currentSlide === index }"
                    :style="{ '--progress': currentSlide === index ? progress / 100 : 0 }"
                ></div>
            </div>
            <div class="banner-dots">
                <span
                    v-for="(_, index) in slides"
                    :key="index"
                    class="dot"
                    :class="{ active: currentSlide === index }"
                    @click="goToSlide(index)"
                ></span>
            </div>
            <div class="banner-arrows">
                <span class="arrow-prev" @click="prevSlide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </span>
                <span class="arrow-next" @click="nextSlide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </span>
            </div>
        </section>

        <!-- 路由内容区域 -->
        <main class="main">
            <router-view></router-view>
        </main>

        <!-- 底部 -->
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-left">
                        <div class="footer-info-list">
                            <p><span class="info-label">电话微信：</span><span class="info-value">18810213381</span></p>
                            <p><span class="info-label">技术支持：</span><span class="info-value">18810213372</span></p>
                            <p><span class="info-label">邮箱：</span><span class="info-value">18810213381@126.com</span></p>
                            <p><span class="info-label">北京地址：</span><span class="info-value">北京市大兴区亦庄文化公园8号院35号楼1406室</span></p>
                            <p><span class="info-label">工厂地址：</span><span class="info-value">河北省张家口市宣化区东土关街39号</span></p>
                        </div>
                    </div>
                    <div class="footer-right">
                        <div class="footer-slogan">致诚精品，京丰风机</div>
                        <div class="qrcode">
                            <img src="/ewm.png" alt="微信二维码">
                        </div>
                        <p class="qrcode-tip">产品详情可微信扫码咨询</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>Copyright © 2026 北京京丰通风设备有限公司 版权所有 | 京ICP备XXXXXXXX号</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
</style>
