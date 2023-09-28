<script>
import ProjectCard from './ProjectCard.vue';


export default {
    name: 'MainComponent',
    data() {
        return {
            title: 'Main Component',
            projects: []
        }
    },
    components: {
        ProjectCard
    }
}
</script>

<template>
    <main>
        <div>
            <router-view></router-view>
        </div>

    </main>
</template>

<style lang="scss" scoped>
main {

    height: calc(100vh - 100px);

    .container {
        max-width: 1200px;
        height: 100%;
        margin: 0 auto;
    }

}
</style>