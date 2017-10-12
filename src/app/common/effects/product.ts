import { MdSnackBar } from '@angular/material';
import { ProductService } from './../../shared/services/product.service';
import * as ProductActions from './../actions/product';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

// TODO error handling

@Injectable()
export class ProductEffects {

  @Effect()
  public loadProducts$: Observable<Action> = this.actions$
    .ofType(ProductActions.LOAD_PRODUCTS)
    .switchMap(() => this._productService.getProducts())
    .map((products: Product[]) => new ProductActions.LoadProductsSuccess(products))
    .do(() => this._mdSnackBar.open('Products were loaded', '', {duration: 3000}));


  @Effect()
  public getProduct$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_PRODUCT)
    .map((action: any) => action.payload)
    .switchMap((id: string) => this._productService.getProduct(id))
    .map((product: Product) => new ProductActions.GetProductSuccess(product))
    .do(() => this._mdSnackBar.open('Product were loaded', '', {duration: 3000}));

  @Effect()
  public addProduct$: Observable<Action> = this.actions$
    .ofType(ProductActions.ADD_PRODUCT)
    .map((action: any) => action.payload)
    .switchMap((product: Product) => this._productService.addProduct(product))
    .map((product: Product) => new ProductActions.AddProductSuccess(product))
    .do(() => this._mdSnackBar.open('Products were loaded', '', {duration: 3000}));

  public constructor(
    private actions$: Actions,
    private _productService: ProductService,
    private _mdSnackBar: MdSnackBar
  ) {}
}
