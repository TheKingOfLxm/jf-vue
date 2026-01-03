<script setup>
import { ref, computed } from 'vue';

const activeCategory = ref(0);
const categories = ['全部产品', '打叶复考风机', '离心风机', '轴流风机', '屋顶风机'];

const allProducts = [
    {
        category: 1,
        name: '打叶复考风机 DF-100',
        desc: '烟草行业专用设备，高效节能，运行稳定',
        image: 'https://picsum.photos/400/300?random=30',
        params: [
            { label: '风量', value: '10000-50000 m³/h' },
            { label: '功率', value: '5.5-45 kW' },
            { label: '噪音', value: '≤75 dB(A)' }
        ]
    },
    {
        category: 1,
        name: '打叶复考风机 DF-200',
        desc: '大流量设计，适用于大型烟草企业',
        image: 'https://picsum.photos/400/300?random=31',
        params: [
            { label: '风量', value: '20000-80000 m³/h' },
            { label: '功率', value: '11-90 kW' },
            { label: '噪音', value: '≤78 dB(A)' }
        ]
    },
    {
        category: 2,
        name: '离心风机 4-72',
        desc: '高效节能，广泛用于工业通风',
        image: 'https://picsum.photos/400/300?random=32',
        params: [
            { label: '风量', value: '1000-100000 m³/h' },
            { label: '全压', value: '200-3000 Pa' },
            { label: '效率', value: '≥85%' }
        ]
    },
    {
        category: 2,
        name: '离心风机 9-19',
        desc: '高压风机，适用于输送物料',
        image: 'https://picsum.photos/400/300?random=33',
        params: [
            { label: '风量', value: '800-60000 m³/h' },
            { label: '全压', value: '3000-15000 Pa' },
            { label: '效率', value: '≥82%' }
        ]
    },
    {
        category: 3,
        name: '轴流风机 T35',
        desc: '低噪音大风量，适用于一般通风',
        image: 'https://picsum.photos/400/300?random=34',
        params: [
            { label: '风量', value: '5000-50000 m³/h' },
            { label: '功率', value: '0.25-11 kW' },
            { label: '噪音', value: '≤70 dB(A)' }
        ]
    },
    {
        category: 4,
        name: '屋顶风机 DW-3',
        desc: '防腐耐用，安装方便',
        image: 'https://picsum.photos/400/300?random=35',
        params: [
            { label: '风量', value: '2000-20000 m³/h' },
            { label: '功率', value: '0.37-3 kW' },
            { label: '材质', value: '不锈钢/玻璃钢' }
        ]
    },
    {
        category: 4,
        name: '屋顶风机 DW-5',
        desc: '低噪音设计，适用于民用建筑',
        image: 'https://picsum.photos/400/300?random=36',
        params: [
            { label: '风量', value: '3000-30000 m³/h' },
            { label: '功率', value: '0.55-5.5 kW' },
            { label: '材质', value: '铝合金/不锈钢' }
        ]
    },
    {
        category: 3,
        name: '轴流风机 BT35',
        desc: '防爆型，适用于易燃易爆场所',
        image: 'https://picsum.photos/400/300?random=37',
        params: [
            { label: '风量', value: '3000-40000 m³/h' },
            { label: '功率', value: '0.37-7.5 kW' },
            { label: '防爆等级', value: 'Ex d IIB T4' }
        ]
    }
];

const filteredProducts = computed(() => {
    if (activeCategory.value === 0) return allProducts;
    return allProducts.filter(p => p.category === activeCategory.value);
});

const showDetail = (product) => {
    alert(product.name + '\n\n' + product.params.map(p => p.label + '：' + p.value).join('\n'));
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
                    <div class="product-img">
                        <img :src="product.image" :alt="product.name">
                        <div class="product-mask">
                            <a @click.prevent="showDetail(product)">查看详情</a>
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
