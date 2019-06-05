<template>
<section class="section section-benefits grey lighten-4 center scrollspy" id="apropos">
    <div class="container">
        <div class="row">
            <div v-for="card in cards" v-bind:key="card.icon" class="col s12 m4">
                <div class="card-panel">
                    <i class="material-icons large red-text">{{ card.icon }}</i>
                    <h4>{{ card.title }}</h4>
                    <p>{{ card.content }}</p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    icon: 'room',
                    title: 'Pick Where',
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.'
                },
                {
                    icon: 'store',
                    title: 'Travel Shop',
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.'
                },
                {
                    icon: 'airplanemode_active',
                    title: 'Fly Cheap',
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.'
                }
            ]
        }
    }
}
</script>
