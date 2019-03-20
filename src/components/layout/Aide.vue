<template>
    <div id="pageBesoinAide">
        <div class="main-container">
            <header role="banner" id="page-contact"></header>
            <section>
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="region region-content">
                                    <section id="block-system-main-contact" class="block block-system clearfix">

                                        <div class="container" style="margin-bottom:10px;">

                                            <div>
                                                Besoin d'aide ?
                                            </div>
                                            <div>
                                                <a href="#form-contact" aria-expanded="false"
                                                   style="text-decoration: none; cursor: default;">
                                                    <i aria-hidden="false" class="fa fa-phone-square fa-lg"></i>
                                                </a>
                                                +41 840 235 235 (jours ouvrés)
                                            </div>
                                            <div>
                                                <a href="#form-contact" data-toggle="collapse" aria-expanded="false"
                                                   aria-controls="form-contact">
                                                    <i aria-hidden="false" class="fa fa-envelope-square fa-lg"></i>
                                                    Formulaire de contact
                                                </a>
                                            </div>


                                            <div style="margin-top:5px;">
                                                <form class="collapse" id="form-contact">

                                                    <div class="row">
                                                        <div class="col-md-5">
                                                            <div class="form-group required">
                                                                <label class="form-label" for="input01">Nom</label>
                                                                <div class="controls">
                                                                    <input id="input01"
                                                                           class="form-control input-small"
                                                                           type="text" maxlength="50"
                                                                           aria-describedby="helpBlock01"
                                                                           data-toggle="popover"
                                                                           data-original-title="" title="">
                                                                    <span id="helpBlock01"
                                                                          class="help-block help-block-content help-block-hidden">
                                                                        Aide au remplissage du champ NOM
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-5">
                                                            <div class="form-group required">
                                                                <label class="form-label"
                                                                       for="input02">Téléphone
                                                                </label>
                                                                <div class="controls">
                                                                    <input id="input02"
                                                                           class="form-control input-small"
                                                                           type="tel" maxlength="13"
                                                                           aria-describedby="helpBlock02"
                                                                           data-toggle="popover"
                                                                           pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                                                                           data-original-title="" title="">
                                                                    <span id="helpBlock02"
                                                                          class="help-block help-block-content help-block-hidden">
                                                                        Aide au remplissage du champ TELEPHONE
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-5">
                                                            <div class="form-group required">
                                                                <label class="form-label"
                                                                       for="input03">E-mail
                                                                </label>
                                                                <div class="controls">
                                                                    <input id="input03"
                                                                           class="form-control input-small"
                                                                           type="email" maxlength="50"
                                                                           aria-describedby="helpBlock03"
                                                                           data-toggle="popover"
                                                                           data-original-title="" title="">
                                                                    <span id="helpBlock03"
                                                                          class="help-block help-block-content help-block-hidden">
                                                                        Aide au remplissage du champ EMAIL
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-5">
                                                            <div class="form-group required">
                                                                <label class="form-label"
                                                                       for="input04">Message
                                                                </label>
                                                                <div class="controls">
                                                                    <textarea id="input04"
                                                                              class="form-control input-small"
                                                                              aria-describedby="helpBlock04"
                                                                              rows="3" data-toggle="popover"
                                                                              data-original-title=""
                                                                              title=""></textarea>
                                                                    <span id="helpBlock04"
                                                                          class="help-block help-block-content help-block-hidden">
                                                                        Aide au remplissage du champ MESSAGE
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="form-actions">
                                                        <button class="btn btn-primary" type="submit">Envoyer
                                                        </button>
                                                    </div>

                                                </form>
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
</template>

<script>
    export default {
        name: "Aide"
    }
</script>

<style scoped>

</style>
