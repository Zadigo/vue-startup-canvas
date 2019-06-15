<template>
    <section class="section" id="offres">
        <div class="container">
            <!-- SEARCH -->
            <!-- <Search></Search> -->
            <div class="row">
                <div class="col s12 m10 l10 offset-l3">
                    <div class="card-panel">
                        <input v-model="searchQuery" type="search" name="search" id="search">
                        <p>
                            <label>
                                <input v-model="country" type="checkbox" name="country" id="country">
                                <span>Country</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- FILTERS -->
                <!-- <OffresFilters v-bind:players="players" @update-players="updatedPlayers"></OffresFilters> -->

                <!-- CARDS -->
                <div class="col s12 m3 l3" 
                    v-for="player in searchPlayers" 
                    v-bind:key="player.name"
                >
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" :src="player.url_profile" :alt="player.name">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">
                                {{ player.name }}
                                <i class="material-icons right">more_vert</i></span>
                            <p>
                                <router-link :to="{'name': 'offre-view', 'params': {'id': player.name}}">Détails</router-link>
                            </p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">
                                {{ player.name }}
                                <i class="material-icons right">close</i>
                            </span>
                            <p>Height: {{ player.height }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
// import OffresFilters from '@/components/offres/OffresFilters.vue'
// import Search from '@/components/offres/Search.vue'

export default {
    components: {
        // 'OffresFilters': OffresFilters,
        // Search
    },

    data() {
        return {
            players: [],
            filteredPlayers: [],
            searchQuery: '',
            country: false
        }
    },

    created() {
        axios.get('https://raw.githubusercontent.com/Zadigo/open-data-party/master/volleyball/6_2019_56a988209e.json')
            .then(response => {
                this.players = response.data.records
                this.filteredPlayers = this.players
            })
            .catch(error => {
                // pass
            })
    },

    // methods: {
    //     // TODO:
    //     // B. Receive the $emit and receive
    //     // update values in the Parent
    //     updatedPlayers: function(players) {
    //         if (this.filteredPlayers.length == 0) {
    //             this.filteredPlayers = this.players
    //         } else {
    //             this.filteredPlayers = players
    //         }
    //     }
    // },

    computed: {
        // Search for a specific player
        searchPlayers() {
            return this.players.filter(player => {
                return player.name.includes(this.searchQuery)
            })
        },

        // searchCountry() {
        //     return this.players.filter(player => {
        //         return player.age <= 25
        //     })
        // }
    }
}
</script>
