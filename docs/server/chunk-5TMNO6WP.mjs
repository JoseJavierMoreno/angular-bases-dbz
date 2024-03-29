import './polyfills.server.mjs';
import{$ as w,A as l,B as G,C as Ce,D as Ve,E as f,F as De,G as h,H as A,I as be,J as N,K as Me,L as Ee,M as Ae,N as we,U as Fe,V as Ie,W as ee,Y as Se,Z as xe,_ as Ne,a as he,aa as Oe,b as fe,ba as Pe,c as pe,d as x,e as j,ea as ke,f as K,g as y,h as E,i as _,j as C,k as g,ka as Te,l as me,m as ge,n as ve,o as X,p as Y,q as J,r as p,s as a,t as ye,u as v,v as V,w as D,x as Q,y as _e,z as s}from"./chunk-QB4FZEMB.mjs";import{a as m,b as M}from"./chunk-KRLCULJA.mjs";var je=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=C({type:e}),e.\u0275inj=y({imports:[w]});let t=e;return t})();import Ct from"crypto";var H=new Uint8Array(256),U=H.length;function te(){return U>H.length-16&&(Ct.randomFillSync(H),U=0),H.slice(U,U+=16)}var c=[];for(let t=0;t<256;++t)c.push((t+256).toString(16).slice(1));function Ge(t,e=0){return c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]}import Vt from"crypto";var ie={randomUUID:Vt.randomUUID};function Dt(t,e,n){if(ie.randomUUID&&!e&&!t)return ie.randomUUID();t=t||{};let i=t.random||(t.rng||te)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=i[r];return e}return Ge(i)}var F=Dt;var Ue=(()=>{let e=class e{constructor(){this.characters=[{id:F(),name:"Krillin",power:1e3},{id:F(),name:"Goku",power:9500},{id:F(),name:"Vegeta",power:7500}]}addCharacter(i){let r=m({id:F()},i);this.characters.push(r)}deleteCharacterById(i){this.characters=this.characters.filter(r=>r.id!=i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Et=(t,e)=>({"list-group-item-dark":t,"list-group-item-primary":e});function At(t,e){if(t&1){let n=Ce();s(0,"li",2)(1,"div")(2,"span",3),h(3),l(),h(4," - "),s(5,"strong"),h(6,"Power: "),l(),s(7,"span"),h(8),l()(),s(9,"button",4),f("click",function(){let o=ge(n).$implicit,d=De();return ve(d.onDeleteCharacter(o.id))}),l()()}if(t&2){let n=e.$implicit,i=e.index,r=e.last,o=e.even;D("ngClass",Ee(4,Et,r,o)),p(3),be("",i,". ",n.name,""),p(5),A(n.power)}}var He=(()=>{let e=class e{constructor(){this.onDeleteId=new v,this.characterList=[{name:"Trunks",power:10}]}onDeleteCharacter(i){i&&(this.onDeleteId.emit(i),console.log({id:i}))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=_({type:e,selectors:[["app-dbz-list"]],inputs:{characterList:"characterList"},outputs:{onDeleteId:"onDeleteId"},decls:4,vars:1,consts:[[1,"list-group"],["class","list-group-item d-flex justify-content-between align-items-center",3,"ngClass",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","align-items-center",3,"ngClass"],[1,"text-primary"],[1,"btn","btn-danger",3,"click"]],template:function(r,o){r&1&&(s(0,"h4"),h(1,"Listado"),l(),s(2,"ul",0),_e(3,At,10,7,"li",1),l()),r&2&&(p(3),D("ngForOf",o.characterList))},dependencies:[Se,xe],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();var Ze=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(J),a(Y))},e.\u0275dir=g({type:e});let t=e;return t})(),Ke=(()=>{let e=class e extends Ze{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=X(e)))(o||e)}})(),e.\u0275dir=g({type:e,features:[V]});let t=e;return t})(),re=new E("NgValueAccessor");var Ft={provide:re,useExisting:x(()=>q),multi:!0};function It(){let t=ee()?ee().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var St=new E("CompositionEventMode"),q=(()=>{let e=class e extends Ze{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!It())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(J),a(Y),a(St,8))},e.\u0275dir=g({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&f("input",function(u){return o._handleInput(u.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(u){return o._compositionEnd(u.target.value)})},features:[N([Ft]),V]});let t=e;return t})();var Xe=new E("NgValidators"),Ye=new E("NgAsyncValidators");function Je(t){return t!=null}function Qe(t){return Ve(t)?he(t):t}function et(t){let e={};return t.forEach(n=>{e=n!=null?m(m({},e),n):e}),Object.keys(e).length===0?null:e}function tt(t,e){return e.map(n=>n(t))}function xt(t){return!t.validate}function it(t){return t.map(e=>xt(e)?e:n=>e.validate(n))}function Nt(t){if(!t)return null;let e=t.filter(Je);return e.length==0?null:function(n){return et(tt(n,e))}}function oe(t){return t!=null?Nt(it(t)):null}function Ot(t){if(!t)return null;let e=t.filter(Je);return e.length==0?null:function(n){let i=tt(n,e).map(Qe);return pe(i).pipe(fe(et))}}function se(t){return t!=null?Ot(it(t)):null}function Be(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Pt(t){return t._rawValidators}function kt(t){return t._rawAsyncValidators}function ne(t){return t?Array.isArray(t)?t:[t]:[]}function R(t,e){return Array.isArray(t)?t.includes(e):t===e}function Re(t,e){let n=ne(e);return ne(t).forEach(r=>{R(n,r)||n.push(r)}),n}function Le(t,e){return ne(e).filter(n=>!R(t,n))}var L=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=oe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=se(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},S=class extends L{get formDirective(){return null}get path(){return null}},T=class extends L{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},$=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Tt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Qi=M(m({},Tt),{"[class.ng-submitted]":"isSubmitted"}),nt=(()=>{let e=class e extends ${constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(T,2))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&Q("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[V]});let t=e;return t})(),rt=(()=>{let e=class e extends ${constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(S,10))},e.\u0275dir=g({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&Q("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[V]});let t=e;return t})();var O="VALID",B="INVALID",I="PENDING",P="DISABLED";function ot(t){return(Z(t)?t.validators:t)||null}function jt(t){return Array.isArray(t)?oe(t):t||null}function st(t,e){return(Z(e)?e.asyncValidators:t)||null}function Gt(t){return Array.isArray(t)?se(t):t||null}function Z(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ut(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new j(1e3,"");if(!i[n])throw new j(1001,"")}function Ht(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new j(1002,"")})}var W=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===O}get invalid(){return this.status===B}get pending(){return this.status==I}get disabled(){return this.status===P}get enabled(){return this.status!==P}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Re(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Re(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Le(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Le(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=I,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=P,this.errors=null,this._forEachChild(i=>{i.disable(M(m({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(M(m({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=O,this._forEachChild(i=>{i.enable(M(m({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(M(m({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===I)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?P:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=I,this._hasOwnPendingAsyncValidator=!0;let n=Qe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new v,this.statusChanges=new v}_calculateStatus(){return this._allControlsDisabled()?P:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(I)?I:this._anyControlsHaveStatus(B)?B:O}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=jt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Gt(this._rawAsyncValidators)}},z=class extends W{constructor(e,n,i){super(ot(n),st(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Ht(this,!0,e),Object.keys(e).forEach(i=>{Ut(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ae=new E("CallSetDisabledState",{providedIn:"root",factory:()=>le}),le="always";function Bt(t,e){return[...e.path,t]}function at(t,e,n=le){lt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Lt(t,e),Wt(t,e),$t(t,e),Rt(t,e)}function $e(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Rt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function lt(t,e){let n=Pt(t);e.validator!==null?t.setValidators(Be(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=kt(t);e.asyncValidator!==null?t.setAsyncValidators(Be(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();$e(e._rawValidators,r),$e(e._rawAsyncValidators,r)}function Lt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ut(t,e)})}function $t(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ut(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ut(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Wt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function zt(t,e){t==null,lt(t,e)}function qt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Zt(t){return Object.getPrototypeOf(t.constructor)===Ke}function Kt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Xt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===q?n=o:Zt(o)?i=o:r=o}),r||i||n||null}var Yt={provide:S,useExisting:x(()=>ue)},k=(()=>Promise.resolve())(),ue=(()=>{let e=class e extends S{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new v,this.form=new z({},oe(i),se(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){k.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),at(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){k.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){k.then(()=>{let r=this._findContainer(i.path),o=new z({});zt(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){k.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){k.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,Kt(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(a(Xe,10),a(Ye,10),a(ae,8))},e.\u0275dir=g({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&f("submit",function(u){return o.onSubmit(u)})("reset",function(){return o.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[N([Yt]),V]});let t=e;return t})();function We(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function ze(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Jt=class extends W{constructor(e=null,n,i){super(ot(n),st(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(n)&&(n.nonNullable||n.initialValueIsDefault)&&(ze(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){We(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){We(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ze(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Qt={provide:T,useExisting:x(()=>ce)},qe=(()=>Promise.resolve())(),ce=(()=>{let e=class e extends T{constructor(i,r,o,d,u,_t){super(),this._changeDetectorRef=u,this.callSetDisabledState=_t,this.control=new Jt,this._registered=!1,this.name="",this.update=new v,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Xt(this,d)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),qt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){at(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){qe.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Fe(r);qe.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Bt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(a(S,9),a(Xe,10),a(Ye,10),a(re,10),a(ye,8),a(ae,8))},e.\u0275dir=g({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[N([Qt]),V,me]});let t=e;return t})(),ct=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=g({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})(),ei={provide:re,useExisting:x(()=>de),multi:!0},de=(()=>{let e=class e extends Ke{writeValue(i){let r=i??"";this.setProperty("value",r)}registerOnChange(i){this.onChange=r=>{i(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=X(e)))(o||e)}})(),e.\u0275dir=g({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,o){r&1&&f("input",function(u){return o.onChange(u.target.value)})("blur",function(){return o.onTouched()})},features:[N([ei]),V]});let t=e;return t})();var ti=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=C({type:e}),e.\u0275inj=y({});let t=e;return t})();var ii=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=C({type:e}),e.\u0275inj=y({imports:[ti]});let t=e;return t})();var dt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ae,useValue:i.callSetDisabledState??le}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=C({type:e}),e.\u0275inj=y({imports:[ii]});let t=e;return t})();var ht=(()=>{let e=class e{constructor(){this.onNewCharacter=new v,this.character={name:"",power:0}}emitCharacter(){console.log(this.character),this.character.name.length!=0&&(this.onNewCharacter.emit(this.character),this.character={name:"",power:0})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=_({type:e,selectors:[["app-dbz-add-character"]],outputs:{onNewCharacter:"onNewCharacter"},decls:10,vars:5,consts:[[1,"row",3,"ngSubmit"],["type","text","name","name","placeholder","Nombre",1,"form-control","mb-2",3,"ngModel","ngModelChange"],["type","number","name","power","placeholder","Poder",1,"form-control","mb-2",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary"]],template:function(r,o){r&1&&(s(0,"h4"),h(1,"Agregar personajes"),l(),s(2,"form",0),f("ngSubmit",function(){return o.emitCharacter()}),s(3,"input",1),f("ngModelChange",function(u){return o.character.name=u}),l(),s(4,"input",2),f("ngModelChange",function(u){return o.character.power=u}),l(),s(5,"button",3),h(6," Agregar "),l(),s(7,"pre"),h(8),Ae(9,"json"),l()()),r&2&&(p(3),D("ngModel",o.character.name),p(1),D("ngModel",o.character.power),p(4),A(we(9,3,o.character)))},dependencies:[ct,q,de,nt,rt,ce,ue,Ne],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();var ft=(()=>{let e=class e{constructor(i){this.dbzService=i}get characters(){return[...this.dbzService.characters]}onDeleteCharacter(i){this.dbzService.deleteCharacterById(i)}onNewCharacter(i){this.dbzService.addCharacter(i)}};e.\u0275fac=function(r){return new(r||e)(a(Ue))},e.\u0275cmp=_({type:e,selectors:[["app-dbz-main-page"]],decls:8,vars:1,consts:[[1,"row"],[1,"col"],[3,"characterList","onDeleteId"],[3,"onNewCharacter"]],template:function(r,o){r&1&&(s(0,"h1"),h(1,"DBZ Personajes"),l(),G(2,"hr"),s(3,"div",0)(4,"div",1)(5,"app-dbz-list",2),f("onDeleteId",function(u){return o.onDeleteCharacter(u)}),l()(),s(6,"div",1)(7,"app-dbz-add-character",3),f("onNewCharacter",function(u){return o.onNewCharacter(u)}),l()()()),r&2&&(p(5),D("characterList",o.characters))},dependencies:[He,ht],encapsulation:2});let t=e;return t})();var pt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=C({type:e}),e.\u0275inj=y({imports:[w,dt]});let t=e;return t})();var mt=(()=>{let e=class e{constructor(){this.title="Mi primera app de Angular"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=_({type:e,selectors:[["app-root"]],standalone:!0,features:[Me],decls:4,vars:1,template:function(r,o){r&1&&(s(0,"h1"),h(1),l(),G(2,"hr")(3,"app-dbz-main-page")),r&2&&(p(1),A(o.title))},dependencies:[w,je,pt,ft]});let t=e;return t})();var gt=[];var vt={providers:[Te(gt),Pe()]};var si={providers:[ke()]},yt=Ie(vt,si);var ai=()=>Oe(mt,yt),On=ai;export{On as a};
