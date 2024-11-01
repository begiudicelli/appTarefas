import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/autenticacao/login/login.component';
import { RegistrarComponent } from './componentes/autenticacao/registrar/registrar.component';
import { TarefasComponent } from './componentes/tarefas/tarefas.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './componentes/autenticacao/AuthGuard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registrar', component: RegistrarComponent },
    { path: 'tarefas', component: TarefasComponent, canActivate:[AuthGuard] },
    { path: '', component: HomeComponent},
    { path: '**', redirectTo: '' }
];
