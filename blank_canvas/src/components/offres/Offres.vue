<template>
    <section class="section">
        <div class="row">
            <!-- FILTERS -->
            <offresfilters-item v-bind:universites="universites"></offresfilters-item>

            <!-- CARDS -->
            <div class="col s12 m3 l3" v-for="universite in universites" v-bind:key="universite.recordid">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="https://materializecss.com/images/office.jpg" :alt="universite.fields.aca_nom">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">
                            {{ universite.fields.aca_nom }}
                            <i class="material-icons right">more_vert</i></span>
                        <p>
                            <router-link :to="{'name': 'offre-view', 'params': {'id': universite.recordid}}">Détails</router-link>
                        </p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">
                            {{ universite.fields.aca_nom }}
                            <i class="material-icons right">close</i>
                        </span>
                        <p>{{universite.fields.libelle_programme_lolf_chef_de_file}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import OffresFilters from './OffresFilters'

export default {
    components: {
        'offresfilters-item': OffresFilters
    },
    data() {
        return {
            universites: []
        }
    },

    created() {
        axios.get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=fr-esr-principaux-etablissements-enseignement-superieur%40mesr&sort=uo_lib&facet=uai&facet=type_d_etablissement&facet=secteur_d_etablissement&facet=localisation&facet=com_nom&facet=dep_nom&facet=aca_nom&facet=reg_nom&facet=pays_etranger_acheminement&facet=siret&facet=identifiant_grid&facet=statut_juridique_court&facet=qualification_long&facet=statut_operateur_lolf&facet=identifiant_programme_lolf_chef_de_file&facet=typologie_d_universites_et_assimiles&facet=siren&facet=uai_rgp_loi_esr_2013&facet=universites_fusionnees&facet=identifiant_interne&facet=identifiant_dataesr')
            .then(response => {
                this.universites = response.data.records
            })
    },

    methods: {
    },

    computed: {
    }
}
</script>
