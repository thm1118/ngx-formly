import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FormlyDatepickerTypeComponent } from './datepicker.type';

@NgModule({
  declarations: [FormlyDatepickerTypeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormlyModule.forChild({
      types: [{
        name: 'datepicker',
        component: FormlyDatepickerTypeComponent,
        wrappers: ['form-field'],
        defaultOptions: {
          templateOptions: {
            datepickerOptions: {},
          },
        },
      }],
    }),
  ],
})
export class FormlyMatDatepickerModule { }
