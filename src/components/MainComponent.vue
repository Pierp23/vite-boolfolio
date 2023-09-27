<script>
export default {
    name: 'MainComponent',
    data() {
        return {
            title: 'Main Component'
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