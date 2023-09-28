<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
    data() {
        return {
            title: 'Portfolio',
        }
    },
    components: {
        ProjectCard
    }
}
</script>

<template>
    <div class="container">
        <h1>
            {{ title }}
        </h1>
        <div>
            <ProjectCard />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 1200px;
    height: 100%;
    margin: 0 auto;

}
</style>