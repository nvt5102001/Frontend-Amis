<template>
  <div class="pagination__right-item">
    <div class="pagination__number__list">
        <div class="page__prev cursor-pointer " @click="prevPage"> Trước </div>
        <div class="cursor-pointer page-number" v-for="(Page, index) in arrShow" :key="index"
        :class="Page == this.pageNumber ? 'page-number-selected' : ''" @click="changePageNumber(Page)">
                {{ Page }}
        </div>

        <div class="page__next cursor-pointer" @click="nextPage"> Sau </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextPage() {
      this.$emit("nextPage");
    },
    prevPage() {
      this.$emit("prevPage");
    },
    changePageNumber(Page) {
      if (Page != "...") {
        this.selectedPage = Page;
        this.$emit("changePageNumber", this.selectedPage);
      }
    },
  },
  data() {
    return {
      numberPageDisplay: 3, 
    // số pageNumber được hiển thị ví dụ: hiển thị : < 1 2 … 10 > (gồm 3 số 1,2,10)
      selectedPage: 0, 
    };
  },
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
    maxPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    arrShow() {
      if (this.maxPage < this.numberPageDisplay) {
        //nếu maxPage < 3 thì hiện 3 trang
        let arr = [];
        for (let i = 1; i <= this.maxPage; i++) {
          arr.push(i);
        }
        return arr;
      }
      if (this.pageNumber < this.numberPageDisplay) {
        //hiển thị 2 trang đầu và trang cuối
        return [1, 2, "...", this.maxPage];
      } else if (
        //hiển thị trang đầu trang cuối và trang hiện tại
        this.pageNumber >= this.numberPageDisplay &&
        this.pageNumber <= this.maxPage - this.numberPageDisplay + 1
      ) {
        return [1, "...", this.pageNumber, "...", this.maxPage];
      } else if (this.pageNumber >= this.maxPage - this.numberPageDisplay) {
        //hiển thị 2 trang cuối và trang đầu
        return [1, "...", this.maxPage - 1, this.maxPage];
      }
      return [];
    },
  },
};
</script>

<style scoped>
@import url(../../css/main.css);

</style>
