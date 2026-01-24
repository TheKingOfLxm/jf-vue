<script setup>
const cultures = [
    { icon: '🎯', title: '企业使命', desc: '以一流的服务、一流的技术和一流的产品，全心打造行业信息化的"瑞士军刀"' },
    { icon: '💎', title: '核心价值观', desc: '客户为尊、服务为荣、创意为先、技术为实' },
    { icon: '🚀', title: '发展愿景', desc: '通过开放式创新、卓越运营管理，用智能科技为用户插上腾飞的翅膀' },
    { icon: '🤝', title: '企业精神', desc: '共创、共享、共赢' }
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
                    <img src="/images/about/公司简介配图.png" alt="公司简介配图">
                </div>
                <div class="about-text">
                    <p>北京市京丰通风设备有限公司（以下简称北京京丰）位于首都北京，始创于1969年；是生产专业风机、在线添加设备、电子计量设备、现场工业显示设备及自动化系统集成的高科技技术企业。公司主要服务于烟草行业，是中国烟草交易中心会员。</p>
                    <p>多年来对产品不断深入的研究，增加了企业的活力，为全国烟草行业客户提供了大量先进、可靠、安全、高质量的产品和系统集成服务。公司成功研发几十项技术专利和软件著作权，形成自动监控可调节风机系统、高精度在线式加香加料装置、LED电子标签系统等一系列产品。</p>
                    <p>北京京丰拥有北京市技术改造优秀项目二等奖、国家星火科技二等奖，获得ISO质量、环境、职业健康、信息技术服务、信息安全等多项管理体系认证，是行业制造战略联盟会员单位。公司与秦皇岛烟草机械有限责任公司、常德烟草机械有限责任公司等行业烟机厂家紧密合作，参与了许多重大项目，为全国卷烟厂、复烤厂打造中式卷烟做设备保障。</p>
                    <p>北京京丰软硬件产品和系统集成方案应用于全国每一个省级行政区近200个城市，并在张家口设有专业生产基地，构筑了面向全国的经营和服务网络。公司始终秉承"客户为尊、服务为荣、创意为先、技术为实"的经营理念，恪守"共创、共享、共赢"的企业精神。</p>
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
