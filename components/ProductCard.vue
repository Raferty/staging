<template>
    <div class="product-card">
        <picture class="product-card__picture">
            <img :src="image" alt="">
        </picture>
        <div class="product-card__info">
            <div class="product-card__about">
                <div class="product-card__name">{{ title }}</div>
                <div class="product-card__category">{{ category }}</div>
            </div>
            <div class="product-card__digit">
                <div class="product-card__price">$ {{ price }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps ({
    title: String, 
    image: String, 
    category: String, 
    price: [String, Number],

})
</script>

<style lang="scss" scoped>
    .product-card {
        max-width: 460px;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid #111;

        &__pictire {
            margin-bottom: 16px;
            object-fit: contain;
        }

        &__info {
            display: flex;
            justify-content: space-between;
        }

        &__name {
            font-weight: 600;
        }

        &__category {
            color: 口#757575;
        }

        &__digit {
            display: flex;
            flex-direction: column; 
            justify-content: flex-end;
            width: 120px; 
            margin-left: 16px;
        }

        &__price {
            text-align: right; 
            font-weight: 600;
        }
    }
</style>