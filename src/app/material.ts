import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatCardModule,
            MatDividerModule,
            MatListModule,
            MatToolbarModule,
            MatExpansionModule,
            MatIconModule,
            MatTreeModule,
            MatSliderModule,
            MatFormFieldModule,
            MatInputModule,
            MatGridListModule,
            MatSlideToggleModule,
            MatRadioModule,
            MatSnackBarModule,
            MatMenuModule],
            
  exports: [MatButtonModule,
            MatCheckboxModule,
            MatCardModule,
            MatDividerModule,
            MatListModule,
            MatToolbarModule,
            MatExpansionModule,
            MatIconModule,
            MatTreeModule,
            MatSliderModule,
            MatFormFieldModule,
            MatInputModule,
            MatGridListModule,
            MatSlideToggleModule,
            MatRadioModule,
            MatMenuModule],
})
export class MaterialModule { }