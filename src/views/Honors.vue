<script setup>
const certificates = [
    { name: '公司营业执照', image: '/images/honors/公司营业执照.jpg' },
    { name: '质量管理体系认证书', image: '/images/honors/certs/图片2.jpg' },
    { name: '环境管理体系认证书', image: '/images/honors/环境管理体系认证书.jpg' },
    { name: '职业健康安全管理体系认证书', image: '/images/honors/职业健康安全管理体系认证书.jpg' },
    { name: '质量管理认证书', image: '/images/honors/certs/图片3.jpg' },
    { name: '开户许可', image: '/images/honors/开户许可.jpg' }
];

const patents = [
    { image: '/images/honors/patents/伺服驱动高精度在线式加香加料装置.jpg' },
    { image: '/images/honors/patents/伺服驱动高精度在线式加香加料机（外观）.jpg' },
    { image: '/images/honors/patents/一种伺服加料泵系统.jpg' },
    { image: '/images/honors/patents/一种全机械自动皮带调偏机构.jpg' },
    { image: '/images/honors/patents/一种应用在液体加注装置中的多功能隔膜泵.jpg' },
    { image: '/images/honors/patents/专利名称：一种储丝储叶柜伺服电机减速机驱动系统.jpg' },
    { image: '/images/honors/patents/专利名称：一种皮带秤.jpg' }
];

const awards = [
    { name: '北京市技术改造优秀项目二等奖', desc: '获得北京市技术改造优秀项目二等奖' },
    { name: '国家星火科技二等奖', desc: '获得国家星火科技二等奖' },
    { name: 'ISO质量管理体系认证', desc: '通过ISO质量管理体系认证' },
    { name: '环境管理体系认证', desc: '通过环境管理体系认证' },
    { name: '职业健康管理体系认证', desc: '通过职业健康管理体系认证' },
    { name: '信息技术服务管理体系认证', desc: '通过信息技术服务管理体系认证' },
    { name: '信息安全管理体系认证', desc: '通过信息安全管理体系认证' }
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
                <div class="cert-gallery">
                    <div class="cert-item" v-for="(item, index) in certificates" :key="index">
                        <img :src="item.image" :alt="item.name">
                    </div>
                </div>
            </div>

            <!-- 专利技术 -->
            <div class="honors-section">
                <h3 class="subsection-title">专利技术</h3>
                <div class="patent-gallery">
                    <div class="patent-item" v-for="(item, index) in patents" :key="index">
                        <img :src="item.image" alt="专利证书">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
/* 资质证书 - 完整图片展示 */
.cert-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.cert-item {
    background: var(--white);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
}

.cert-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.cert-item img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
}

/* 专利技术 - 完整图片展示 */
.patent-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
}

.patent-item {
    background: var(--white);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
}

.patent-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.patent-item img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
}

/* 荣誉奖项 */
.awards-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.award-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border-radius: 8px;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.award-item:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    transform: translateX(5px);
}

.award-icon {
    font-size: 36px;
    flex: 0 0 auto;
}

.award-content {
    flex: 1;
}

.award-content h4 {
    font-size: 16px;
    color: var(--text-dark);
    margin-bottom: 5px;
}

.award-content p {
    font-size: 13px;
    color: var(--text-gray);
    line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 1200px) {
    .patent-gallery {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 992px) {
    .cert-gallery,
    .patent-gallery {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .cert-gallery,
    .patent-gallery {
        grid-template-columns: 1fr;
    }
}
</style>
