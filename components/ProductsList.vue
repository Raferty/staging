<template>
  <section class="products-list">
    <div class="product-card">
      <picture class="product-card__picture">
        <img
          src="/images/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_ 1.png"
          alt=""
        />
      </picture>
      <div class="product-card__info">
        <div class="product-card__about">
          <div class="product-card__name">
            Fjallraven - Foldsack No. 1 Backpack
          </div>
          <div class="product-card__category">men's clothing</div>
        </div>
        <div class="product-card__digit">
          <div class="product-card__price">$ 120</div>
        </div>
      </div>
    </div>
    <div class="product-card">
      <picture class="product-card__picture">
        <img
          src="/images/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_ 1.png"
          alt=""
        />
      </picture>
      <div class="product-card__info">
        <div class="product-card__about">
          <div class="product-card__name">
            Fjallraven - Foldsack No. 1 Backpack
          </div>
          <div class="product-card__category">men's clothing</div>
        </div>
        <div class="product-card__digit">
          <div class="product-card__price">$ 120</div>
        </div>
      </div>
    </div>
    <div class="product-card">
      <picture class="product-card__picture">
        <img
          src="/images/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_ 1.png"
          alt=""
        />
      </picture>
      <div class="product-card__info">
        <div class="product-card__about">
          <div class="product-card__name">
            Fjallraven - Foldsack No. 1 Backpack
          </div>
          <div class="product-card__category">men's clothing</div>
        </div>
        <div class="product-card__digit">
          <div class="product-card__price">$ 120</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.products-list {
  display: flex;
  gap: 32px;
}

.product-card {
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #111;

  &__picture {
    margin-bottom: 16px;
  }

  &__info {
    display: flex;
    justify-content: space-between;
  }

  &__name {
    font-weight: 600;
  }

  &__category {
    color: #757575;
  }

  &__price {
    font-weight: 600;
  }
}
</style>
