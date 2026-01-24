<script setup>
import { ref } from 'vue';

const showPreview = ref(false);
const previewImage = ref('');
const previewTitle = ref('');

const openPreview = (image, title) => {
    previewImage.value = image;
    previewTitle.value = title;
    showPreview.value = true;
    document.body.style.overflow = 'hidden';
};

const closePreview = () => {
    showPreview.value = false;
    document.body.style.overflow = '';
};

const certificates = [
    { name: '公司营业执照', desc: '企业法人营业执照', image: '/images/honors/公司营业执照.jpg' },
    { name: '质量管理体系认证书', desc: 'ISO9001质量管理体系认证', image: '/images/honors/certs/图片2.jpg' },
    { name: '环境管理体系认证书', desc: 'ISO14001环境管理体系认证', image: '/images/honors/环境管理体系认证书.jpg' },
    { name: '职业健康安全管理体系认证书', desc: 'OHSMS职业健康安全管理体系认证', image: '/images/honors/职业健康安全管理体系认证书.jpg' },
    { name: '质量管理认证书', desc: '质量管理体系认证证书', image: '/images/honors/certs/图片3.jpg' },
    { name: '开户许可', desc: '企业开户许可证', image: '/images/honors/开户许可.jpg' }
];

const awards = [
    { name: '北京市技术改造优秀项目二等奖', desc: '获得北京市技术改造优秀项目二等奖', year: '历年' },
    { name: '国家星火科技二等奖', desc: '获得国家星火科技二等奖', year: '历年' },
    { name: 'ISO质量管理体系认证', desc: '通过ISO质量管理体系认证', year: '历年' },
    { name: '环境管理体系认证', desc: '通过环境管理体系认证', year: '历年' },
    { name: '职业健康管理体系认证', desc: '通过职业健康管理体系认证', year: '历年' },
    { name: '信息技术服务管理体系认证', desc: '通过信息技术服务管理体系认证', year: '历年' },
    { name: '信息安全管理体系认证', desc: '通过信息安全管理体系认证', year: '历年' }
];

const patents = [
    { name: '伺服驱动高精度在线式加香加料装置', image: '/images/honors/patents/伺服驱动高精度在线式加香加料装置.jpg' },
    { name: '伺服驱动高精度在线式加香加料机（外观）', image: '/images/honors/patents/伺服驱动高精度在线式加香加料机（外观）.jpg' },
    { name: '一种伺服加料泵系统', image: '/images/honors/patents/一种伺服加料泵系统.jpg' },
    { name: '一种全机械自动皮带调偏机构', image: '/images/honors/patents/一种全机械自动皮带调偏机构.jpg' },
    { name: '一种应用在液体加注装置中的多功能隔膜泵', image: '/images/honors/patents/一种应用在液体加注装置中的多功能隔膜泵.jpg' },
    { name: '一种储丝储叶柜伺服电机减速机驱动系统', image: '/images/honors/patents/专利名称：一种储丝储叶柜伺服电机减速机驱动系统.jpg' },
    { name: '一种皮带秤', image: '/images/honors/patents/专利名称：一种皮带秤.jpg' }
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
                    <div class="honor-card" v-for="(item, index) in certificates" :key="index" @click="openPreview(item.image, item.name)">
                        <div class="honor-img" style="cursor: pointer;">
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
                <div class="honors-grid">
                    <div class="honor-card" v-for="(item, index) in patents" :key="index" @click="openPreview(item.image, item.name)">
                        <div class="honor-img" style="cursor: pointer;">
                            <img :src="item.image" :alt="item.name">
                        </div>
                        <div class="honor-info">
                            <h4>{{ item.name }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 图片预览弹窗 -->
        <div v-if="showPreview" class="image-preview-overlay" @click="closePreview">
            <div class="image-preview-container" @click.stop>
                <button class="preview-close" @click="closePreview">&times;</button>
                <img :src="previewImage" :alt="previewTitle">
                <p class="preview-title">{{ previewTitle }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-preview-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.image-preview-container {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-preview-container img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.preview-close {
    position: absolute;
    top: -40px;
    right: 0;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 50%;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.preview-close:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
}

.preview-title {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    text-align: center;
}
</style>
