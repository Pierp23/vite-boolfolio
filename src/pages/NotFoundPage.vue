<script>
export default {
    data() {
        return {
            title: '404 - Not Found',
        }
    },
}
</script>

<template>
    <div class="container">
        <h1>
            {{ title }}
        </h1>
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 900px;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>