<script setup>
const brandSections = [
    {
        title: '核心定位',
        subtitle: 'Core Expertise',
        image: '/images/brand/image2.jpeg',
        content: '京丰深耕烟草加工中的干燥、通风、除尘及排潮关键工序，通过深度定制的离心式、轴流式及防爆风机，确保卷烟生产过程中的风量、风压及温湿度控制达到严苛的工艺指标。凭借在风机领域超过五十年的技术积累与持续创新，公司已从单一的设备供应商，成长为能够为烟草加工全流程（从制丝到卷接包）提供定制化通风、除尘及工艺风机解决方案的合作伙伴。',
        services: [
            { name: '干燥工艺', desc: '提供高效、稳定的排潮风机，确保烟叶干燥均匀' },
            { name: '通风系统', desc: '为车间环境控制提供轴流式、离心式通风风机' },
            { name: '除尘净化', desc: '生产防爆型除尘风机，满足烟草粉尘环境的安全要求' }
        ]
    },
    {
        title: '研发创新与技术积淀',
        subtitle: 'R&D Excellence',
        image: '/images/brand/image3.jpeg',
        content: '京丰的技术核心源于多年的烟草自动化设备研发经验。公司总经理张学武先生（1988年毕业于内蒙古工业大学自动化专业，工学学士）对自动化与电机技术数十年的深耕。在张学武先生的带领下，公司研发团队始终与烟草工艺前沿需求同步，实现了一系列从配套设备到核心风机的自主研发突破。',
        milestones: [
            { year: '2001-2008', period: '奠基与探索', desc: '从电子皮带秤、加香加料装置到LED电子标牌系统，深度参与烟草生产线自动化升级' },
            { year: '2017-2020', period: '战略聚焦与扩张', desc: '并购北京市京丰通风设备有限公司，在张家口宣化建立现代化生产基地' },
            { year: '2021-2023', period: '创新引领', desc: '推出风机免维护传动组件，开发高耐腐、高可靠性的不锈钢专用风机' }
        ]
    },
    {
        title: '制造实力与品质保障',
        subtitle: 'Manufacturing & Quality',
        image: '/images/brand/image4.jpeg',
        content: '京丰在张家口宣化区拥有现代化的精密制造基地，通过数字化加工与严苛检测，确保每一台设备在复杂工况下的长期稳定性。',
        capabilities: [
            { name: '多轴联动', desc: '拥有五轴加工中心、立式加工中心等核心设备' },
            { name: '柔性制造', desc: '数字化激光切割、四柱液压成型及高精度数控车床' },
            { name: '工业级检测', desc: '严格执行GB/T19001-2016/ISO9001:2015质量管理体系' }
        ]
    },
    {
        title: '合作生态与全球足迹',
        subtitle: 'Global Footprint',
        image: '/images/brand/image5.jpeg',
        content: '京丰已建立起覆盖全国、辐射全球的服务网络，是烟草工业供应链中值得信赖的合作伙伴。产品已成功进入俄罗斯、土耳其、迪拜、巴西、印尼、越南等十余个国家，在国际烟草加工领域树立了"中国制造"的精密品牌形象。'
    },
    {
        title: '核心客户群',
        subtitle: 'Core Customers',
        image: '/images/brand/image6.jpeg',
        content: '深度服务各类烟草企业，参与多家新厂建设的通风系统集成。',
        customers: [
            { type: '科研及设计机构', desc: '郑州烟草研究院、兵器工业部五院、四川/合肥轻工业设计研究院' },
            { type: '主机配套伙伴', desc: '长期配套常德烟机、秦皇岛烟机、许昌烟机等核心烟机制造企业' },
            { type: '全系卷烟厂覆盖', desc: '业务遍布上海、北京、天津、常德、曲靖、昭通、延吉等全国主流卷烟厂及复烤厂' }
        ]
    },
    {
        title: '我们的品牌承诺',
        subtitle: 'Our Promise',
        image: '/images/brand/image7.jpeg',
        content: '京丰始终坚持以客户为中心，为烟草加工企业提供全方位的风机解决方案和专业服务，致力于成为行业最值得信赖的合作伙伴。',
        promises: [
            { name: '定制化响应', desc: '针对不同工艺流程（制丝、卷包、膨胀）提供专属风机参数匹配' },
            { name: '运行稳定性', desc: '关注风机长周期运行表现，通过免维护设计降低企业运维成本' },
            { name: '专业化咨询', desc: '为卷烟厂新旧动能转换及生产线改造提供专业通风设计建议' }
        ]
    }
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
                    <p>北京市京丰通风设备有限公司（以下简称京丰）是一家专注于烟草工业通风与工艺装备领域的高新技术企业，致力于为国内外烟草加工企业提供高效、可靠、定制化的工业风机及相关系统解决方案。</p>
                    <p>多年来对产品不断深入的研究，增加了企业的活力，为全国烟草行业客户提供了大量先进、可靠、安全、高质量的产品和系统集成服务。公司成功研发几十项技术专利和软件著作权，形成自动监控可调节风机系统、高精度在线式加香加料装置、LED电子标签系统等一系列产品。</p>
                    <p>北京京丰拥有北京市技术改造优秀项目二等奖、国家星火科技二等奖，获得ISO质量、环境、职业健康、信息技术服务、信息安全等多项管理体系认证，是行业制造战略联盟会员单位。公司与秦皇岛烟草机械有限责任公司、常德烟草机械有限责任公司等行业烟机厂家紧密合作，参与了许多重大项目，为全国卷烟厂、复烤厂打造中式卷烟做设备保障。</p>
                </div>
            </div>
        </section>

        <!-- 品牌详情 -->
        <section class="section brand-section">
            <div class="section-header">
                <h2 class="section-title">品牌详情 <span>BRAND STORY</span></h2>
                <span class="title-line"></span>
            </div>

            <div class="brand-intro">
                <img src="/images/brand/image1.jpeg" alt="京丰智造" class="brand-hero-img">
                <h3>京丰智造：50年如一初心，创新永不止步</h3>
            </div>

            <div class="brand-content" v-for="(section, index) in brandSections" :key="index">
                <div class="brand-header">
                    <h4>{{ section.title }}</h4>
                    <span class="brand-subtitle">{{ section.subtitle }}</span>
                </div>

                <div class="brand-body" :class="{ 'has-image': section.image }">
                    <div class="brand-text">
                        <p class="brand-desc">{{ section.content }}</p>

                        <!-- 服务领域 -->
                        <div v-if="section.services" class="service-list">
                            <div v-for="(service, i) in section.services" :key="i" class="service-item">
                                <span class="service-name">{{ service.name }}</span>
                                <span class="service-desc">{{ service.desc }}</span>
                            </div>
                        </div>

                        <!-- 发展里程碑 -->
                        <div v-if="section.milestones" class="milestone-list">
                            <div v-for="(milestone, i) in section.milestones" :key="i" class="milestone-item">
                                <span class="milestone-year">{{ milestone.year }}</span>
                                <div class="milestone-content">
                                    <span class="milestone-period">{{ milestone.period }}</span>
                                    <p class="milestone-desc">{{ milestone.desc }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- 制造能力 -->
                        <div v-if="section.capabilities" class="capability-list">
                            <div v-for="(cap, i) in section.capabilities" :key="i" class="capability-item">
                                <span class="capability-name">{{ cap.name }}</span>
                                <span class="capability-desc">{{ cap.desc }}</span>
                            </div>
                        </div>

                        <!-- 核心客户群 -->
                        <div v-if="section.customers" class="customer-list">
                            <div v-for="(customer, i) in section.customers" :key="i" class="customer-item">
                                <span class="customer-type">{{ customer.type }}</span>
                                <span class="customer-desc">{{ customer.desc }}</span>
                            </div>
                        </div>

                        <!-- 品牌承诺 -->
                        <div v-if="section.promises" class="promise-list">
                            <div v-for="(promise, i) in section.promises" :key="i" class="promise-item">
                                <span class="promise-name">{{ promise.name }}</span>
                                <span class="promise-desc">{{ promise.desc }}</span>
                            </div>
                        </div>
                    </div>

                    <div v-if="section.image" class="brand-image">
                        <img :src="section.image" :alt="section.title">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.brand-intro {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
    background: var(--white);
    border-radius: 8px;
}

.brand-hero-img {
    width: 70%;
    max-width: 700px;
    height: auto;
    border-radius: 8px;
    margin: 0 auto 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.brand-intro h3 {
    color: var(--primary-color);
    font-size: 22px;
    margin: 0;
    letter-spacing: 2px;
    font-weight: 600;
}

.brand-content {
    margin-bottom: 40px;
    padding: 30px;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border-radius: 12px;
    border: 1px solid var(--border-color);
}

.brand-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid var(--accent-color);
}

.brand-header h4 {
    font-size: 20px;
    color: var(--primary-color);
    margin: 0;
}

.brand-subtitle {
    color: var(--text-light);
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.brand-body {
    display: block;
}

.brand-body.has-image {
    display: flex;
    gap: 30px;
    align-items: flex-start;
}

.brand-text {
    flex: 1;
}

.brand-image {
    flex: 0 0 300px;
}

.brand-image img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.brand-desc {
    color: var(--text-gray);
    line-height: 2;
    margin-bottom: 20px;
}

.service-list,
.capability-list,
.customer-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
}

.service-item,
.capability-item,
.customer-item {
    padding: 20px;
    background: var(--white);
    border-radius: 8px;
    border-left: 3px solid var(--accent-color);
}

.service-name,
.capability-name,
.customer-type {
    display: block;
    font-size: 16px;
    color: var(--text-dark);
    font-weight: 600;
    margin-bottom: 8px;
}

.service-desc,
.capability-desc,
.customer-desc {
    font-size: 13px;
    color: var(--text-gray);
    line-height: 1.6;
}

.milestone-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}

.milestone-item {
    display: flex;
    gap: 20px;
    padding: 20px;
    background: var(--white);
    border-radius: 8px;
}

.milestone-year {
    flex: 0 0 120px;
    padding: 8px 15px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: var(--white);
    border-radius: 20px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    height: fit-content;
}

.milestone-period {
    display: block;
    font-size: 16px;
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 8px;
}

.milestone-desc {
    color: var(--text-gray);
    line-height: 1.6;
    margin: 0;
}

.promise-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
}

.promise-item {
    padding: 20px;
    background: var(--white);
    border-radius: 8px;
    border-left: 3px solid var(--accent-color);
}

.promise-name {
    display: block;
    font-size: 16px;
    color: var(--text-dark);
    font-weight: 600;
    margin-bottom: 8px;
}

.promise-desc {
    font-size: 13px;
    color: var(--text-gray);
    line-height: 1.6;
}

@media (max-width: 992px) {
    .brand-body.has-image {
        flex-direction: column;
    }

    .brand-image {
        flex: 0 0 auto;
        width: 100%;
    }

    .service-list,
    .capability-list,
    .customer-list,
    .promise-list {
        grid-template-columns: 1fr;
    }
}
</style>
