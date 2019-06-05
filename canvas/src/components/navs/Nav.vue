<template>
<div class="navbar-fixed">
    <nav class="red darken-1">
        <div class="nav-wrapper">
            <div class="container">
                <router-link to="/" class="brand-logo">Prototype</router-link>
                <ul id="nav-mobile" class="hide-on-med-and-down right">
                    <router-link to="#" data-target="mobile-demo" class="sidenav-trigger">
                        <i class="material-icons">menu</i>
                    </router-link>

                    <li>
                        <router-link :to="{'name': 'offres-view'}">Boutique</router-link>
                    </li>
                    <li>
                        <a href="#apropos">A propos</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>
