import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventsComponent } from "../../navigation/pages/events/events.component";

const landingRoutes: Routes = [
	{ path: '', component: EventsComponent },
    { path: 'events', component: EventsComponent },
    // { path: 'home', component: HomeComponent },
]

@NgModule({
	imports: [RouterModule.forChild(landingRoutes)],
	exports: [RouterModule],
})
export class EventsRoutingModule { }