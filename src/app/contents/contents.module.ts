import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './contents.component';
import { ContentsMainComponent } from './contents.main/contents.main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../service/modal.service';
import { ModalHeaderComponent } from '../modal/modal.header/modal.header.component';
import { ModalAreaComponent } from '../modal/modal.area/modal.area.component';
import { ModalMenuComponent } from '../modal/modal.menu/modal.menu.component';
import { ModalMakerComponent } from '../modal/modal.maker/modal.maker.component';


const routes: Routes = [
  {
    path: 'contents', component: ContentsComponent,
    children: [
      {
        path: '', component: ContentsMainComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    ContentsComponent,
    ContentsMainComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalAreaComponent,
    ModalMenuComponent,
    ModalMakerComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ModalService],
  bootstrap: [],
  entryComponents: [
    ModalAreaComponent,
    ModalMenuComponent,
    ModalMakerComponent,
  ]
})
export class ContentsModule { }