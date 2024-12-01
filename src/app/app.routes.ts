import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/autenticacao/login/login.component';
import { RegistrarComponent } from './componentes/autenticacao/registrar/registrar.component';
import { TarefasComponent } from './componentes/tarefas/tarefas.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './componentes/autenticacao/AuthGuard';
import { FeaturesComponent } from './componentes/features/features.component';
import { AboutComponent } from './componentes/about/about.component';
import { AdicionarComponent } from './componentes/adicionar/adicionar.component';
import { EstatisticasComponent } from './componentes/estatisticas/estatisticas.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registrar', component: RegistrarComponent },
    { path: 'tarefas', component: TarefasComponent, canActivate:[AuthGuard] },
    { path: 'home', component: HomeComponent},
    { path: 'features', component: FeaturesComponent},
    { path: 'about', component: AboutComponent},
    { path: 'adicionar', component: AdicionarComponent},
    { path: 'estatisticas', component: EstatisticasComponent},
    { path: '', component: HomeComponent}   
];
