<template>
    <div class="row">
        <div class="col s12 m8 l8">
            <div class="card-panel">
                <div class="row">
                    <div class="col s12 m7 l7">
                        <img src="https://s3.eu-west-3.amazonaws.com/jobswebsite/media/avatars/avatar2.png" 
                            alt="avatar_candidat" class="responsive-img">
                    </div>
        
                    <div class="col s12 m5 l5">
                        <h5>{{ candidature.candidat.nom }}</h5>
                        <hr>            
                    </div>

                    <div class="col s12 m5 l5">
                        <table>
                            <tbody>
                                <tr>
                                    <td><i class="material-icons">event</i></td>
                                    <td>{{ candidature.candidat.date_naissance }}</td>
                                </tr>
                                <tr>
                                    <td><i class="material-icons">map</i></td>
                                    <td>{{ candidature.candidat.code_postal }}</td>
                                </tr>
                                <tr>
                                    <td><i class="material-icons">contact_mail</i></td>
                                    <td><a v-bind:href="`mailto:${candidature.candidat.email}`" style="color:inherit;">{{ candidature.candidat.email }}</a></td>
                                </tr>
                                <tr>
                                    <td><i class="material-icons">contact_phone</i></td>
                                    <td>{{ candidature.candidat.telephone }}</td>
                                </tr>
                            </tbody>
                        </table>        
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>
                            <a v-if="candidature.statut !== 'refuse'" 
                                class="btn-small waves-effect waves-light light-blue darken-1 modal-trigger" id="btn-action"
                                    href="#modal1">
                                <i class="material-icons left">check</i>
                                Entretien
                            </a>
                            <a v-if="candidature.statut !== 'refuse'" 
                                class="btn-small waves-effect waves-light light-blue darken-1 modal-trigger" id="btn-action"
                                    href="#modal2">
                                <i class="material-icons left">close</i>
                                Refuser
                            </a>
                            <button v-show="peut_archiver(candidature.statut)" v-on:click="candidature.archive = !candidature.archive" id="btn-archiver-candidature"
                                class="btn-small red darken-3">
                                <i class="material-icons left">archive</i>
                                Archiver
                            </button>
                            <a href="" id="btn-action-supprimer" class="btn-small red darken-3">
                                <i class="material-icons left">delete</i>
                                Supprimer
                            </a>
                        </p>
                    </div>

                </div>
            </div>

            <!-- <div class="card-panel">
                <h5>Formation</h5>
                <hr>
                <table>
                    <tbody>
                        <tr>
                            <td><i class="material-icons">account_balance</i></td>
                            <td>{{ user_profile.mon_ecole|upper }}</td>
                        </tr>
                        <tr>
                            <td><i class="material-icons">class</i></td>
                            <td>{{ user_profile.niveau_etude|upper }}</td>
                        </tr>
                    </tbody>
                </table>
            </div> -->
        </div>

        <div class="col s12 m4 l4">    
            <div class="card-panel">
                <h6>Évaluer la candidature</h6>
                <hr>
                <div class='rating-stars'  v-bind:data-offre="candidature.offre.id">
                    <ul id='stars'>
                        <li class='star' title='1' data-value='1'>
                            <i class='fa fa-star fa-fw'></i>
                        </li>
                        <li class='star' title='2' data-value='2'>
                            <i class='fa fa-star fa-fw'></i>
                        </li>
                        <li class='star' title='3' data-value='3'>
                            <i class='fa fa-star fa-fw'></i>
                        </li>
                        <li class='star' title='4' data-value='4'>
                            <i class='fa fa-star fa-fw'></i>
                        </li>
                        <li class='star' title='5' data-value='5'>
                            <i class='fa fa-star fa-fw'></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col s12 m4 l4">
            <div class="card">
                <div class="card-content">
                    include "utilities/pdf_viewer.html"
                    <p>{{candidature}}</p>
                </div>
            </div>
        </div>

        <!-- Modal Structure -->
        <div id="modal1" class="modal">
            <div class="modal-content">

                <form id="entretien_form">
                    <div class="row">
                        <div class="input-field">
                            <input v-model="entretien.date_entretien" type="datetime" name="date_entretien" id="date_entretien" placeholder="date_entretien">
                        </div>
                        <div class="input-field">
                            <select v-model="entretien.type_entretien" name="type_entretien" id="type_entretien">
                                <option value="telephonique">Téléphonique</option>
                                <option value="physique">Physique</option>
                                <option value="hangouts">Hangouts</option>
                            </select>
                        </div>
                        <div class="input-field">
                            <input v-show="entretien.type_entretien == 'hangouts'" v-model="entretien.lien_hangouts" type="text" name="lien_hangouts" id="lien_hangouts" placeholder="lien_hangouts">
                            <input v-show="entretien.type_entretien == 'physique'" v-model="entretien.lieu_entretien" type="text" name="lieu_entretien" id="lieu_entretien" placeholder="Lieu">
                        </div>
                        <div class="switch">
                            <label>
                                <input v-model="entretien.alerter_candidat" type="checkbox" name="alerter_candidat" id="alerter_candidat">
                                <span class="lever"></span>
                                Alerter le candidat par email
                            </label>                            
                        </div>
                    </div>
                    <button type="submit" class="btn-small waves-effect waves-light light-blue darken-1">
                        Valider
                    </button>
                </form>

            </div>
        </div>

        <!-- Modal Structure -->
        <div id="modal2" class="modal">
            <div class="modal-content">

                <table>
                    <tr v-for="raison_refus in raisons_refus" v-bind:key="raison_refus">
                        <td>{{ raison_refus }}</td>
                        <td>
                            <button v-on:click="candidature.statut = 'refuse'" class="btn waves-effect waves-light light-blue darken-1" v-bind:id="raison_refus_id(raison_refus)">Refuser</button>
                        </td>
                    </tr>
                </table>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() { 
        return {
            candidature: {
                id: 1,
                statut: 'standby',
                archive: false,
                offre: {
                    id: 1,
                },
                candidat: {
                    nom: 'Aurélie Vallon',
                    date_naissance: '11-03-1993',
                    code_postal:  75001,
                    email: 'aurelie.vallon@gmail.com',
                    telephone: '0669554431'
                }
            },
            entretien: {
                date_entretien: '',
                type_entretien: '',
                lien_hangouts: '',
                lieu_entretien: '',
                alerter_candidat: false
            },

            raisons_refus: ['Disponibilités', 'Compétences'],

            entretiens_options: [
                { text: 'telephonique', value: 'telephonique' },
                { text: 'physique', value: 'physique' },
                { text: 'hangouts', value: 'hangouts' }
            ]
        }
    },

    methods: {
        raison_refus_id: function(raison_refus) {
            raison_refus = 'btn_' + raison_refus;
            return raison_refus.toLowerCase();
        },

        peut_archiver: function(statut) {
            if (statut === 'accepte' || statut === 'refuse') {
                return true;
            }
            return false;
        }
    }
}
</script>

