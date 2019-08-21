import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventsComponent } from "./components/events/events.component";
import { EventsSelectionComponent } from "./components/events-selection/events-selection.component";

const landingRoutes: Routes = [
	{ path: '', component: EventsComponent },
	// { path: 'events', component: EventsComponent },
	{
		path: 'events',
		component: EventsComponent,
		children: [
			{ path: '', redirectTo: 'selection', pathMatch: 'full'},
			{ path: 'selection', component: EventsSelectionComponent },
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(landingRoutes)],
	exports: [RouterModule],
})
export class EventsRoutingModule { }