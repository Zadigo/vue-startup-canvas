<template>
    <!-- MODAL -->
    <div id="modal1" class="modal">
        <div class="modal-content">
            <h4>Sources</h4>
            <table class="centered">
                <tr v-for="social in social_items" v-bind:key="social" v-bind:id="social">
                    <td>{{ social }}</td>
                    <td>
                        <router-link to="#!" class="btn-small waves-effect waves-light light-blue darken-1" 
                            target="_blank">
                            <i v-bind:class="fab_item(social)"></i>Partager
                        </router-link>
                    </td>
                </tr>
            </table>
        </div>
    </div>       
</template>

<script>
export default {
    props: ['social_items'],

    methods: {
        fab_item: function(media) {
            return 'fab fa-' + media + ' left';
        }
    }
}
</script>
