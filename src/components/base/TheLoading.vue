<template>
    <div class="m-loading" :class="{isShowLoading: isLoading }">
        <div class="loader-5"><span></span></div>
    </div>
</template>
<script>
export default {
    name: 'TheLoading',
    props: ["isLoading"],
      data() {
        return {
          
        }
    },

}
</script>