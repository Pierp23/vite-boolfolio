<script>
export default {
    name: 'FooterComponent',
    data() {
        return {
            title: 'Footer Component'
        }
    }
}
</script>

<template>
    <header>
        <h2>
            {{ title }}
        </h2>
    </header>
</template>

<style scoped>
h2 {
    color: blue;
}
</style>