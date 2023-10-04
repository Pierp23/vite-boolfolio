<script>
import axios from 'axios';

export default {
    name: 'ProjectCard',
    data() {
        return {
            title: 'Project Card',
            projects: null
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
    <template v-if="!projects">
        <span id="loading">
            <div class="lds-dual-ring"></div>
        </span>

    </template>

    <template v-if="projects">
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
                        <div>
                            <router-link :to="{ name: 'portfolio-project', params: { id: project.id } }">
                                Approfondisci
                            </router-link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </template>
</template>

<style scoped>
main {
    position: relative;
}


.lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;

    position: absolute;
    top: 50%;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%)
}

.lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid black;
    border-color: black transparent black transparent;
    animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>