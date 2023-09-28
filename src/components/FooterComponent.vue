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
    <footer>
        <div>
            Developerd with &hearts; by DeveloPier
        </div>

    </footer>
</template>

<style lang="scss" scoped>
footer {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>