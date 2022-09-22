<template>
  <div class="home">
    <div class="block">
      <h3 class="title">В мире книг</h3>
      <div class="info">
        <span class="info_title">
          Инструкция:
        </span>
        <p class="info_text">
          Распредели книги, ориентируясь на названия, по соответствующим рубрикам таблицы: «Жанры
          фольклора», «Не являются жанрами фольклора».
        </p>
      </div>
      <router-link
        to="/books"
        class="button"
      >
        Продолжить
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',

};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  background: $very-light-gray;
  width: 100%;
  height: 100%;
}

.block {
  display: flex;
  flex-direction: column;
  margin: 60px 20px;
  max-width: 1286px;
}

.title {
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: $moderate-green;
  margin-bottom: 36px;
}

.info {
  margin-bottom: 36px;
  border-top: 2px solid $moderate-green;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 20px 20px;
  padding: 22px 36px;

  &_title {
    display: block;
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: $very-dark-blue;
  }

  &_text {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: $very-dark-blue;
  }
}

.button {
  cursor: pointer;
  width: 205px;
  height: 46px;
  background: $moderate-green;
  border-radius: 24px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: $white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @include tablet {
    width: 155px;
    height: 40px;
  }
  @include breakpoint(750px) {
    width: 105px;
    height: 33px;
  }
  @include mobile {
    width: 100%;
  }
}
</style>
