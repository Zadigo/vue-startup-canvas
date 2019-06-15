<template>
<div class="row">
    <div class="col s12 m10 l10 offset-l3">
        <div class="card-panel">
            <input v-model="searchQuery" type="search" name="search" id="search">
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['universites'],
    data() {
        return {
            searchQuery: '',
            filteredOffres: []
        }
    },
    watch: {
        searchQuery() {
            // console.log(this.searchQuery)
            // this.filteredOffres = this.universites.filter(universite => {
            //     // universite.fields.aca_nom.startsWith(this.searchQuery)
            //     console.log(universite.fields.aca_nom.startsWith(this.searchQuery))
            // })
            console.log(this.$props)
        }
    }
}
</script>

