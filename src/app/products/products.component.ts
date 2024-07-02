import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource,MatTableModule} from '@angular/material/table';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'products',
  standalone: true,
  imports: [MatTableModule,MatFormFieldModule,MatInputModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  nombreForm: string="";

}
