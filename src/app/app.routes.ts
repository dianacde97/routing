import { Routes } from '@angular/router';
import { TeachRoutingComponent } from './teach-routing/teach-routing.component';
import { EnviarFormComponent } from './enviar-form/enviar-form.component';
import { MesageErrorComponent } from './mesage-error/mesage-error.component';

export const routes: Routes = [
{path: 'teach-routing', component: TeachRoutingComponent },
{path: 'enviar-form', component: EnviarFormComponent},
{path: 'message-error', component:MesageErrorComponent }

];


