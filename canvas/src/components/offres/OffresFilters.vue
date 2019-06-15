<template>
<div class="col s12 m3 l3">
    <div class="card-panel">
        <p>
            <label>
                <input 
                    :checked="belowSixFoot()"
                    v-model="dataFilter"
                    type="checkbox" name="universites" id="universites"
                >
                <span>180 cm</span>
            </label>
        </p>
    </div>
</div>
</template>

<script>
export default {
    props: ['players'],
    data() {
        return {
            playersBelowSix: [],
            dataFilter: false
        }
    },
    methods: {
        // TODO:
        // A. Get a click even that generates an
        // $emit to the parent
        belowSixFoot: function() {
            if (this.dataFilter) {
                this.playersBelowSix = this.players.filter(player => player.height < 180)
                // 1. Generate  an $emit
                this.$emit('update-players', this.playersBelowSix)
            }
            // console.log(this.playersBelowSix)
        }
    }
}
</script>
