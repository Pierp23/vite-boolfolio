<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            title: 'Single Project',
            project: null
        }
    },
    created() {
        axios
            .get(`http://localhost:8000/api/projects/${this.$route.params.id}`)
            .then(response => {
                this.project = response.data.results;
                console.log(response)
            })
            .catch(err => {
                console.log(err);
                if (err.response.status == 404) {
                    this.$router.push({ name: 'not-found' });
                }
            });
    }
}
</script>
<template>
    <template v-if="!project">
        <iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="100%" height="480" frameBorder="0"
            class="giphy-embed" allowFullScreen></iframe>
    </template>

    <template v-if="project">
        <header>
            <div>
                <h1>
                    Progetto n. {{ project.id }}
                </h1>
            </div>
        </header>
        <main>
            <div class="card-section">
                <div class="single-card">
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
                                {{ technology.title }}
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
        </main>

    </template>
</template>

<style lang="scss" scoped>
header,
.card-section {
    margin: 0 auto;
    width: 1200px;
}

.card-section {
    margin-top: 10px;
    border: 1px solid black;

    .card-title {
        border-bottom: 1px solid black;
        margin-bottom: 8px;
        padding: 3px;
    }

    .card-body {

        margin-bottom: 8px;

        * {
            padding: 2px 3px;
        }
    }
}
</style>