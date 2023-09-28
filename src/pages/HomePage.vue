<script>
export default {
    data() {
        return {
            title: 'HomePage'
        }
    }
}
</script>

<template>
    <div class="title-container">
        <h1>
            {{ title }}
        </h1>
    </div>

    <div class="container">
        <div class="benvenuto">
            Benvenuto nel mondo di Pier, il developer <strong>senza gusto estetico!</strong>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.title-container {
    margin: 10px 30px;
}

.benvenuto {
    font-size: 20px;
}
</style>