import { Routes } from '@angular/router';

import { BasicFormComponent } from './basic-form/basic-form.component';
import { SearchComponent } from './search/search.component';

export const FormsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'product/create',
        component: BasicFormComponent,
      },
      {
        path: 'product/search',
        component: SearchComponent,
      },
    ]
  }
];