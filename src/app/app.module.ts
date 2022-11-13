import { ProductDetailsComponent } from './shopping/product-details/product-details.component';
import { CartDialogComponent } from './shopping/cart-dialog/cart-dialog.component';
import { CartButtonComponent } from './shopping/cart-button/cart-button.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { CheckoutComponent } from './shopping/checkout/checkout.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BakoSpaceComponent } from './bako-space/bako-space.component';
import { FooterComponent } from './footer/footer.component';
import { NewsSpaceComponent } from './news-space/news-space.component';
import { FaqComponent } from './faq/faq.component';
import { OrderComponent } from './order/order.component';
import { TechComponent } from './tech/tech.component';
import { NavbarListModule } from './navbar-list/navbar-list.module';

import { NavBakoComponent } from './navbar-list/nav-bako/nav-bako.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

import { CoreModule } from './core/core.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ClientMenuComponent } from './menu/client-menu/client-menu.component';
import { DealerComponent } from './dealer/dealer.component';

import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay'
import { SelfSaveDirective } from './order/self-save.directive';


import { 
	IgxIconModule,
	IgxButtonModule,
	IgxExpansionPanelModule,
	IgxInputGroupModule,
  IgxComboModule
 } from "igniteui-angular";
import { NavDealerComponent } from './navbar-list/nav-dealer/nav-dealer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BakoSpaceComponent,
    FooterComponent,
    NewsSpaceComponent,
    FaqComponent,
    OrderComponent,
    TechComponent,
    RegisteruserComponent,
    LoginuserComponent,
    CheckoutComponent,
    ChekoutComponent,
    OrderComponent,
    CartButtonComponent,
    CartDialogComponent,
    ProductDetailsComponent,
    TechComponent,
    ClientMenuComponent,
    
    DealerComponent,
    SelfSaveDirective,

    
    
  ],
  imports: [
    NgbModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    FlexModule,
    MatDialogModule,
    MatBadgeModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatMenuModule,
    CoreModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonToggleModule,
    NavbarListModule,
    MDBBootstrapModule.forRoot(),
    IgxIconModule,
	  IgxButtonModule,
	  IgxExpansionPanelModule,
	  IgxInputGroupModule,
    IgxComboModule

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,

  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }