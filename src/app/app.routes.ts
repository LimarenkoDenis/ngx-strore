import { ProductCreateComponent } from './product-create/product-create.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { CartComponent } from './cart/cart.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent},
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent},
  { path: 'form', component: FormDetailsComponent},
  {
    path: 'product-create',
    component: ProductCreateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', redirectTo: 'products' }
];




// {
//   "name": "ng2-store",
//   "version": "0.0.0",
//   "license": "MIT",
//   "scripts": {
//     "ng": "ng",
//     "start": "ng serve",
//     "build": "ng build",
//     "test": "ng test",
//     "lint": "ng lint",
//     "e2e": "ng e2e"
//   },
//   "private": true,
//   "dependencies": {
//     "@angular/animations": "^4.0.1",
//     "@angular/cdk": "github:angular/cdk-builds",
//     "@angular/common": "^4.0.1",
//     "@angular/compiler": "^4.0.1",
//     "@angular/core": "^4.0.1",
//     "@angular/flex-layout": "^2.0.0-rc.1",
//     "@angular/forms": "^4.0.1",
//     "@angular/http": "^4.0.1",
//     "@angular/material": "github:angular/material2-builds",
//     "@angular/platform-browser": "^4.0.1",
//     "@angular/platform-browser-dynamic": "^4.0.1",
//     "@angular/router": "^4.0.1",
//     "@ngrx/core": "^1.2.0",
//     "@ngrx/effects": "^4.0.1",
//     "@ngrx/store": "^4.0.0",
//     "@ngrx/store-devtools": "^3.2.4",
//     "angularfire2": "^4.0.0-rc.2",
//     "core-js": "^2.4.1",
//     "firebase": "^4.3.0",
//     "hammerjs": "^2.0.8",
//     "promise-polyfill": "6.0.2",
//     "rxjs": "^5.4.0",
//     "zone.js": "^0.8.5"
//   },
//   "devDependencies": {
//     "@angular/cli": "1.3.2",
//     "@angular/compiler-cli": "^4.0.1",
//     "@types/jasmine": "2.5.54",
//     "@types/node": "~8.0.26",
//     "codelyzer": "~3.1.2",
//     "jasmine-core": "~2.8.0",
//     "jasmine-spec-reporter": "~4.2.1",
//     "karma": "~1.7.1",
//     "karma-chrome-launcher": "~2.2.0",
//     "karma-cli": "~1.0.1",
//     "karma-coverage-istanbul-reporter": "^1.0.0",
//     "karma-jasmine": "~1.1.0",
//     "karma-jasmine-html-reporter": "^0.2.2",
//     "protractor": "~5.1.1",
//     "ts-node": "~3.3.0",
//     "tslint": "~5.7.0",
//     "typescript": "^2.4.0"
//   }
// }
