<template>
    <div id="page-content-wrapper">
        <div id="page">
            <div class="main-container">

                <section>
                    <div class="content">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="region region-content">
                                        <section id="block-system-main" class="block block-system clearfix">
                                            <div class="panel-main">


                                                <div id="texte_bordure">

                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">Calcul Impôt à la source selon
                                                            barème
                                                        </div>
                                                        <div class="panel-body">

                                                            <p> Ce formulaire permet de calculer votre montant d'impôt à
                                                                la source conformément aux
                                                                instructions
                                                                publiées
                                                                sur la <a href="http://ge.ch/impots/iso-17"
                                                                          target="_blank">page des barèmes</a>.</p>

                                                            Il intègre les barèmes de rectification. Rappelons que :
                                                            <ul>
                                                                <li>Les barèmes C0 à C5 sont des barèmes de perception,
                                                                    utilisés par les employeurs
                                                                </li>
                                                                <li>Les barèmes Cr0 à Cr5 sont des barèmes de
                                                                    rectification, utilisés uniquement par
                                                                    l'Administration fiscale
                                                                    cantonale.
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>


                                                    <div class="container">
                                                        <div class="row clearfix">
                                                            <div class="col-md-6 col-md-offset-3 column">
                                                                <form role="form" @submit="onSubmit">
                                                                    <!-- Année fiscale-->
                                                                    <div class="form-group">
                                                                        <label for="pwd3">Année
                                                                            fiscale:</label>
                                                                        <input type="text" class="form-control disabled"
                                                                               disabled="true" id="pwd3"
                                                                                v-model="annee"
                                                                               placeholder="2018">
                                                                    </div>
                                                                    <!-- Baremes-->
                                                                    <div class="form-group">
                                                                        <label
                                                                                for="email3">Barème:</label>
                                                                        <select id="page2Form.communeTaxation"
                                                                                name="page2Form.communeTaxation"
                                                                                class="form-control"

                                                                                aria-describedby="helpBlockContentpage2Form.communeTaxation"
                                                                                data-toggle="popover" required=""
                                                                                data-original-title="" title="">


                                                                            <option v-for="bareme in allBaremes"
                                                                                    v-bind:key="bareme.id"
                                                                                    :value="bareme.code">{{ bareme.code
                                                                                }}
                                                                            </option>

                                                                        </select>

                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label for="pwd3">Revenu
                                                                            annuel contribuable (en CHF)</label>


                                                                        <input type="text"
                                                                               v-tooltip.click.right="{ html: 'tooltipContent' , class: 'tooltip-custom ' }"
                                                                               class="form-control" id="revenu"
                                                                               aria-describedby="tooltipContent"
                                                                               data-toggle="popover"
                                                                               data-original-title title>
                                                                    </div>

                                                                    <!--<div class="form-group">-->
                                                                    <!--<label for="exampleInputFile">File input</label><input type="file" id="exampleInputFile">-->
                                                                    <!--<p class="help-block">-->
                                                                    <!--Example block-level help text here.-->
                                                                    <!--</p>-->
                                                                    <!--</div>-->
                                                                    <button type="submit" name="next"
                                                                            class="btn btn-primary submitandwait"
                                                                           >
                                                                        Calculer
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>

                                                    </div>


                                                </div>


                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    </div>
</template>

<script>
    // The mapGetters helper simply maps store getters to local computed properties
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "CalculetteV2",
        data(){
            return {
                annee: ''
            }
        },
        methods: {
            ...mapActions(['fetchBaremes', 'submit'])
            ,
            onSubmit(e) {
                e.preventDefault();
                // this.$router.push("/about?bareme=" );
                this.submit(this.annee)
                    .then(this.$router.push("/about?bareme=" ));
            }
        },

        // pass in an array of the getters we want to use
        // returns the baremes from the state
        computed: {
            ...mapGetters(['allBaremes']),
            // annee: {
            //     get () {
            //         return this.$store.state.annee
            //     },
            //     set (value) {
            //         this.$store.commit('updateAnnee', value)
            //     }
            // }
        },

        created() {
            this.fetchBaremes();
        }
    };


</script>
<style>
    .vue-tooltip.tooltip-custom {
        background-color: whitesmoke;
    }

    .justify-content-center {
        -webkit-box-pack: center !important;
        -webkit-justify-content: center !important;
        -ms-flex-pack: center !important;
        justify-content: center !important;
    }

    .vue-tooltip {
        color: #777 !important;
    }

    .vue-tooltip.tooltip-custom .tooltip-arrow {
        border-color: whitesmoke !important;
    }

</style>

