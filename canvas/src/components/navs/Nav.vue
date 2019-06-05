<template>
<div class="navbar-fixed">
    <nav class="red darken-1">
        <div class="nav-wrapper">
            <div class="container">
                <router-link to="/" class="brand-logo">Test</router-link>
                <ul id="nav-mobile" class="hide-on-med-and-down right">
                    <li>
                        <router-link :to="{'name': 'offres-view'}">Boutique</router-link>
                    </li>
                    <li><router-link to="#apropos">A propos</router-link></li>
                    <li><a href="#!">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>
