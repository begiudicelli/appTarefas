import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/autenticacao/login/login.component';
import { RegistrarComponent } from './componentes/autenticacao/registrar/registrar.component';
import { TarefasComponent } from './componentes/tarefas/tarefas.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './componentes/autenticacao/AuthGuard';
import { FeaturesComponent } from './componentes/features/features.component';
import { AboutComponent } from './componentes/about/about.component';
import { AdicionarComponent } from './componentes/adicionar/adicionar.component';
import { EstatisticasComponent } from './componentes/estatisticas/estatisticas.component';
import { NewListComponent } from './componentes/pages/new-list/new-list.component';
import { NewTaskComponent } from './componentes/pages/new-task/new-task.component';
import { NgModule } from '@angular/core';



export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registrar', component: RegistrarComponent },
    { path: 'tarefas', component: TarefasComponent, canActivate:[AuthGuard] },
    { path: 'home', component: HomeComponent},
    { path: 'features', component: FeaturesComponent},
    { path: 'about', component: AboutComponent},
    { path: 'adicionar', component: AdicionarComponent},
    { path: 'estatisticas', component: EstatisticasComponent},
    { path: '', component: HomeComponent},
    { path: 'new-list', component: NewListComponent },
    { path: 'lists', component: TarefasComponent},
    { path: 'lists/:listId', component: TarefasComponent},
    { path: 'lists/:listsId/new-task', component: NewTaskComponent },
    { path: '', redirectTo: 'lists', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
