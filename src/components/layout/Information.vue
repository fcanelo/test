<template>

    <!-- Ligne informations -->
    <!-- Ligne avec Logo et Republique -->
    <div class="highlighted jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="region region-highlighted">
                        <!-- Mise en place des Navbars -->
                        <nav class="navbar navbar-default" role="navigation">
                            <div class="navbar-header region-highlighted">
                                <section class="block block-block clearfix">


                                    <p>
                                        {{msg_intro}}
                                    </p>


                                </section>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Information",
        props: {
            msg_intro: String
        }
    }
</script>

<style scoped>

</style>
