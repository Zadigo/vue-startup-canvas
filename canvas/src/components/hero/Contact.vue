<template>
<section class="section section-contact scrollspy" id="contact">
    <div class="container">
        <div class="row">
            <div class="col s12 m6">
                <div class="card-panel red darken-1 white-text center">
                    <i class="material-icons medium">email</i>
                    <h5>Contact Us For Booking</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sed praesentium delectus.
                        Sit, mollitia
                        quo. Veniam repellat voluptas ipsum doloremque?
                    </p>
                </div>
                <!-- <ul class="collection with-header">
                    <li class="collection-header">
                        <h4>Location</h4>
                    </li>
                    <li class="collection-item">Travelville Agency</li>
                    <li class="collection-item">555 Beach rd, Suite 33</li>
                    <li class="collection-item">Miami FL, 55555</li>
                </ul> -->
            </div>

            <div class="col s12 m6">
                <div class="card-panel grey lighten-3">
                    <h5>Please fill out this form</h5>
                    <div class="input-field">
                        <input v-model="new_message.name" type="text" placeholder="Name" id="name">
                    </div>
                    <div class="input-field">
                        <input v-model="new_message.email" type="email" placeholder="Email" id="email">
                    </div>
                    <!-- <div class="input-field">
                        <input type="text" placeholder="Phone" id="phone">
                    </div> -->
                    <div class="input-field">
                        <textarea v-model="new_message.message" class="materialize-textarea" placeholder="Enter Message" id="message"></textarea>
                    </div>
                    <button @click="sendEmail()" type="submit" class="btn red darken-1 waves-effect waves-light">Submit</button>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            new_message: {
                name: '',
                email: '',
                message: ''
            },
            message_sent: false
        }
    },

    methods: {
        sendEmail: function() {
            axios.post('https://www.example.com/', this.$data.new_message)
                .then(response => {
                    // console.log(response)
                    this.$data.new_message.name = ''
                })
                .catch(error => {
                    this.$data.new_message.name = ''
                    this.$data.new_message.email = ''
                    this.$data.new_message.message = ''

                    // Show message when message
                    // has been sent via toast
                    var message = "Nous n'avons pas pu envoyer votre message"
                    M.toast({html: message})
                })
        }
    }
}
</script>

