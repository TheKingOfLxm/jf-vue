<script setup>
import { ref } from 'vue';

const certificates = [
    { name: 'ISO9001质量管理体系认证', desc: '通过国际质量体系认证', image: 'https://picsum.photos/300/200?random=60' },
    { name: '全国工业产品生产许可证', desc: '具备风机制造资质', image: 'https://picsum.photos/300/200?random=61' },
    { name: '防爆产品合格证', desc: '防爆风机产品认证', image: 'https://picsum.photos/300/200?random=62' },
    { name: '环境管理体系认证', desc: 'ISO14001认证', image: 'https://picsum.photos/300/200?random=63' }
];

const awards = [
    { name: '中国烟草行业优秀供应商', desc: '连续十年获得烟草行业优秀供应商称号', year: '2023' },
    { name: '北京市高新技术企业', desc: '被认定为国家高新技术企业', year: '2020' },
    { name: '中国风机行业名牌产品', desc: '打叶复考风机获得名牌产品称号', year: '2019' },
    { name: '北京市科技创新奖', desc: '风机技术创新项目获奖', year: '2018' },
    { name: '中国机械工业科学技术奖', desc: '获得科技进步二等奖', year: '2017' },
    { name: '全国产品质量信誉保障企业', desc: '产品质量信誉保障认证', year: '2016' }
];

const patents = [
    { number: 'ZL2018XXXXXXXX', name: '一种高效低噪音打叶复考风机' },
    { number: 'ZL2019XXXXXXXX', name: '离心风机叶轮结构优化装置' },
    { number: 'ZL2020XXXXXXXX', name: '轴流风机防震安装结构' },
    { number: 'ZL2021XXXXXXXX', name: '屋顶风机防水密封装置' },
    { number: 'ZL2022XXXXXXXX', name: '风机智能控制系统' },
    { number: 'ZL2023XXXXXXXX', name: '防腐型风机涂层工艺' }
];
</script>

<template>
    <div class="container">
        <section class="section honors-page">
            <div class="section-header">
                <h2 class="section-title">资质荣誉 <span>HONORS</span></h2>
                <span class="title-line"></span>
            </div>

            <!-- 资质证书 -->
            <div class="honors-section">
                <h3 class="subsection-title">资质证书</h3>
                <div class="honors-grid">
                    <div class="honor-card" v-for="(item, index) in certificates" :key="index">
                        <div class="honor-img">
                            <img :src="item.image" :alt="item.name">
                        </div>
                        <div class="honor-info">
                            <h4>{{ item.name }}</h4>
                            <p>{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 荣誉奖项 -->
            <div class="honors-section">
                <h3 class="subsection-title">荣誉奖项</h3>
                <div class="awards-list">
                    <div class="award-item" v-for="(item, index) in awards" :key="index">
                        <div class="award-icon">🏆</div>
                        <div class="award-content">
                            <h4>{{ item.name }}</h4>
                            <p>{{ item.desc }}</p>
                            <span class="award-year">{{ item.year }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 专利技术 -->
            <div class="honors-section">
                <h3 class="subsection-title">专利技术</h3>
                <div class="patents-grid">
                    <div class="patent-item" v-for="(item, index) in patents" :key="index">
                        <div class="patent-number">{{ item.number }}</div>
                        <div class="patent-name">{{ item.name }}</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
