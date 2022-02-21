import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WelcomeComponent} from './welcome/welcome';
import {EmpathySurveyCmp} from './empathy-survey/empathy-survey';
import { TextSurveyCmp } from './text-survey/text-survey';
import { TextInstruction } from './text-survey/text-instruction';

const routes: Routes = [
  { path: 'text-survey', component: TextSurveyCmp },
  { path: 'text-instruction', component: TextInstruction },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
