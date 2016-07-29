"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./hero/component/dashboard.component');
var heroes_component_1 = require('./hero/component/heroes.component');
var hero_detail_component_1 = require('./hero/component/hero-detail.component');
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }, {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }, {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map