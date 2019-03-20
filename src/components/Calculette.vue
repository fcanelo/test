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

                                                    <div class="container-fluid">
                                                        <div class="row justify-content-center">
                                                    <form class="form-horizontal" role="form">

                                                        <div class="form-group">
                                                            <label class="control-label col-sm-2" for="pwd3">Année
                                                                fiscale:</label>
                                                            <div class="col-sm-10">
                                                                <input type="text" class="form-control disabled"
                                                                       disabled="true" id="pwd3" placeholder="2018">
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <label class="control-label col-sm-2"
                                                                   for="email3">Barème:</label>
                                                            <div class="col-sm-10">
                                                                <select id="page2Form.communeTaxation"
                                                                        name="page2Form.communeTaxation"
                                                                        class="form-control"
                                                                        aria-describedby="helpBlockContentpage2Form.communeTaxation"
                                                                        data-toggle="popover" required=""
                                                                        data-original-title="" title="">


                                                                    <option v-for="bareme in allBaremes" v-bind:key="bareme.id" :value="bareme.code">{{ bareme.code }}</option>

                                                                    <!--<option value="A0">A0</option>-->
                                                                    <!--<option value="B0">B0</option>-->
                                                                    <!--<option value="B1">B1</option>-->
                                                                    <!--<option value="B2">B2</option>-->
                                                                    <!--<option value="B3">B3</option>-->
                                                                    <!--<option value="B4">B4</option>-->
                                                                    <!--<option value="B5">B5</option>-->
                                                                    <!--<option value="C0">C0</option>-->
                                                                    <!--<option value="C1">C1</option>-->
                                                                    <!--<option value="C2">C2</option>-->
                                                                    <!--<option value="C3">C3</option>-->
                                                                    <!--<option value="C4">C4</option>-->
                                                                    <!--<option value="C5">C5</option>-->
                                                                    <!--<option value="H1">H1</option>-->
                                                                    <!--<option value="H2">H2</option>-->
                                                                    <!--<option value="H3">H3</option>-->
                                                                    <!--<option value="H4">H4</option>-->
                                                                    <!--<option value="H5">H5</option>-->
                                                                    <!--<option value="Cr0">Cr0</option>-->
                                                                    <!--<option value="Cr1">Cr1</option>-->
                                                                    <!--<option value="Cr2">Cr2</option>-->
                                                                    <!--<option value="Cr3">Cr3</option>-->
                                                                    <!--<option value="Cr4">Cr4</option>-->
                                                                    <!--<option value="Cr5">Cr5</option>-->
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <label class="control-label col-sm-2" for="pwd3">Revenu
                                                                annuel contribuable (en CHF)</label>
                                                            <div class="col-sm-10">
                                                                <input type="text"
                                                                       v-tooltip.click.right="{ html: 'tooltipContent' , class: 'tooltip-custom ' }"
                                                                       class="form-control" id="revenu"
                                                                       aria-describedby="tooltipContent"
                                                                       data-toggle="popover"
                                                                       data-original-title title>

                                                                <div id="tooltipContent">
                                                                    <div class="text-center">
                                                                        <span>Revenu contribuable</span>
                                                                    </div>
                                                                    <hr/>
                                                                    <div>
                                                                        <p>Indiquer les revenus bruts perçus par le
                                                                            contribuable en francs suisses.
                                                                        </p>
                                                                        <p> Les revenus à prendre en considération sont
                                                                            :

                                                                        </p>
                                                                        <ul>
                                                                            <li>les revenus bruts d’activité lucrative
                                                                                dépendante ou indépendante
                                                                            </li>
                                                                            <li>les revenus bruts acquis en compensation
                                                                                (chômage, maladie, accident, etc.)
                                                                            </li>
                                                                            <li>les allocations familiales touchées en
                                                                                Suisse
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div class="form-group">
                                                            <div class="col-sm-offset-2 col-sm-10">
                                                                <button type="submit" name="next"
                                                                        class="btn btn-primary submitandwait">Calculer
                                                                </button>
                                                            </div>
                                                        </div>


                                                    </form>
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
    import { mapGetters, mapActions } from 'vuex';
    //import calculette from '../store/modules/calculette';
    export default {
        name: "Calculette",
        methods :{
            ...mapActions(['fetchBaremes'])
        },

        // pass in an array of the getters we want to use
        // returns the baremes from the state
        computed : mapGetters(['allBaremes']),

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
        -webkit-box-pack: center!important;
        -webkit-justify-content: center!important;
        -ms-flex-pack: center!important;
        justify-content: center!important;
    }

    .vue-tooltip {
        color: #777 !important;
    }

    .vue-tooltip.tooltip-custom .tooltip-arrow {
        border-color: whitesmoke !important;
    }

</style>

