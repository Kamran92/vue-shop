<script setup lang="ts">
defineProps<{
  product: {
    main_image_thumb_300?: string;
    category?: { name?: string };
    present_name?: string;
    comment_name?: string;
    price?: string;
    allowed: boolean;
    available: boolean;
  };
}>();
</script>

<template>
  <section class="cart">
    <img
      v-if="product.main_image_thumb_300"
      class="cart__img"
      :src="product.main_image_thumb_300"
      :alt="product.present_name"
      width="276"
      height="276"
    />
    <div v-if="product.category?.name" class="cart__category">
      {{ product.category.name }}
    </div>
    <div v-if="product.present_name" class="cart__title">
      {{ product.present_name }}
    </div>
    <div v-if="product.comment_name" class="cart__description">
      {{ product.comment_name }}
    </div>
    <div class="cart__price">{{ product.price }} ₽</div>
    <button
      v-if="product.allowed && product.available"
      class="cart__btn cart__btn--add"
    >
      В корзину
    </button>
    <button v-else class="cart__btn cart__btn--empty">Нет в наличии</button>
  </section>
</template>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 23px;

  background: #ffffff;

  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
}

.cart__category {
  margin-top: 6px;

  color: #979797;
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
}

.cart__title {
  width: 232px;
  margin-top: 4px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
}

.cart__description {
  width: 232px;
  margin-top: 9px;

  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
}

.cart__price {
  margin-top: 14px;

  font-weight: 500;
  font-size: 26px;
  line-height: 24px;
  text-align: center;
}

.cart__btn {
  margin-top: 16px;

  font-weight: 500;
  font-size: 18px;
  font-style: normal;
  line-height: 24px;

  text-align: center;
}
.cart__btn--add {
  padding: 10px 66px;

  color: #ffffff;

  background: linear-gradient(270deg, #ffa800 0%, #ff6f00 100%);
  border-radius: 24px;
  cursor: pointer;
}

.cart__btn--empty {
  padding: 10px 50px;

  color: #27272780;

  background: #ffffff;
  border: 2px solid rgba(151, 151, 151, 0.3);
  border-radius: 24px;
  box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
}
</style>
