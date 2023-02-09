<script setup lang="ts">
defineProps({
  linkImg: { type: String, required: true },
  categoryName: { type: String, default: () => "" },
  presentName: { type: String, default: () => "" },
  commentName: { type: String, default: () => "" },
  price: { type: Number, required: true },
  isBuy: { type: Boolean, required: true },
});
</script>

<template>
  <section class="cart">
    <img
      class="cart__img"
      :src="linkImg"
      :alt="presentName"
      width="276"
      height="276"
    />
    <div v-if="categoryName" class="cart__category">{{ categoryName }}</div>
    <div v-if="presentName" class="cart__title">{{ presentName }}</div>
    <div v-if="commentName" class="cart__description">{{ commentName }}</div>
    <div class="cart__price">{{ price }} ₽</div>
    <button v-if="isBuy" class="cart__btn cart__btn--add">В корзину</button>
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
