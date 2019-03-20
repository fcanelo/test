<template>

    <!-- Ligne avec Logo et Republique -->
    <header id="navbar" role="banner" class="navbar container navbar-default">
        <div class="navbar-header row">
            <div class="col-md-2 col-xs-3">
                <a class="logo navbar-btn pull-left" href="www.google.ch" title="Accueil">R&eacute;publique et Canton de
                    Gen&egrave;ve
                </a>
            </div>
            <div class="lead col-md-7 col-xs-6">
                <span>R&eacute;publique et Canton de Gen&egrave;ve</span>
            </div>

        </div>
        <!--<div id="nav">-->
            <!--<router-link to="/">Home</router-link> |-->
            <!--<router-link to="/about">About</router-link>-->
        <!--</div>-->

    </header>

</template>

<script>
    export default {
        name: 'Header',
        props: {
            msg: String
        }
    }

</script>

