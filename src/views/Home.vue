<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const products = [
    { name: '打叶复烤专业风机', desc: '烟草行业专用设备，高效节能', image: '/images/products/打叶复烤专业风机.jpg' },
    { name: '卷接专业风机', desc: '运行稳定，噪音低', image: '/images/products/卷接专业风机.jpg' },
    { name: '制丝专业风机', desc: '风量大，效率高', image: '/images/products/制丝专业风机.jpg' },
    { name: '其他烟机设备', desc: '安装方便，防腐耐用', image: '/images/products/其他烟机设备.jpg' }
];

const advantages = [
    { icon: '1', title: '技术先进', desc: '五十年技术积累，不断研发创新' },
    { icon: '2', title: '质量保证', desc: '严格的质量管理体系，确保品质' },
    { icon: '3', title: '价格合理', desc: '厂家直销，性价比高' },
    { icon: '4', title: '服务完善', desc: '专业售前售后服务团队' }
];

const goToProducts = () => {
    router.push('/products');
};
</script>

<template>
    <div class="container">
        <!-- 公司简介 -->
        <section class="section company-intro">
            <div class="intro-slogan">
                <h2 class="slogan-main">五十年技术积累，五十年砥砺前行</h2>
            </div>
            <div class="intro-description">
                <p>京丰通风设备有限公司成立于1969年，专业研发、生产、销售打叶复考风机等设备，服务各类烟草企业，在国内烟草市场占有率90%以上</p>
            </div>
            <div class="intro-stats">
                <div class="stat-item">
                    <div class="stat-number">100<span>+</span></div>
                    <div class="stat-label">生产研发200余种风机产品类型</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">50<span class="stat-unit">years</span></div>
                    <div class="stat-label">拥有50年风机制造经验</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">10<span>+</span></div>
                    <div class="stat-label">获得各类奖项专利10余项目</div>
                </div>
            </div>
        </section>

        <!-- 产品展示 -->
        <section class="section products">
            <div class="section-header">
                <h2 class="section-title">产品展示 <span>PRODUCTS</span></h2>
                <span class="title-line"></span>
            </div>
            <div class="product-list">
                <div class="product-item" v-for="(product, index) in products" :key="index">
                    <div class="product-img">
                        <img :src="product.image" :alt="product.name">
                        <div class="product-mask">
                            <router-link to="/products">查看详情</router-link>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3>{{ product.name }}</h3>
                        <p>{{ product.desc }}</p>
                    </div>
                </div>
            </div>
            <div class="section-center">
                <a href="#" @click.prevent="goToProducts" class="more-btn">更多产品 &gt;</a>
            </div>
        </section>

        <!-- 我们的优势 -->
        <section class="section advantages">
            <div class="section-header">
                <h2 class="section-title">我们的优势 <span>ADVANTAGES</span></h2>
                <span class="title-line"></span>
            </div>
            <div class="advantage-list">
                <div class="advantage-item" v-for="(advantage, index) in advantages" :key="index">
                    <div class="advantage-icon">{{ advantage.icon }}</div>
                    <h3>{{ advantage.title }}</h3>
                    <p>{{ advantage.desc }}</p>
                </div>
            </div>
        </section>
    </div>
</template>
