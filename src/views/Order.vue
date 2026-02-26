<script setup>
const orderSections = [
    {
        title: '一、订货方式',
        content: `
            <p>1. 现场订货：客户可直接到我公司销售部洽谈订货。</p>
            <p>2. 电话微信订货：拨打 18810213381 或添加微信咨询。</p>
            <p>3. 网络订货：通过网站在线留言或发送邮件至 18810213381@126.com。</p>
            <p>4. 技术支持：如需技术咨询，请致电 18810213372。</p>
        `
    },
    {
        title: '二、订货须知',
        content: `
            <p>1. 请明确所需风机型号、规格、数量及交货日期。</p>
            <p>2. 特殊规格产品，请提供详细技术参数或图纸。</p>
            <p>3. 订货时请注明风机材质要求（碳钢、不锈钢、玻璃钢等）。</p>
            <p>4. 如需配套电机、控制系统等，请提前说明品牌要求。</p>
            <p>5. 订货确认后，双方签订购销合同，需支付30%定金。</p>
        `
    },
    {
        title: '三、交货周期',
        content: `
            <p>1. 常规产品：订货确认后7-15个工作日。</p>
            <p>2. 定制产品：根据产品复杂程度，15-30个工作日。</p>
            <p>3. 紧急订单：可根据客户需求协商加急生产。</p>
            <p>4. 特大型产品：交货周期另行协商确定。</p>
        `
    },
    {
        title: '四、付款方式',
        content: `
            <p>1. 银行转账：订货时支付30%定金，发货前付清余款。</p>
            <p>2. 支持银行承兑汇票（需提前协商）。</p>
            <p>3. 货到付款：仅限老客户，需提前签订协议。</p>
        `
    },
    {
        title: '五、售后服务',
        content: `
            <p>1. 产品质保期为18个月，终身维护。</p>
            <p>2. 质保期内免费维修或更换零部件。</p>
            <p>3. 提供免费技术咨询和安装指导。</p>
            <p>4. 接到故障通知后48小时内响应处理。</p>
            <p>5. 定期回访，了解产品使用情况。</p>
        `
    }
];
</script>

<template>
    <div class="container">
        <section class="section order-page">
            <div class="section-header">
                <h2 class="section-title">订货须知 <span>ORDER INFO</span></h2>
                <span class="title-line"></span>
            </div>

            <div class="order-content">
                <div class="order-section" v-for="(section, index) in orderSections" :key="index">
                    <h3>{{ section.title }}</h3>
                    <div class="order-text" v-html="section.content"></div>
                </div>
            </div>
        </section>
    </div>
</template>
