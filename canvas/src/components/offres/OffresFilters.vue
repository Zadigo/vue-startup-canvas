<template>
<div class="col s12 m3 l3">
    <p>{{first_filter}}</p>
    <div class="card-panel">
        <p>
            <label>
                <input v-model="first_filter.checked" type="checkbox" name="operative" id="operative">
                <span>Filter 1</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" name="operative" id="operative">
                <span>Filter 2</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" name="operative" id="operative">
                <span>Filter 3</span>
            </label>
        </p>
    </div>

    <div class="card-panel">
        <p>
            <label>
                <input @click="showNonOperative()" type="checkbox" name="operative" id="operative">
                <span>Operative</span>
            </label>
        </p>
    </div>
</div>
</template>

<script>
export default {
    props: ['universites'],

    data() {
        return {
            first_filter: {
                checked: false,
                value: 'university'
            }
        }
    },

    methods: {
        getData: function() {
            this.filteredData = data;
        }
    }
}
</script>
