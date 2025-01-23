import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StartComponent } from './game/start/start.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { QuestionComponent } from './game/start/question/question.component';
import { ResultComponent } from './game/start/result/result.component';



export const routes: Routes = [
  { path: '', component: MainComponent }, // Default route: MainComponent
  { path: 'game/start', component: StartComponent },
  { path: 'game/question', component: QuestionComponent },
  { path: 'game/result', component: ResultComponent },


]

