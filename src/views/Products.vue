<script setup>
import { ref, computed } from 'vue';

// 一级分类（大类）
const categories = [
    { id: 1, name: '卷接机组风机' },
    { id: 2, name: '滤棒成型机组风机' },
    { id: 3, name: '进口卷烟机组风机' },
    { id: 4, name: '京丰电机（风机专用）' },
    { id: 5, name: '其它产品' }
];

const activeCategory = ref(1);

// 二级产品数据（包含图片和PDF链接）
// 基于实际目录结构: D:\jf物料\京丰物料1\京丰公司产品
const productsData = {
    // 卷接机组风机
    1: [
        {
            id: 'zj17',
            name: 'ZJ17卷接机组风机',
            image: '/images/products/卷接专业风机.jpg',
            previewPdf: '/products/03-ZJ  17卷烟机组风机/121-ZJ17卷接机组风机实物照片.pdf',
            manualPdf: '/products/03-ZJ  17卷烟机组风机/131-ZJ17卷接机组风机说明书.pdf',
            desc: '专为ZJ17卷接机组设计配套'
        },
        {
            id: 'zj116',
            name: 'ZJ116卷接机组风机',
            image: '/images/products/卷接专业风机.jpg',
            previewPdf: '/products/04-ZJ116卷烟机组风机/122-ZJ116卷接机组风机实物照片.pdf',
            manualPdf: '/products/04-ZJ116卷烟机组风机/132-ZJ116卷接机组风机说明书.pdf',
            desc: '专为ZJ116卷接机组设计配套'
        },
        {
            id: 'zj118',
            name: 'ZJ118卷接机组风机',
            image: '/images/products/卷接专业风机.jpg',
            previewPdf: '/products/05-ZJ118卷烟机组风机/123-ZJ118卷接机组风机实物照片.pdf',
            manualPdf: '/products/05-ZJ118卷烟机组风机/133-ZJ118卷接机组风机说明书.pdf',
            desc: '专为ZJ118卷接机组设计配套'
        },
        {
            id: 'zj119',
            name: 'ZJ119卷接机组风机',
            image: '/images/products/卷接专业风机.jpg',
            previewPdf: '/products/06-ZJ119卷烟机组风机/124-ZJ119卷接机组风机实物照片.pdf',
            manualPdf: '/products/06-ZJ119卷烟机组风机/134-ZJ119卷接机组风机说明书.pdf',
            desc: '专为ZJ119卷接机组设计配套'
        }
    ],
    // 滤棒成型机组风机
    2: [
        {
            id: 'zl28',
            name: 'ZL28、ZL48滤棒成型机风机',
            image: '/images/products/制丝专业风机.jpg',
            previewPdf: '/products/07-滤棒成型机组风机/125-ZL28、ZL48滤棒成型机风机实物照片.pdf',
            manualPdf: '/products/07-滤棒成型机组风机/135-ZL26A滤棒成型机负压风机说明书.pdf',
            desc: '适用于ZL28、ZL48滤棒成型机'
        },
        {
            id: 'zl26a',
            name: 'ZL26A滤棒成型机负压风机',
            image: '/images/products/制丝专业风机.jpg',
            previewPdf: '/products/07-滤棒成型机组风机/125-ZL28、ZL48滤棒成型机风机实物照片.pdf',
            manualPdf: '/products/07-滤棒成型机组风机/135-ZL26A滤棒成型机负压风机说明书.pdf',
            desc: '负压系统专用，稳定高效'
        },
        {
            id: 'kdf2',
            name: 'KDF2滤棒成型机风机',
            image: '/images/products/制丝专业风机.jpg',
            previewPdf: '/products/07-滤棒成型机组风机/125-ZL28、ZL48滤棒成型机风机实物照片.pdf',
            manualPdf: '/products/07-滤棒成型机组风机/141-KDF2滤棒成型机风机说明书.pdf',
            desc: '适用于KDF2滤棒成型机'
        }
    ],
    // 进口卷烟机组风机
    3: [
        {
            id: 'gd121',
            name: 'GD121卷接机组风机',
            image: '/images/products/卷接专业风机.jpg',
            previewPdf: '/products/02-卷接机组风机总览/120卷烟机风机样机展示.pdf',
            manualPdf: '/products/08-进口卷烟机组风机/136-GD121卷接机组风机说明书.pdf',
            desc: '进口GD121卷接机组配套风机'
        }
    ],
    // 京丰电机（风机专用）
    4: [
        {
            id: 'fengleng',
            name: '京丰风冷电机（风机专用）',
            image: '/images/products/其他烟机设备.jpg',
            previewPdf: '/products/02-卷接机组风机总览/120卷烟机风机样机展示.pdf',
            manualPdf: '/products/09-京丰电机（风机专用）/京丰风冷电机(风机专用)说明书.pdf',
            desc: '专为风机设计的专用电机'
        },
        {
            id: 'shuileng15',
            name: '京丰水冷电机（15kW）',
            image: '/products/09-京丰电机（风机专用）/京丰水冷电机（15kW）.jpg',
            previewPdf: null,
            manualPdf: '/products/09-京丰电机（风机专用）/京丰风冷电机(风机专用)说明书.pdf',
            desc: '15kW水冷电机'
        },
        {
            id: 'shuileng75',
            name: '京丰水冷电机（7.5kW）',
            image: '/products/09-京丰电机（风机专用）/京丰水冷电机（7.5kW）.jpg',
            previewPdf: null,
            manualPdf: '/products/09-京丰电机（风机专用）/京丰风冷电机(风机专用)说明书.pdf',
            desc: '7.5kW水冷电机'
        },
        {
            id: 'fengleng75',
            name: '京丰风冷电机（7.5kW）',
            image: '/products/09-京丰电机（风机专用）/京丰风冷电机（7.5kW）.jpg',
            previewPdf: null,
            manualPdf: '/products/09-京丰电机（风机专用）/京丰风冷电机(风机专用)说明书.pdf',
            desc: '7.5kW风冷电机'
        }
    ],
    // 其它产品
    5: [
        {
            id: 'jf04',
            name: 'JF04 加香加料装置',
            image: '/images/products/其他烟机设备.jpg',
            previewPdf: '/products/02-卷接机组风机总览/120卷烟机风机样机展示.pdf',
            manualPdf: '/products/10-京丰烟机（其它产品）/JF04-加香加料装置.pdf',
            desc: '精准控制，提高加料均匀性'
        },
        {
            id: 'jf05',
            name: 'JF05 电子皮带秤',
            image: '/images/products/其他烟机设备.jpg',
            previewPdf: '/products/02-卷接机组风机总览/120卷烟机风机样机展示.pdf',
            manualPdf: '/products/10-京丰烟机（其它产品）/JF05-电子皮带秤.pdf',
            desc: '高精度计量，稳定可靠'
        },
        {
            id: 'jf06',
            name: 'JF06 LED电子标牌系统',
            image: '/images/products/其他烟机设备.jpg',
            previewPdf: '/products/02-卷接机组风机总览/120卷烟机风机样机展示.pdf',
            manualPdf: '/products/10-京丰烟机（其它产品）/JF06-Led电子标牌系统.pdf',
            desc: '现场工业显示，清晰直观'
        },
        {
            id: 'jf07',
            name: 'JF07 桁架式储柜',
            image: '/images/products/其他烟机设备.jpg',
            previewPdf: '/products/02-卷接机组风机总览/120卷烟机风机样机展示.pdf',
            manualPdf: '/products/10-京丰烟机（其它产品）/JF07-桁架式储柜.pdf',
            desc: '大容量存储，自动化控制'
        }
    ]
};

const currentProducts = computed(() => {
    return productsData[activeCategory.value] || [];
});

const openPdf = (pdfPath) => {
    if (pdfPath) {
        window.open(pdfPath, '_blank');
    }
};

const handleImageClick = (product) => {
    // 如果有预览PDF，先打开预览
    if (product.previewPdf) {
        openPdf(product.previewPdf);
    }
    // 同时也打开说明书
    openPdf(product.manualPdf);
};

const getCategoryName = () => {
    const cat = categories.find(c => c.id === activeCategory.value);
    return cat ? cat.name : '';
};
</script>

<template>
    <div class="container">
        <section class="section products-page">
            <div class="section-header">
                <h2 class="section-title">产品展示 <span>PRODUCTS</span></h2>
                <span class="title-line"></span>
            </div>

            <!-- 一级分类：大类 -->
            <div class="category-level-1">
                <h3 class="level-title">产品分类</h3>
                <div class="category-tabs">
                    <button
                        v-for="category in categories"
                        :key="category.id"
                        :class="{ active: activeCategory === category.id }"
                        @click="activeCategory = category.id"
                        class="category-tab-btn"
                    >
                        {{ category.name }}
                    </button>
                </div>
            </div>

            <!-- 二级产品展示：具体机型 + 图片 -->
            <div class="category-level-2">
                <h3 class="level-title">
                    {{ getCategoryName() }}
                    <span class="level-subtitle">- 点击图片查看实物照片，点击按钮查看说明书</span>
                </h3>
                <div class="products-grid">
                    <div
                        v-for="product in currentProducts"
                        :key="product.id"
                        class="product-card"
                    >
                        <div
                            class="product-image-wrapper"
                            @click="handleImageClick(product)"
                            title="点击查看实物照片"
                        >
                            <img
                                :src="product.image"
                                :alt="product.name"
                                class="product-image"
                                @error="$event.target.src='/images/products/default-product.jpg'"
                            />
                            <div class="product-overlay">
                                <span class="view-icon">📄</span>
                                <span class="view-text">点击查看详情</span>
                            </div>
                        </div>
                        <div class="product-details">
                            <h4 class="product-name">{{ product.name }}</h4>
                            <p class="product-desc">{{ product.desc }}</p>
                            <button
                                @click.stop="openPdf(product.manualPdf)"
                                class="manual-btn"
                            >
                                查看PDF说明书
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
/* 一级分类样式 */
.category-level-1 {
    margin-bottom: 35px;
    padding: 25px;
    background: var(--white);
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.level-title {
    font-size: 16px;
    color: var(--text-dark);
    margin-bottom: 15px;
    font-weight: 600;
    text-align: left;
}

.level-subtitle {
    font-size: 13px;
    color: var(--text-light);
    font-weight: normal;
    margin-left: 0;
}

.category-tabs {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.category-tab-btn {
    padding: 10px 22px;
    background-color: #f8f9fa;
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
    color: var(--text-dark);
    font-weight: 500;
}

.category-tab-btn:hover {
    background-color: var(--primary-color);
    color: var(--white);
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(26, 95, 138, 0.2);
}

.category-tab-btn.active {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: var(--white);
    box-shadow: 0 3px 10px rgba(26, 95, 138, 0.3);
}

/* 二级产品展示样式 */
.category-level-2 {
    animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
}

.product-card {
    background: var(--white);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    border-color: var(--accent-color);
}

.product-image-wrapper {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    cursor: pointer;
    background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.product-card:hover .product-image {
    transform: scale(1.1);
}

.product-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(26, 95, 138, 0.9), rgba(232, 121, 42, 0.85));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    gap: 10px;
}

.product-card:hover .product-overlay {
    opacity: 1;
}

.view-icon {
    font-size: 36px;
}

.view-text {
    color: var(--white);
    font-size: 14px;
    font-weight: 500;
}

.product-details {
    padding: 20px;
    text-align: center;
}

.product-name {
    font-size: 16px;
    color: var(--text-dark);
    margin-bottom: 10px;
    font-weight: 600;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-desc {
    font-size: 13px;
    color: var(--text-gray);
    margin-bottom: 15px;
    line-height: 1.5;
}

.manual-btn {
    padding: 8px 20px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: var(--white);
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 13px;
    transition: all 0.3s ease;
}

.manual-btn:hover {
    background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(232, 121, 42, 0.4);
}

/* 响应式设计 */
@media (max-width: 1200px) {
    .products-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 992px) {
    .products-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .category-tabs {
        justify-content: center;
    }

    .products-grid {
        grid-template-columns: 1fr;
    }

    .level-title {
        font-size: 18px;
    }

    .level-subtitle {
        display: block;
        margin-left: 0;
        margin-top: 5px;
    }
}
</style>
