<template>
<section class="section">
    <div class="row">
        <div class="col s12 m12 l12">
            <div v-if="can_create" class="card-panel">
                <strong>
                    Pour créer de nouvelles offres, vous devrez souscrire à un abonnement supérieur.
                    <a href="">Nous contacter.</a>
                </strong>
            </div>

            <div class="right">
                <router-link to="/" target="_blank" class="btn waves-effect waves-light light-blue darken-1">
                    <i class="material-icons left">local_library</i>Voir sur le site
                </router-link>
            </div>

            <div v-if="can_create" class="right">
                <button v-on:click="creer_offre()" class="btn waves-effect waves-light light-blue darken-1" id="btn-nouvelle-offre">
                    <i class="material-icons left">add</i>
                    Nouvelle offre
                </button>
            </div>
        </div>
    </div>

    <!-- TABLE -->
    <div class="row">
        <div class="col s12 m12 l12">
            <div class="card-panel">
                <table class="centered">
                    <thead>
                        <th>#</th>
                        <th>Offres</th>
                        <th>Activer</th>
                        <th>Partager</th>
                        <th>Actions</th>
                    </thead>

                    <tr v-for="offre in offres" v-bind:key="offre.id">
                        <td>
                            <router-link :to="{ 'name': 'admin-candidat-view', 'params': { 'id': offre.id } }">{{ offre.id }}</router-link>
                        </td>
                        <td>{{ offre.nom_poste }}</td>
                        <td>
                            <div class="switch">
                                <label>
                                    <input type="checkbox" v-on:click="offre.actif = !offre.actif" 
                                            v-on:change="dataLayer.push({'title': offre.nom_poste});" id="switch-activer-desactiver">
                                    <span class="lever"></span>
                                </label>
                            </div>
                        </td>
                        <td>
                            <!-- Modal Trigger -->
                            <a href="#modal1" class="modal-trigger" id="btn-partager-offre">
                                <i class="material-icons">share</i>
                            </a>
                        </td>
                        <td>
                            <router-link v-bind:testa="testa" :to="{'name':'admin-offres-modify-view', 'params': {'id': offre.id}}"><i class="material-icons">create</i></router-link>
                            <a href=""  v-on:click="dupliquer_offre()" v-if="can_create"><i class="material-icons">file_copy</i></a>
                            <a href="" v-on:click="supprimer_offre()"><i class="material-icons">delete</i></a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    <modal-item v-bind:social_items="social_items"></modal-item>
</section>
</template>

<script>
import Modal from './Modals.vue'

export default {
    components: {
        'modal-item': Modal
    },
    data() {
        return {
            can_create: true,
            offres: [
                {
                    id: 1,
                    nom_poste: 'Assistante commerciale',
                    description_courte: 'Une description',
                    actif: true,
                },
                {
                    id: 2,
                    nom_poste: 'Directeur marketing',
                    description_courte: 'Une description',
                    actif: true,
                }
            ],
            user: {
                id: 1,
                email: 'email@gmail.com',
            },
            social_items: ['facebook', 'linkedin', 'twitter']
        }
    },
    methods: {
        actif: function(is_actif) {
            if (is_actif) {
                return 'checked';
            }
            return '';
        },

        partage: function(media) {
            return 'partage_' + media;
        },

        creer_offre: function() {
            this.offres.push(
                {
                    id: 3,
                    nom_poste: 'Un poste',
                    description_courte: 'Une description',
                    actif: false,
                }
            )
        },

        supprimer_offre: function() {
            this.offres.pop();
        },

        dupliquer_offre: function() {
            console.log(this.offres.id)
        }
    }
}
</script>

