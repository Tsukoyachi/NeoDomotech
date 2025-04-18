import { Route } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DevicesComponent } from "./devices/devices.component";
import { WorkflowsComponent } from "./workflows/workflows.component";
import { HomeComponent } from "./home/home.component";

export const appRoutes: Route[] = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "devices",
    component: DevicesComponent,
  },
  {
    path: "workflows",
    component: WorkflowsComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
  {
    path: "",
    component: HomeComponent,
  },
];
