import { Routes } from '@angular/router';
import { ValidationInputComponent } from './validation-input/validation-input.component';
import { RxjsConceptsComponent } from './rxjs-concepts/rxjs-concepts.component';

export const routes: Routes = [ {path:'validation-input',
  component:ValidationInputComponent

},
{
  path:'rxjs',
  component:RxjsConceptsComponent
}
];
