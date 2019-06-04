<template>
<section class="section">
    <div class="row">
        <div class="col s12 m12 l12">
            <div class="card-panel">
                <table class="centered">
                    <thead>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Date</th>
                        <th>Score</th>
                    </thead>

                    <tr v-for="candidature in candidatures" v-bind:key="candidature.id">
                        <td>
                            <router-link :to="{ 'name': 'admin-candidat-view', 'params': {'id': candidature.id} }">{{ candidature.id }}</router-link>
                        </td>
                        <td>    
                            {{ candidature.nom }}
                        </td>
                        <td>
                            {{ candidature.date }}
                        </td>
                        <td>
                            {{ candidature.score }}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            candidatures: [
                {
                    id: 1,
                    nom: 'Pauline Roman',
                    date: '13-03-2019',
                    score: 56
                },
                {
                    id: 2,
                    nom: 'Pauline Roman',
                    date: '13-07-2019',
                    score: 48
                },
                {
                    id: 3,
                    nom: 'Pauline Roman',
                    date: '13-02-2019',
                    score: 67
                },
                {
                    id: 4,
                    nom: 'Pauline Roman',
                    date: '13-09-2019',
                    score: 89
                }
            ]
        }
    }
}
</script>

