<script>
import axios from 'axios';

export default {
    name: 'ProjectCard',
    data() {
        return {
            title: 'Project Card',
            projects: []
        }
    },
    created() {
        axios
            .get('http://localhost:8000/api/projects')
            .then(response => {
                console.log(response)
                this.projects = response.data.results.data
            })
    }
}
</script>

<template>
    <header>
        <div>
            <h1>
                I progetti del 2023
            </h1>
        </div>
    </header>
    <main>
        <section>
            <div class="container">
                <div class="card" v-for="project in projects" :key="project.id">
                    <div class="card-title">
                        <h3>
                            {{ project.title }}
                        </h3>
                    </div>
                    <div class="card-body">
                        <div>
                            <strong>Tipo: </strong>
                            {{ project.type.type }}
                        </div>
                        <div>
                            <strong>Tecnlogie: </strong>
                            <span v-for="technology in project.technologies" :key="technology.id">
                                - {{ technology.title }}
                            </span>
                        </div>
                        <div>
                            <strong>Descrizione: </strong>
                            {{ project.description }}
                        </div>
                        <div>
                            <strong>Data: </strong>
                            {{ project.date }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped></style>