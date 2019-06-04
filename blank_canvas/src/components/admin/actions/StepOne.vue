<template>
    <section class="section">
        <div class="card-panel">
            <form @submit.prevent="nextStep()">
                <div class="row">
                    <div v-for="field in fields" v-bind:key="field" :class="'input-field ' + field.size">
                        <input v-model="field.model_item" :type="field.type" 
                            :name="field.name" :id="field.name" :placeholder="field.title">
                    </div>
                </div>
                <button class="btn">Valider</button>
            </form>
        </div>
    </section>
</template>

<script>
// import Router from 'vue-router'

export default {
    data() {
        return {
            fields: [
                {
                    type: 'text',
                    title: 'Nom poste',
                    size: 'col s12 m12 l12',
                    name: 'nom_poste',
                    model_item: ''
                },
                {
                    type: 'date',
                    title: 'Date début',
                    size: 'col s12 m3 l3',
                    name: 'date_debut',
                    model_item: ''
                },
                {
                    type: 'number',
                    title: 'Salaire',
                    size: 'col s12 m3 l3',
                    name: 'salaire',
                    model_item: ''
                }
            ]
        }
    },

    methods: {
        nextStep: function() {
            // Collect all model items issued
            // by the v-model before submit
            var model_items = []
            this.$data.fields.forEach(field => {
                model_items.push(
                    {
                        'name': field.name,
                        'model_item': field.model_item
                    }
                )
            });
            
            // POST data

            // Goto next step
            // Router.go('/')
        }
    }
}
</script>
