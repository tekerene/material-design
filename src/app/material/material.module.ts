import { NgModule } from '@angular/core';
import { MatButtonModule,
   MatToolbarModule, 
   MatButtonToggleModule,
    MatIconModule,
     MatProgressSpinnerModule,
    MatSidenavModule,
    MatTabsModule,
    MatStepperModule
    } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge'

const MaterailComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTabsModule,
  MatStepperModule
];
@NgModule({
  declarations: [],
  imports: [MaterailComponents],
  exports: [MaterailComponents]
})
export class MaterialModule { }
