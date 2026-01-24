<script setup>
import { ref, computed } from 'vue';

const activeCategory = ref(0);

// 基于实际PDF文件结构的产品分类
const categories = [
    '全部产品',
    '卷接机组风机',
    'ZJ17卷烟机组风机',
    'ZJ116卷烟机组风机',
    'ZJ118卷烟机组风机',
    'ZJ119卷烟机组风机',
    '滤棒成型机组风机',
    '进口卷烟机组风机',
    '京丰电机（风机专用）',
    '其它产品'
];

// 产品数据（基于PDF文件列表）
const allProducts = [
    // 卷接机组风机总览
    {
        category: 1,
        name: '卷烟机组专用风机',
        desc: '适用于各类卷烟机组，专业配套设计',
        pdf: '101卷烟机组专用风机总览.pdf',
        image: '/images/products/卷接专业风机.jpg',
        params: [
            { label: '类型', value: '卷接机组专用' },
            { label: '应用', value: '烟草行业' }
        ]
    },
    {
        category: 1,
        name: '卷烟机组风机成套组件',
        desc: '成套供应，安装便捷，性能稳定',
        pdf: '102卷烟机组风机成套组件产品展示.pdf',
        image: '/images/products/卷接专业风机.jpg',
        params: [
            { label: '类型', value: '成套组件' },
            { label: '特点', value: '模块化设计' }
        ]
    },
    // ZJ17卷烟机组风机
    {
        category: 2,
        name: 'ZJ17卷接机组风机',
        desc: '专为ZJ17卷接机组设计配套',
        pdf: '131-ZJ17卷接机组风机说明书.pdf',
        image: '/images/products/卷接专业风机.jpg',
        params: [
            { label: '机型', value: 'ZJ17' },
            { label: '类型', value: '卷接机组风机' }
        ]
    },
    // ZJ116卷烟机组风机
    {
        category: 3,
        name: 'ZJ116卷接机组风机',
        desc: '专为ZJ116卷接机组设计配套',
        pdf: '132-ZJ116卷接机组风机说明书.pdf',
        image: '/images/products/卷接专业风机.jpg',
        params: [
            { label: '机型', value: 'ZJ116' },
            { label: '类型', value: '卷接机组风机' }
        ]
    },
    // ZJ118卷烟机组风机
    {
        category: 4,
        name: 'ZJ118卷接机组风机',
        desc: '专为ZJ118卷接机组设计配套',
        pdf: '133-ZJ118卷接机组风机说明书.pdf',
        image: '/images/products/卷接专业风机.jpg',
        params: [
            { label: '机型', value: 'ZJ118' },
            { label: '类型', value: '卷接机组风机' }
        ]
    },
    // ZJ119卷烟机组风机
    {
        category: 5,
        name: 'ZJ119卷接机组风机',
        desc: '专为ZJ119卷接机组设计配套',
        pdf: '134-ZJ119卷接机组风机说明书.pdf',
        image: '/images/products/卷接专业风机.jpg',
        params: [
            { label: '机型', value: 'ZJ119' },
            { label: '类型', value: '卷接机组风机' }
        ]
    },
    // 滤棒成型机组风机
    {
        category: 6,
        name: 'ZL28、ZL48滤棒成型机风机',
        desc: '适用于ZL28、ZL48滤棒成型机',
        pdf: '125-ZL28、ZL48滤棒成型机风机实物照片.pdf',
        image: '/images/products/制丝专业风机.jpg',
        params: [
            { label: '机型', value: 'ZL28/ZL48' },
            { label: '类型', value: '滤棒成型机风机' }
        ]
    },
    {
        category: 6,
        name: 'ZL26A滤棒成型机负压风机',
        desc: '负压系统专用，稳定高效',
        pdf: '135-ZL26A滤棒成型机负压风机说明书.pdf',
        image: '/images/products/制丝专业风机.jpg',
        params: [
            { label: '机型', value: 'ZL26A' },
            { label: '类型', value: '负压风机' }
        ]
    },
    {
        category: 6,
        name: 'KDF2滤棒成型机风机',
        desc: '适用于KDF2滤棒成型机',
        pdf: '141-KDF2滤棒成型机风机说明书.pdf',
        image: '/images/products/制丝专业风机.jpg',
        params: [
            { label: '机型', value: 'KDF2' },
            { label: '类型', value: '滤棒成型机风机' }
        ]
    },
    // 进口卷烟机组风机
    {
        category: 7,
        name: 'GD121卷接机组风机',
        desc: '进口GD121卷接机组配套风机',
        pdf: '136-GD121卷接机组风机说明书.pdf',
        image: '/images/products/卷接专业风机.jpg',
        params: [
            { label: '机型', value: 'GD121' },
            { label: '类型', value: '进口机组风机' }
        ]
    },
    // 京丰电机
    {
        category: 8,
        name: '京丰风冷电机（风机专用）',
        desc: '专为风机设计的专用电机',
        pdf: '京丰风冷电机(风机专用)说明书.pdf',
        image: '/images/products/其他烟机设备.jpg',
        params: [
            { label: '类型', value: '风冷电机' },
            { label: '用途', value: '风机专用' }
        ]
    },
    // 其它产品
    {
        category: 9,
        name: 'JF04 加香加料装置',
        desc: '精准控制，提高加料均匀性',
        pdf: 'JF04-加香加料装置.pdf',
        image: '/images/products/其他烟机设备.jpg',
        params: [
            { label: '型号', value: 'JF04' },
            { label: '类型', value: '加香加料装置' }
        ]
    },
    {
        category: 9,
        name: 'JF05 电子皮带秤',
        desc: '高精度计量，稳定可靠',
        pdf: 'JF05-电子皮带秤.pdf',
        image: '/images/products/其他烟机设备.jpg',
        params: [
            { label: '型号', value: 'JF05' },
            { label: '类型', value: '电子计量设备' }
        ]
    },
    {
        category: 9,
        name: 'JF06 LED电子标牌系统',
        desc: '现场工业显示，清晰直观',
        pdf: 'JF06-Led电子标牌系统.pdf',
        image: '/images/products/其他烟机设备.jpg',
        params: [
            { label: '型号', value: 'JF06' },
            { label: '类型', value: '电子标牌系统' }
        ]
    },
    {
        category: 9,
        name: 'JF07 桁架式储柜',
        desc: '大容量存储，自动化控制',
        pdf: 'JF07-桁架式储柜.pdf',
        image: '/images/products/其他烟机设备.jpg',
        params: [
            { label: '型号', value: 'JF07' },
            { label: '类型', value: '储柜设备' }
        ]
    }
];

const filteredProducts = computed(() => {
    if (activeCategory.value === 0) return allProducts;
    return allProducts.filter(p => p.category === activeCategory.value);
});

const showDetail = (product) => {
    // 在新窗口打开PDF说明书
    if (product.pdf) {
        window.open('/pdfs/' + product.pdf, '_blank');
    }
};

const openPdf = (product) => {
    showDetail(product);
};
</script>

<template>
    <div class="container">
        <section class="section products-page">
            <div class="section-header">
                <h2 class="section-title">产品展示 <span>PRODUCTS</span></h2>
                <span class="title-line"></span>
            </div>

            <!-- 产品分类 -->
            <div class="product-categories">
                <button
                    v-for="(category, index) in categories"
                    :key="index"
                    :class="{ active: activeCategory === index }"
                    @click="activeCategory = index"
                    class="category-btn"
                >
                    {{ category }}
                </button>
            </div>

            <!-- 产品列表 -->
            <div class="product-list-full">
                <div class="product-item-full" v-for="(product, index) in filteredProducts" :key="index">
                    <div class="product-img" @click="openPdf(product)" style="cursor: pointer;" title="点击查看说明书">
                        <img :src="product.image" :alt="product.name">
                        <div class="product-mask">
                            <a @click.stop.prevent="showDetail(product)">查看详情</a>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3>{{ product.name }}</h3>
                        <p>{{ product.desc }}</p>
                        <div class="product-params" v-if="product.params">
                            <div class="param-item" v-for="(param, i) in product.params" :key="i">
                                <span class="param-label">{{ param.label }}：</span>
                                <span class="param-value">{{ param.value }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
