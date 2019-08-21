import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navigation/pages/home/home.component';
import { MoonDashboardComponent } from './navigation/pages/moon-dashboard/moon-dashboard.component';
import { CosmoVisionComponent } from './navigation/pages/cosmo-vision/cosmo-vision.component';
import { MoondrumCommunityComponent } from './navigation/pages/moondrum-community/moondrum-community.component';
import { EventsComponent } from './modules/events/components/events/events.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'dashboard',
		component: MoonDashboardComponent,
	},
	{
		path: 'cosmo-vision',
		component: CosmoVisionComponent,
	},
	{
		path: 'moondrum-community',
		component: MoondrumCommunityComponent,
	},





];



@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }