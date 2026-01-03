<script setup>
import { ref } from 'vue';

const cultures = [
    { icon: '🎯', title: '企业使命', desc: '为客户提供高品质的通风设备和解决方案' },
    { icon: '💎', title: '核心价值观', desc: '致诚精品，质量至上；创新发展，追求卓越' },
    { icon: '🚀', title: '发展愿景', desc: '成为国内领先、国际知名的通风设备制造商' },
    { icon: '🤝', title: '服务理念', desc: '以客户为中心，提供全方位专业服务' }
];

const history = [
    { year: '1969', title: '公司成立', desc: '北京京丰通风设备有限公司成立' },
    { year: '1985', title: '技术突破', desc: '成功研发第一代打叶复考风机' },
    { year: '1998', title: '规模扩大', desc: '搬迁至新厂房，生产规模扩大三倍' },
    { year: '2010', title: '市场领先', desc: '国内烟草市场占有率达到90%以上' },
    { year: '2024', title: '创新发展', desc: '拥有200余种风机产品类型' }
];
</script>

<template>
    <div class="container">
        <section class="section about-section">
            <div class="section-header">
                <h2 class="section-title">公司简介 <span>COMPANY PROFILE</span></h2>
                <span class="title-line"></span>
            </div>
            <div class="about-content">
                <div class="about-image">
                    <img src="https://picsum.photos/600/400?random=50" alt="公司图片">
                </div>
                <div class="about-text">
                    <p>北京京丰通风设备有限公司成立于1969年，是一家拥有五十余年历史的专业风机制造企业。公司坐落于北京市丰台区，占地面积30000平方米，建筑面积20000平方米，拥有现代化的生产车间和先进的检测设备。</p>
                    <p>公司专业研发、生产、销售打叶复考风机、离心风机、轴流风机、屋顶风机等系列产品，产品广泛应用于烟草、化工、冶金、电力、建筑等行业，是国内烟草行业通风设备的主要供应商，在国内烟草市场占有率高达90%以上。</p>
                    <p>五十年来，京丰始终秉承"致诚精品，京丰风机"的经营理念，坚持以质量求生存，以创新求发展，建立了完善的质量管理体系，通过了ISO9001国际质量体系认证。公司拥有经验丰富的技术团队和先进的研发能力，可根据客户需求提供定制化的通风解决方案。</p>
                </div>
            </div>
        </section>

        <section class="section culture-section">
            <div class="section-header">
                <h2 class="section-title">企业文化 <span>CORPORATE CULTURE</span></h2>
                <span class="title-line"></span>
            </div>
            <div class="culture-grid">
                <div class="culture-item" v-for="(item, index) in cultures" :key="index">
                    <div class="culture-icon">{{ item.icon }}</div>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.desc }}</p>
                </div>
            </div>
        </section>

        <section class="section history-section">
            <div class="section-header">
                <h2 class="section-title">发展历程 <span>HISTORY</span></h2>
                <span class="title-line"></span>
            </div>
            <div class="timeline">
                <div class="timeline-item" v-for="(item, index) in history" :key="index">
                    <div class="timeline-year">{{ item.year }}</div>
                    <div class="timeline-content">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
