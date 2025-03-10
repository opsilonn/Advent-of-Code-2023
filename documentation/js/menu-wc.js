'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">advent-of-code documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-c0a552f43add78962800953118590c3542361fb36a9908943de3899992b11047a7b5756eccac4826fb5b7c3b5b6cde9eb8cfad6e21dc9c200fd634af460e046f"' : 'data-bs-target="#xs-components-links-module-AppModule-c0a552f43add78962800953118590c3542361fb36a9908943de3899992b11047a7b5756eccac4826fb5b7c3b5b6cde9eb8cfad6e21dc9c200fd634af460e046f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c0a552f43add78962800953118590c3542361fb36a9908943de3899992b11047a7b5756eccac4826fb5b7c3b5b6cde9eb8cfad6e21dc9c200fd634af460e046f"' :
                                            'id="xs-components-links-module-AppModule-c0a552f43add78962800953118590c3542361fb36a9908943de3899992b11047a7b5756eccac4826fb5b7c3b5b6cde9eb8cfad6e21dc9c200fd634af460e046f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-c0a552f43add78962800953118590c3542361fb36a9908943de3899992b11047a7b5756eccac4826fb5b7c3b5b6cde9eb8cfad6e21dc9c200fd634af460e046f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-c0a552f43add78962800953118590c3542361fb36a9908943de3899992b11047a7b5756eccac4826fb5b7c3b5b6cde9eb8cfad6e21dc9c200fd634af460e046f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c0a552f43add78962800953118590c3542361fb36a9908943de3899992b11047a7b5756eccac4826fb5b7c3b5b6cde9eb8cfad6e21dc9c200fd634af460e046f"' :
                                        'id="xs-injectables-links-module-AppModule-c0a552f43add78962800953118590c3542361fb36a9908943de3899992b11047a7b5756eccac4826fb5b7c3b5b6cde9eb8cfad6e21dc9c200fd634af460e046f"' }>
                                        <li class="link">
                                            <a href="injectables/FileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Exercise.html" data-type="entity-link" >Exercise</a>
                            </li>
                            <li class="link">
                                <a href="classes/Exercise01Strategy.html" data-type="entity-link" >Exercise01Strategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Exercise01Strategy-1.html" data-type="entity-link" >Exercise01Strategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Exercise02Strategy.html" data-type="entity-link" >Exercise02Strategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Exercise02Strategy-1.html" data-type="entity-link" >Exercise02Strategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Exercise03Strategy.html" data-type="entity-link" >Exercise03Strategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Exercise03Strategy-1.html" data-type="entity-link" >Exercise03Strategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Exercise04Strategy.html" data-type="entity-link" >Exercise04Strategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Exercise05Strategy.html" data-type="entity-link" >Exercise05Strategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Exercise06Strategy.html" data-type="entity-link" >Exercise06Strategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Exercise07Strategy.html" data-type="entity-link" >Exercise07Strategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Exercise2023Helper.html" data-type="entity-link" >Exercise2023Helper</a>
                            </li>
                            <li class="link">
                                <a href="classes/Exercise2024Helper.html" data-type="entity-link" >Exercise2024Helper</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExerciseHelper.html" data-type="entity-link" >ExerciseHelper</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FileService.html" data-type="entity-link" >FileService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ExerciseStrategy.html" data-type="entity-link" >ExerciseStrategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Game.html" data-type="entity-link" >Game</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Game-1.html" data-type="entity-link" >Game</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Hand.html" data-type="entity-link" >Hand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Map.html" data-type="entity-link" >Map</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});