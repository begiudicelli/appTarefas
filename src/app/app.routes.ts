import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/autenticacao/login/login.component';
import { RegistrarComponent } from './componentes/autenticacao/registrar/registrar.component';
import { TarefasComponent } from './componentes/tarefas/tarefas.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registrar', component: RegistrarComponent },
    { path: 'tarefas', component: TarefasComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
