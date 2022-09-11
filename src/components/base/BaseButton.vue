<template>
    <button :class="classBtn">{{ textBtn }}</button>
</template>
<script>
export default {
    name: "BaseButton",
    props: {
        classBtn: String,
        textBtn: String
    }
}
</script>
<style scoped>

</style>