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
        <ProjectCard />
    </main>
</template>

<style scoped></style>