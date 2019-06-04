<template>
    <div>
        <!-- HERO -->
        <div class="hero red darken-3">
            <div class="hero-wrapper">
                <div class="call-to-action">
                    <div class="lead">Ne me parlez pas de la vie</div>
                    <div class="lead-subtitle">Je suis une femme</div>
                    <router-link :to="{ 'name': 'offres-view' }" class="btn-large red darken-1">Offres</router-link>
                </div>
            </div>
            <!-- <router-link :to="{ 'name': 'admin-offres-view' }" class="btn">Offres</router-link>
            <router-link :to="{ 'name': 'admin-candidatures-view' }" class="btn">Candidatures</router-link> -->
        </div>

        <!-- BENEFITS -->
        <benefits-section></benefits-section>

        <!-- CONTACT -->
        <contact-section></contact-section>
    </div>
</template>

<script>
import Benefits from './Benefits.vue'
import Contact from './Contact.vue'

export default {
    components: {
        'benefits-section': Benefits,
        'contact-section': Contact
    }
}
</script>

