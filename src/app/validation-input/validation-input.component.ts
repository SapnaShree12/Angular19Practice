import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-input',
  imports: [FormsModule,CommonModule],
  templateUrl: './validation-input.component.html',
  styleUrl: './validation-input.component.scss'
})
export class ValidationInputComponent {
  actor = { name: 'sapna' };

  // // Create the form control and its validations
  // nameControl = new FormControl(
  //   '',
  //   [Validators.required,
  //    Validators.minLength(4),
  //   ]
  // );

  // // Create form group
  // actorForm: FormGroup = new FormGroup({
  //   name: this.nameControl
  // });

}
