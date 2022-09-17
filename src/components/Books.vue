<template>
  <div class="in-books">
    <div class="container">
      <header class="header">
        <div class="header-block">
          <router-link
            class="header_link"
            to="/"
          >
            <img
              class="header_icon"
              src="../assets/image/prev.png"
              alt="Назад"
            />
            <span class="header_text">Назад</span>
          </router-link>
        </div>

      </header>
      <div class="big-title">
        <h2>В мире книг</h2>
      </div>
      <main class="main">
        <draggable
          v-model="books"
          class="books"
          group="books"
        >
            <div
              v-for="book in books"
              :key="book.id"
              class="books-block books-block_hover"
            >
              <div class="books-block_drag">
                <app-svg icon-name="write">
                  <icon-drag />
                </app-svg>
              </div>

              <img
                class="books-block_img"
                :src="require(`@/assets/image/books/${book.img}`)"
                alt="Книга"
              >
            </div>
        </draggable>
        <div class="columns">
          <div class="explanations">
            <span class="explanations-text">Жанры фольклора</span>
            <span class="explanations-text">Не являются жанрами фольклора</span>
          </div>
          <div class="empty-blocks_columns">
            <draggable
              v-model="genres"
              group="books"
              class="empty-blocks"
            >

              <div
                v-for="book in genres"
                :key="book.id"
                class="book-block"
                :class="{'checked-book-block': book.checked, 'warn-book-block': book.warn}"
                v-if="genres.length !== 0"
              >
                <div class="books-block">
                  <div class="books-block_drag">
                    <app-svg icon-name="write">
                      <icon-drag />
                    </app-svg>
                  </div>
                  <img
                    class="books-block_img"
                    :src="require(`@/assets/image/books/${book.img}`)"
                    alt="Книга"
                  >
                </div>
                <div class="checked-book">
                  <img src="../assets/image/check.png" alt="Верно" class="checked-book_img" :class="{checked: book.checked}">
                  <img src="../assets/image/warn.png" alt="Неверно" class="checked-book_img" :class="{warn: book.warn}">
                </div>
              </div>
              <div v-if="genres.length === 0" class="empty-block"></div>
              <div v-if="genres.length <= 1" class="empty-block"></div>
              <div v-if="genres.length <= 2" class="empty-block"></div>
              <div v-if="genres.length <= 3" class="empty-block"></div>
              <div v-if="genres.length <= 4" class="empty-block"></div>
              <div v-if="genres.length <= 5" class="empty-block"></div>
            </draggable>
            <draggable
              v-model="noGenres"
              group="books"
              class="empty-blocks"
            >

              <div
                v-for="book in noGenres"
                :key="book.id"
                class="book-block"
                :class="{'checked-book-block': book.checked, 'warn-book-block': book.warn}"
                v-if="noGenres.length !== 0"
              >
                <div class="books-block">
                  <div class="books-block_drag">
                    <app-svg icon-name="write">
                      <icon-drag />
                    </app-svg>
                  </div>
                  <img
                    class="books-block_img"
                    :src="require(`@/assets/image/books/${book.img}`)"
                    alt="Книга"
                  >
                </div>
                <div class="checked-book">
                  <img src="../assets/image/check.png" alt="Верно" class="checked-book_img" :class="{checked: book.checked}">
                  <img src="../assets/image/warn.png" alt="Неверно" class="checked-book_img" :class="{warn: book.warn}">
                </div>
              </div>
              <div v-if="noGenres.length === 0" class="empty-block"></div>
              <div v-if="noGenres.length <= 1" class="empty-block"></div>
              <div v-if="noGenres.length <= 2" class="empty-block"></div>
              <div v-if="noGenres.length <= 3" class="empty-block"></div>
              <div v-if="noGenres.length <= 4" class="empty-block"></div>
              <div v-if="noGenres.length <= 5" class="empty-block"></div>
            </draggable>
          </div>
        </div>
      </main>
      <div class="checking-btn">
        <button
          @click="check"
          class="button"
        >
          Проверить
        </button>
      </div>

    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import AppSvg from '@/components/AppSvg.vue';
import IconDrag from './icons/IconDrag.vue';
import draggable from 'vuedraggable'

const books = [
  {
    id: 1,
    img: 'image-1.jpg',
    category: 'genres',
    checked: undefined,
    warn: undefined
  },
  {
    id: 2,
    img: 'image-2.jpg',
    category: 'genres',
    checked: undefined,
    warn: undefined
  },
  {
    id: 3,
    img: 'image-3.jpg',
    category: 'genres',
    checked: undefined,
    warn: undefined
  },
  {
    id: 4,
    img: 'image-4.jpg',
    category: 'no-genres',
    checked: undefined,
    warn: undefined
  },
  {
    id: 5,
    img: 'image-5.jpg',
    category: 'no-genres',
    checked: undefined,
    warn: undefined
  },
  {
    id: 6,
    img: 'image-6.jpg',
    category: 'no-genres',
    checked: undefined,
    warn: undefined
  },
];
export default {
  name: 'Books',
  components: {
    AppSvg,
    IconDrag,
    draggable
  },
  data() {
    return {
      books,
      genres: [],
      noGenres: []
    };
  },
  methods: {
    check() {
      let genres = this.genres
      let noGenres = this.noGenres

      const checkedGenres = genres.map(item => {
        if (item.category === 'genres') {
          item.checked = true
        }
        if (item.category !== 'genres') {
          item.warn = true
        }
      })
      const checkedNoGenres = noGenres.map(item => {
        if (item.category === 'no-genres') {
          item.checked = true
        }
        if (item.category !== 'no-genres') {
          item.warn = true
        }
      })
      return {checkedGenres, checkedNoGenres}
    }
  },
};

</script>

<style lang="scss">
.in-books {
  background-color: $light-grayish-green;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
}
.container {
  display: flex;
  flex-direction: column;
  margin: 0 13%;
  background-color: $white;
  @include breakpoint(1487px) {
    margin: 0 10%;
  }
  @include breakpoint(1192px) {
    margin: 0 8%;
  }
  @include mobile {
    margin: 0;
  }
}
.header {
  box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
  border-radius: 8px;
  width: 100%;

  &-block {
    display: inline-block;
  }

  &_link {
    display: flex;
    align-items: center;
    margin: 22px 0 22px 57px;
    text-decoration: none;
    @include tablet {
      margin: 12px 0 12px 37px;
    }
    @include breakpoint(430px) {
      margin: 5px 0 5px 10px;
    }

  }

  &_icon {
    width: 36px;
    height: 36px;
    margin-right: 8px;
    @include tablet {
      width: 24px;
      height: 24px;
      margin-right: 5px
    }
  }

  &_text {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    color: $moderate-green;
    @include tablet {
      font-size: 14px;
    }
  }
}
.big-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90deg, #3F8CFF 0.06%, #60B9A6 99.94%);
  box-shadow: 0px 14px 16px rgba(12, 110, 214, 0.25);
  border-radius: 24px;
  margin: 0 40px;
  @include desktop-min {
    margin: 0 15px;
  }

  & h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    display: flex;
    align-items: center;
    text-align: center;
    color: $white;
    padding: 40px 0;
    @include desktop-min {
      padding: 15px 0;
      line-height: 30px;
      font-size: 28px;
    }
    @include tablet {
      padding: 7px 0;
      line-height: 24px;
      font-size: 18px;
    }
  }
}
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 58px;
  gap: 0 48px;
  @include desktop-min {
    gap: 0 20px;
  }
  @include breakpoint(1487px) {
    margin: 0 40px;
  }
  @include breakpoint(1192px) {
    margin: 0 30px;
  }
  @include tablet {
    grid-template-columns: 1fr 2fr;
    margin: 0 20px 15px;
  }
  @include breakpoint(430px) {
    margin: 0 5px 5px;
    gap: 0 10px;
  }
}
.books {
  display: grid;
  justify-items: center;
  gap: 12px 48px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 280px);
  justify-content: space-between;
  margin-top: 89px;
  @include desktop-min {
    gap: 5px 20px;
  }
  @include breakpoint(1487px) {
    grid-template-rows: repeat(6, 186px);
  }
  @include breakpoint(1192px) {
    grid-template-rows: repeat(6, 124px);
    margin-top: 50px;
  }
  @include tablet {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 82px);
  }

  &-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
    border-radius: 12px;
    padding: 24px 24px 24px 12px;
    height: 100%;
    width: 100%;

    @include breakpoint(1487px) {
      padding: 16px;
    }
    @include breakpoint(1192px) {
      padding: 10px;
    }
    @include mobile {
      justify-content: flex-start;
    }
    @include breakpoint(370px) {
      padding: 3px;
    }

    &_hover:hover {
      border-left: 2px solid #0C6ED6;
      svg {
        color: $very-dark-blue;
      }
    }

    &_img {
      width: 163px;
      height: 232px;
      margin: 0 auto;

      @include breakpoint(1487px) {
        width: 108px;
        height: 154px;
      }
      @include breakpoint(1192px) {
        width: 72px;
        height: 102px;
      }
      @include tablet {
        width: 48px;
        height: 68px;
      }
      @include mobile {
        margin: 0;
      }
    }

    &_drag {
      width: 20px;
      height: 20px;
      margin-right: 37px;
      svg {
        color: #B0B2C1;
        @include breakpoint(1192px) {
          width: 10px;
          height: 10px;
        }
      }
      @include desktop-min {
        margin-right: 12px;
      }
      @include breakpoint(370px) {
        margin: 0;
      }
      @include breakpoint(310px) {
        width: 12px;
      }
    }
  }
}
.book-block {
  position: relative;
  width: 100%;
}

.empty-blocks {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 280px);
  justify-items: center;
  gap: 12px 48px;
  justify-content: space-between;
  height: 100%;
  @include desktop-min {
    gap: 5px 20px;
  }
  @include breakpoint(1487px) {
    grid-template-rows: repeat(6, 186px);
  }
  @include breakpoint(1192px) {
    grid-template-rows: repeat(6, 124px);
    margin-top: 10px;
  }
  @include breakpoint(798px) {
    margin-top: 7px;
  }
  @include tablet {
    grid-template-rows: repeat(6, 82px);
  }

  &_columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 48px;
    @include desktop-min {
      gap: 12px 20px;
    }
    @include breakpoint(430px) {
      gap: 12px 10px;
    }
  }
}
.empty-block {
  width: 100%;
  height: 100%;
  background: $very-light-gray-2;
  border: 1px dashed #B0B2C1;
  border-radius: 12px;
}
.explanations {
  min-height: 44px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 0 48px;
  margin-top: 24px;
  @include desktop-min {
    gap: 0;
  }
  @include breakpoint(1192px) {
    min-height: 30px;
    margin-top: 10px;
  }
  @include breakpoint(798px) {
    margin-top: 7px;
  }

  &-text {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: $very-dark-blue;
    @include breakpoint(1192px) {
      grid-template-rows: repeat(6, 124px);
      font-size: 12px;
      line-height: 14px;
    }
    @include tablet {
      font-size: 9px;
      line-height: 12px;
    }
  }
}

.checking-btn {
  margin-bottom: 32px;
  margin-left: 57px;
  @include breakpoint(750px) {
    margin-bottom: 16px;
    margin-left: 28px;
  }
  @include mobile {
    margin: 0;
  }
}

.footer {
  width: 100%;
  min-height: 264px;
  background: url("../assets/image/footer.png") no-repeat top right;
  background-size: contain;
  @include breakpoint(1192px) {
    min-height: 170px;
  }
  @include tablet {
    min-height: 130px;
  }
}

.checked-book {
  position: absolute;
  top: 8px;
  right: 8px;

  &-block {
    border-left: 2px solid #46B755;
    box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
    border-radius: 12px;
  }

  &_img {
    display: none;
    width: 16px;
    height: 16px;

    @include tablet {
      width: 10px;
      height: 10px;
    }
  }
}
.checked {
  display: block;
}
.warn {
  display: block;

  &-book-block {
    border-left: 2px solid #F93232;
    box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
    border-radius: 12px;
  }
}
.columns {
  height: 100%;
  display: grid;
}
</style>
