import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import { NotasComponent } from './notas/notas.component'
import { FaltasComponent } from './faltas/faltas.component'

export const ROUTES: Routes =[
  {path: '', component: HomeComponent},
  {path: 'notas', component: NotasComponent},
  {path: 'faltas', component: FaltasComponent},

]
