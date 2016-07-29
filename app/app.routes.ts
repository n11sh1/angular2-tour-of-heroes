import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './hero/component/dashboard.component';
import { HeroesComponent } from './hero/component/heroes.component';
import { HeroDetailComponent } from './hero/component/hero-detail.component';

const routes: RouterConfig = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	}, {
		path: 'dashboard',
		component: DashboardComponent
	}, {
		path: 'heroes',
		component: HeroesComponent
	}, {
		path: 'detail/:id',
		component: HeroDetailComponent
	}
];

export const appRouterProviders = [
	provideRouter(routes)
];
