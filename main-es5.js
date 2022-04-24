(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/fh3": function fh3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<div class=\"body\">\n   \n    \n      \n    <div class=\"login\">\n    \n      \n\n      <div>\n\n      <span class=\"sr-only\">Loading...</span>\n\n      </div>\n\n      <form [formGroup]=\"Res\" (ngSubmit)=\"Registro()\">\n\n      <div class=\"line\">\n      <img src =\"../../../assets/img/CoinBank.ico\" width = \"70\"  >\n      </div>\n            <h1>Register</h1>\n\n\n            <p class=\"text-muted\">Create your account</p>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"mat-icon usuario\"></i></span>\n              </div>\n              <input type=\"text\" class=\"form-control \" placeholder=\"Username\" autocomplete=\"off\" formControlName=\"username\" required>\n            </div>\n            \n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"mat-icon usuario\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"fullname\" autocomplete=\"off\" formControlName=\"full_name\" required>\n              </div>\n\n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"mat-icon usuario\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"cedula\" autocomplete=\"identidad\" formControlName=\"cedula\" required>\n              </div>\n\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"mat-icon email\"></i></span>\n              </div>\n              <input type=\"text\" class=\"form-control\" placeholder=\"email\" autocomplete=\"identidad\" formControlName=\"email\" required>\n              \n            </div>\n\n\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"mat-icon password\"></i></span>\n              </div>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"off\" formControlName=\"password\" required>\n            </div>\n\n\n            <div class=\"input-group mb-4\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"mat-icon password\"></i></span>\n              </div>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" autocomplete=\"off\" formControlName=\"password\" required>\n            </div>\n\n\n            <button type=\"submit\" class=\"btn btn-block btn-success\" [disabled] = \"Res.invalid\">Create Account</button>\n      </form>\n    </div>\n\n\n\n </div>   \n\n\n                  \n\n\n";
      /***/
    },

    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Python\Mi Pagina\Frontend_CoinBank\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "47Jg": function Jg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sidebar.component.css */
      "LkWS");
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "zvoc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ROUTES = [{
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'dashboard',
        "class": 'hola'
      }, {
        path: '/icons',
        title: 'Icons',
        icon: 'nc-diamond',
        "class": ''
      }, {
        path: '/maps',
        title: 'Pagos',
        icon: 'nc-money-coins',
        "class": ''
      }, {
        path: '/notifications',
        title: 'Notifications',
        icon: 'nc-bell-55',
        "class": ''
      }, {
        path: '/user',
        title: 'Perfil',
        icon: 'nc-single-02',
        "class": ''
      }, {
        path: '/table',
        title: 'Transacciones',
        icon: 'nc-tile-56',
        "class": ''
      }, {
        path: '/typography',
        title: 'Typography',
        icon: 'nc-caps-small',
        "class": ''
      }];

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent() {
          _classCallCheck(this, SidebarComponent);
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuItems = ROUTES.filter(function (menuItem) {
              return menuItem;
            });
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sidebar-cmp',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
        styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], SidebarComponent);
      /***/
    },

    /***/
    "550G": function G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fixed-plugin\">\n    <div class=\"show-dropdown\" ngbDropdown>\n        <a href=\"javascript:void(0)\" ngbDropdownToggle id=\"dropdownConfig\">\n          <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                    <span class=\"badge filter badge-light active\" [ngClass]=\"{'active':sidebarColor==='white'}\" (click)=\"changeSidebarColor('white')\"></span>\n                    <span class=\"badge filter badge-dark\" [ngClass]=\"{'active':sidebarColor==='black'}\" (click)=\"changeSidebarColor('black')\"></span>\n                </a>\n            </li>\n\n\t          <li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                    <span class=\"badge filter badge-primary\" [ngClass]=\"{'active':sidebarActiveColor==='primary'}\" (click)=\"changeSidebarActiveColor('primary')\"></span>\n                    <span class=\"badge filter badge-info\" [ngClass]=\"{'active':sidebarActiveColor==='info'}\" (click)=\"changeSidebarActiveColor('info')\"></span>\n                    <span class=\"badge filter badge-success\" [ngClass]=\"{'active':sidebarActiveColor==='success'}\" (click)=\"changeSidebarActiveColor('success')\"></span>\n                    <span class=\"badge filter badge-warning\" [ngClass]=\"{'active':sidebarActiveColor==='warning'}\" (click)=\"changeSidebarActiveColor('warning')\"></span>\n                    <span class=\"badge filter badge-danger active\" [ngClass]=\"{'active':sidebarActiveColor==='danger'}\" (click)=\"changeSidebarActiveColor('danger')\"></span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "5My1": function My1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function () {
        return FixedPluginModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fixedplugin.component */
      "Pqk8");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var FixedPluginModule = function FixedPluginModule() {
        _classCallCheck(this, FixedPluginModule);
      };

      FixedPluginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]],
        exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]]
      })], FixedPluginModule);
      /***/
    },

    /***/
    "5Rn6": function Rn6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "Mfq2");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_21__["TooltipModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["ModalModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["ModalModule"].forRoot(), _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_21__["TooltipModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"]],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbActiveModal"]],
        exports: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["ModalModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_21__["TooltipModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"]]
      })], MaterialModule);
      /***/
    },

    /***/
    "6KVm": function KVm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
        return TokenInterceptorService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _conexion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./conexion.service */
      "eMJK");

      var TokenInterceptorService = /*#__PURE__*/function () {
        function TokenInterceptorService(auth) {
          _classCallCheck(this, TokenInterceptorService);

          this.auth = auth;
        }

        _createClass(TokenInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            var tokenizeReq = req.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(this.auth.getToken())
              }
            });
            return next.handle(tokenizeReq);
          }
        }]);

        return TokenInterceptorService;
      }();

      TokenInterceptorService.ctorParameters = function () {
        return [{
          type: _conexion_service__WEBPACK_IMPORTED_MODULE_2__["ConexionService"]
        }];
      };

      TokenInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_conexion_service__WEBPACK_IMPORTED_MODULE_2__["ConexionService"]])], TokenInterceptorService);
      /***/
    },

    /***/
    "A3xY": function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "AK6u": function AK6u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"white\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer-cmp></footer-cmp>\n    </div>\n</div>\n<!-- <fixedplugin-cmp></fixedplugin-cmp> -->";
      /***/
    },

    /***/
    "AytR": function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "CpO+": function CpO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarModule", function () {
        return NavbarModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./navbar.component */
      "EtQq");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var NavbarModule = function NavbarModule() {
        _classCallCheck(this, NavbarModule);
      };

      NavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
      })], NavbarModule);
      /***/
    },

    /***/
    "D8EZ": function D8EZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "ywSW");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.css */
      "pG9d");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_servicios_conexion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/servicios/conexion.service */
      "eMJK");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(_snackBar, auth, fb, router) {
          _classCallCheck(this, LoginComponent);

          this._snackBar = _snackBar;
          this.auth = auth;
          this.fb = fb;
          this.router = router;
          this.cargando = false;
          this.Torm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ingresar",
          value: function ingresar() {
            var _this = this;

            var username = this.Torm.value.username;
            var password = this.Torm.value.password;
            console.log(this.Torm.value);
            this.auth.authpost(this.Torm.value).subscribe(function (res) {
              console.log(res);
              localStorage.setItem('token', res.access_token);
              _this.cargando = true;
              setTimeout(function () {
                _this.router.navigate(['dashboard']);
              }, 1500);
            });
          }
        }, {
          key: "error_decarga",
          value: function error_decarga() {
            var _this2 = this;

            this.cargando = true;
            setTimeout(function () {
              _this2.router.navigate(['dashboard']);
            }, 1500);
          }
        }, {
          key: "verificar",
          value: function verificar() {
            if (this.auth.loggedin()) {
              this.router.navigate(['/dashboard']);
            }

            return false;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
        }, {
          type: app_servicios_conexion_service__WEBPACK_IMPORTED_MODULE_6__["ConexionService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], app_servicios_conexion_service__WEBPACK_IMPORTED_MODULE_6__["ConexionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], LoginComponent);
      /***/
    },

    /***/
    "EtQq": function EtQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./style.css */
      "Kgpv");
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "zRkE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../sidebar/sidebar.component */
      "47Jg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(location, renderer, element, router) {
          _classCallCheck(this, NavbarComponent);

          this.renderer = renderer;
          this.element = element;
          this.router = router;
          this.isCollapsed = true;
          this.location = location;
          this.nativeElement = element.nativeElement;
          this.sidebarVisible = false;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].filter(function (listTitle) {
              return listTitle;
            });
            var navbar = this.element.nativeElement;
            this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
            this.router.events.subscribe(function (event) {
              _this3.sidebarClose();
            });
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            var titlee = this.location.prepareExternalUrl(this.location.path());

            if (titlee.charAt(0) === '#') {
              titlee = titlee.slice(1);
            }

            for (var item = 0; item < this.listTitles.length; item++) {
              if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
              }
            }

            return 'Dashboard';
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            if (this.sidebarVisible === false) {
              this.sidebarOpen();
            } else {
              this.sidebarClose();
            }
          }
        }, {
          key: "sidebarOpen",
          value: function sidebarOpen() {
            var toggleButton = this.toggleButton;
            var html = document.getElementsByTagName('html')[0];
            var mainPanel = document.getElementsByClassName('main-panel')[0];
            setTimeout(function () {
              toggleButton.classList.add('toggled');
            }, 500);
            html.classList.add('nav-open');

            if (window.innerWidth < 991) {
              mainPanel.style.position = 'fixed';
            }

            this.sidebarVisible = true;
          }
        }, {
          key: "sidebarClose",
          value: function sidebarClose() {
            var html = document.getElementsByTagName('html')[0];
            var mainPanel = document.getElementsByClassName('main-panel')[0];

            if (window.innerWidth < 991) {
              setTimeout(function () {
                mainPanel.style.position = '';
              }, 500);
            }

            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            html.classList.remove('nav-open');
          }
        }, {
          key: "collapse",
          value: function collapse() {
            this.isCollapsed = !this.isCollapsed;
            var navbar = document.getElementsByTagName('nav')[0];
            console.log(navbar);

            if (!this.isCollapsed) {
              navbar.classList.remove('navbar-transparent');
              navbar.classList.add('bg-white');
            } else {
              navbar.classList.add('navbar-transparent');
              navbar.classList.remove('bg-white');
            }
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      NavbarComponent.propDecorators = {
        button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["navbar-cmp", {
            "static": false
          }]
        }]
      };
      NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'navbar-cmp',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
        styles: [_style_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], NavbarComponent);
      /***/
    },

    /***/
    "IkMA": function IkMA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProtegerGuard", function () {
        return ProtegerGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _servicios_conexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./servicios/conexion.service */
      "eMJK");

      var ProtegerGuard = /*#__PURE__*/function () {
        function ProtegerGuard(router, auth) {
          _classCallCheck(this, ProtegerGuard);

          this.router = router;
          this.auth = auth;
        }

        _createClass(ProtegerGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (this.auth.loggedin()) {
              return true;
            }

            this.router.navigate(['/login']);
            return false;
          }
        }]);

        return ProtegerGuard;
      }();

      ProtegerGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _servicios_conexion_service__WEBPACK_IMPORTED_MODULE_3__["ConexionService"]
        }];
      };

      ProtegerGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _servicios_conexion_service__WEBPACK_IMPORTED_MODULE_3__["ConexionService"]])], ProtegerGuard);
      /***/
    },

    /***/
    "JqLZ": function JqLZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('./assets/img/salto_angel.jpg');\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"motto text-center\">\n            <h1>CoinBank</h1>\n            <h3>Transacciones rapidas y seguras </h3>\n            <br />\n            <div class=\"d-grid gap-2 main3\">\n                <a class=\"btn btn-outline-neutral  btn-round main2\" type=\"button\"><i class=\"nc-icon nc-bank\"></i> Entrar</a>\n                <a class=\"btn btn-outline-neutral  btn-round main2\" type=\"button\"><i class=\"nc-icon nc-bank\"></i> Registrate</a>\n              </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"main\">\n    <div class=\"section text-center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <h2 class=\"title\">Hablemos de nuestro producto</h2>\n                <h5 class=\"description\">Coinbank es una app de pago rápida y eficiente hecha para los venezolanos </h5>\n                <br>\n                <a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">Ver detalles</a>\n            </div>\n        </div>\n        <br/><br/>\n        <div class=\"row main3 \">\n            <div class=\"col-md-3 main3\">\n                <div class=\"main3 \">\n                    <div class=\"icon icon-danger main3\">\n                        <i class=\"nc-icon nc-bulb-63\"></i>\n                    </div>\n                    <div class=\"description main3\">\n                        <h4 class=\"info-title\">Nuevas ideas</h4>\n                        <p>Más rápida, Más moderna, notablemente eficiente desde el punto de vista informático.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n           \n            </div>\n        </div>\n\n    </div>\n</div>";
      /***/
    },

    /***/
    "Kgpv": function Kgpv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvc3R5bGUuY3NzIn0= */";
      /***/
    },

    /***/
    "LkWS": function LkWS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".hola{\r\n    font-size: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob2xhe1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "NqKt": function NqKt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckloginGuard", function () {
        return CheckloginGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _servicios_conexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./servicios/conexion.service */
      "eMJK");

      var CheckloginGuard = /*#__PURE__*/function () {
        function CheckloginGuard(router, auth) {
          _classCallCheck(this, CheckloginGuard);

          this.router = router;
          this.auth = auth;
        }

        _createClass(CheckloginGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (this.auth.loggedin()) {
              this.router.navigate(['/dashboard']);
            } else {
              return true;
            }
          }
        }]);

        return CheckloginGuard;
      }();

      CheckloginGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _servicios_conexion_service__WEBPACK_IMPORTED_MODULE_3__["ConexionService"]
        }];
      };

      CheckloginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _servicios_conexion_service__WEBPACK_IMPORTED_MODULE_3__["ConexionService"]])], CheckloginGuard);
      /***/
    },

    /***/
    "P6kD": function P6kD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
        return AdminLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-layout.component.html */
      "AK6u");
      /* harmony import */


      var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-layout.component.scss */
      "vtrx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent() {
          _classCallCheck(this, AdminLayoutComponent);
        }

        _createClass(AdminLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminLayoutComponent;
      }();

      AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-layout',
        template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminLayoutComponent);
      /***/
    },

    /***/
    "Pqk8": function Pqk8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function () {
        return FixedPluginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./fixedplugin.component.html */
      "550G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FixedPluginComponent = /*#__PURE__*/function () {
        function FixedPluginComponent() {
          _classCallCheck(this, FixedPluginComponent);

          this.sidebarColor = "white";
          this.sidebarActiveColor = "danger";
          this.state = true;
        }

        _createClass(FixedPluginComponent, [{
          key: "changeSidebarColor",
          value: function changeSidebarColor(color) {
            var sidebar = document.querySelector('.sidebar');
            this.sidebarColor = color;

            if (sidebar != undefined) {
              sidebar.setAttribute('data-color', color);
            }
          }
        }, {
          key: "changeSidebarActiveColor",
          value: function changeSidebarActiveColor(color) {
            var sidebar = document.querySelector('.sidebar');
            this.sidebarActiveColor = color;

            if (sidebar != undefined) {
              sidebar.setAttribute('data-active-color', color);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FixedPluginComponent;
      }();

      FixedPluginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'fixedplugin-cmp',
        template: _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FixedPluginComponent);
      /***/
    },

    /***/
    "Sy1n": function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu": function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "YQZ2": function YQZ2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main2{\r\n    text-align: center;\r\n   \r\n    \r\n}\r\n\r\n.main3{\r\n    \r\n    justify-content:center\r\n    \r\n    \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7OztBQUd0Qjs7QUFFQTs7SUFFSTs7O0FBR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgXHJcbiAgICBcclxufVxyXG5cclxuLm1haW4ze1xyXG4gICAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyXHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "ZAI4": function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sidebar/sidebar.module */
      "wCP4");
      /* harmony import */


      var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/footer/footer.module */
      "cNqA");
      /* harmony import */


      var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/navbar/navbar.module */
      "CpO+");
      /* harmony import */


      var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/fixedplugin/fixedplugin.module */
      "5My1");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "P6kD");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _Modulos_material_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./Modulos/material/material.module */
      "5Rn6");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _servicios_token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./servicios/token-interceptor.service */
      "6KVm");
      /* harmony import */


      var _proteger_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./proteger.guard */
      "IkMA");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "Mfq2");
      /* harmony import */


      var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/register/register.component */
      "fNfI");
      /* harmony import */


      var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./pages/landing/landing.component */
      "fsYz");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/service-worker */
      "Jho9");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"], _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_22__["LandingComponent"]],
        imports: [ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _Modulos_material_material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"], _app_routing__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__["SidebarModule"], _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__["NavbarModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(), _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"], _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_7__["FixedPluginModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].production
        })],
        providers: [_proteger_guard__WEBPACK_IMPORTED_MODULE_19__["ProtegerGuard"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
          useClass: _servicios_token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptorService"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "beVS": function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
        return AppRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _checklogin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checklogin.guard */
      "NqKt");
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "P6kD");
      /* harmony import */


      var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/landing/landing.component */
      "fsYz");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/register/register.component */
      "fNfI");
      /* harmony import */


      var _proteger_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./proteger.guard */
      "IkMA");

      var AppRoutes = [{
        path: '',
        redirectTo: 'landing',
        pathMatch: "full"
      }, {
        path: 'register',
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        canActivate: [_checklogin_guard__WEBPACK_IMPORTED_MODULE_3__["CheckloginGuard"]]
      }, {
        path: 'landing',
        component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
        canActivate: [_checklogin_guard__WEBPACK_IMPORTED_MODULE_3__["CheckloginGuard"]]
      }, {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        canActivate: [_checklogin_guard__WEBPACK_IMPORTED_MODULE_3__["CheckloginGuard"]]
      }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | layouts-admin-layout-admin-layout-module */
          "layouts-admin-layout-admin-layout-module").then(__webpack_require__.bind(null,
          /*! ./layouts/admin-layout/admin-layout.module */
          "IqXj")).then(function (x) {
            return x.AdminLayoutModule;
          });
        },
        canActivate: [_proteger_guard__WEBPACK_IMPORTED_MODULE_8__["ProtegerGuard"]]
      }, {
        path: "**",
        redirectTo: 'dashboard',
        pathMatch: "full",
        canActivate: [_proteger_guard__WEBPACK_IMPORTED_MODULE_8__["ProtegerGuard"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(AppRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "cNqA": function cNqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
        return FooterModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer.component */
      "jQpT");

      var FooterModule = function FooterModule() {
        _classCallCheck(this, FooterModule);
      };

      FooterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
      })], FooterModule);
      /***/
    },

    /***/
    "crnd": function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "eMJK": function eMJK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConexionService", function () {
        return ConexionService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ConexionService = /*#__PURE__*/function () {
        function ConexionService(http) {
          _classCallCheck(this, ConexionService);

          this.http = http;
          this.heroesUrl = 'http://192.168.0.182:4136/';
          this.login = 'login';
        }

        _createClass(ConexionService, [{
          key: "User",
          value: function User() {
            return this.http.get(this.heroesUrl + 'user');
          }
        }, {
          key: "Amigos",
          value: function Amigos() {
            return this.http.get(this.heroesUrl + 'amigos');
          }
        }, {
          key: "Transacciones",
          value: function Transacciones() {
            return this.http.get(this.heroesUrl + 'transacciones');
          }
        }, {
          key: "authpost",
          value: function authpost(user) {
            return this.http.post(this.heroesUrl + this.login, user);
          }
        }, {
          key: "pagar",
          value: function pagar(_pagar) {
            return this.http.post(this.heroesUrl + 'new_pago', _pagar);
          }
        }, {
          key: "register",
          value: function register(_register) {
            return this.http.post(this.heroesUrl + 'Usercifrados', _register);
          }
        }, {
          key: "loggedin",
          value: function loggedin() {
            return !!localStorage.getItem('token');
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem('token');
          }
        }]);

        return ConexionService;
      }();

      ConexionService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ConexionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ConexionService);
      /***/
    },

    /***/
    "fNfI": function fNfI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "/fh3");
      /* harmony import */


      var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.component.css */
      "fr55");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_servicios_conexion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/servicios/conexion.service */
      "eMJK");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(register, fb, router) {
          _classCallCheck(this, RegisterComponent);

          this.register = register;
          this.fb = fb;
          this.router = router;
          this.Res = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            full_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            cedula: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "Registro",
          value: function Registro() {
            var username = this.Res.value.username;
            var password = this.Res.value.password;
            console.log(this.Res.value);
            this.register.register(this.Res.value).subscribe(function (res) {
              console.log(res);
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: app_servicios_conexion_service__WEBPACK_IMPORTED_MODULE_6__["ConexionService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_servicios_conexion_service__WEBPACK_IMPORTED_MODULE_6__["ConexionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], RegisterComponent);
      /***/
    },

    /***/
    "fr55": function fr55(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".body{\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 100%;\r\n    align-items: center;\r\n    background-color:#f5f5f5;\r\n}\r\n\r\n.login{\r\n    align-items: center;\r\n    width: 100%;\r\n    max-width: 330px;\r\n    text-align: center;\r\n}\r\n\r\n.ancho{\r\n    \r\n    width: 100%;\r\n    color: #f5f5f5;\r\n    margin: 10px 1px;\r\n    border-radius: 12px;\r\n    height: 47px;\r\n\r\n    \r\n}\r\n\r\n.spinner{\r\n    width: 3rem; \r\n    height: 3rem;\r\n    margin: 0 auto;\r\n}\r\n\r\n.entrada{\r\n    border-radius: 12px;\r\n    \r\n\r\n}\r\n\r\n.line{\r\n    caret-color: red;\r\n    margin-left: 116px;\r\n    margin-right: 100px;\r\n}\r\n\r\n.color7{\r\n    color:black;\r\n}\r\n\r\n.icon{\r\n \r\n    justify-content: center;\r\n    height: 100%;\r\n    margin-left: -2px;\r\n    margin-right: 2px;\r\n    \r\n  \r\n    \r\n    \r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7OztBQUdoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjs7O0FBR3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCOzs7Ozs7QUFNckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O1xyXG59XHJcblxyXG4ubG9naW57XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYW5jaG97XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBtYXJnaW46IDEwcHggMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGhlaWdodDogNDdweDtcclxuXHJcbiAgICBcclxufVxyXG5cclxuLnNwaW5uZXJ7XHJcbiAgICB3aWR0aDogM3JlbTsgXHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmVudHJhZGF7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4ubGluZXtcclxuICAgIGNhcmV0LWNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uY29sb3I3e1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBcclxuICBcclxuICAgIFxyXG4gICAgXHJcblxyXG59Il19 */";
      /***/
    },

    /***/
    "fsYz": function fsYz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return LandingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./landing.component.html */
      "JqLZ");
      /* harmony import */


      var _landing_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./landing.component.css */
      "YQZ2");
      /* harmony import */


      var _buttons_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./buttons.component.scss */
      "fzLn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LandingComponent = /*#__PURE__*/function () {
        function LandingComponent() {
          _classCallCheck(this, LandingComponent);
        }

        _createClass(LandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LandingComponent;
      }();

      LandingComponent.ctorParameters = function () {
        return [];
      };

      LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-landing',
        template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_landing_component_css__WEBPACK_IMPORTED_MODULE_2__["default"], _buttons_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LandingComponent);
      /***/
    },

    /***/
    "fzLn": function fzLn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*      light colors - used for select dropdown         */\n/*      light colors - used for select dropdown         */\n.bootstrap-switch {\n  display: inline-block;\n  direction: ltr;\n  cursor: pointer;\n  border-radius: 30px;\n  border: 0;\n  position: relative;\n  text-align: left;\n  overflow: hidden;\n  margin-bottom: 5px;\n  line-height: 8px;\n  margin-right: 3px;\n  width: 61px !important;\n  height: 26px;\n  outline: none;\n  z-index: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.bootstrap-switch .bootstrap-switch-container {\n  display: inline-flex;\n  top: 0;\n  height: 26px;\n  border-radius: 4px;\n  transform: translate3d(0, 0, 0);\n  width: 100px !important;\n}\n.bootstrap-switch .bootstrap-switch-handle-on,\n.bootstrap-switch .bootstrap-switch-handle-off,\n.bootstrap-switch .bootstrap-switch-label {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block !important;\n  height: 100%;\n  color: #fff;\n  padding: 6px 12px;\n  font-size: 11px;\n  text-indent: -5px;\n  line-height: 15px;\n  transition: 0.25s ease-out;\n}\n.bootstrap-switch .bootstrap-switch-handle-on,\n.bootstrap-switch .bootstrap-switch-handle-off {\n  text-align: center;\n  z-index: 1;\n  float: left;\n  width: 50% !important;\n  background-color: #66615B;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-primary,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-primary {\n  color: #fff;\n  background: #51cbce;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-info,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-info {\n  color: #fff;\n  background: #447DF7;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-success,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-success {\n  color: #fff;\n  background: #7AC29A;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-warning,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-warning {\n  background: #FFA534;\n  color: #fff;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-danger,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-danger {\n  color: #fff;\n  background: #FB404B;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-default,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-default {\n  color: #fff;\n  background: #cfcfca;\n}\n.bootstrap-switch .bootstrap-switch-label {\n  text-align: center;\n  z-index: 100;\n  color: #333333;\n  background: #ffffff;\n  width: 22px !important;\n  height: 22px;\n  margin: 2px -11px;\n  border-radius: 12px;\n  position: relative;\n  float: left;\n  padding: 0;\n  background-color: #FFFFFF;\n  box-shadow: 0 1px 1px #FFFFFF inset, 0 1px 1px rgba(0, 0, 0, 0.25);\n}\n.bootstrap-switch .bootstrap-switch-handle-on {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.bootstrap-switch .bootstrap-switch-handle-off {\n  text-indent: 6px;\n}\n.bootstrap-switch input[type=radio],\n.bootstrap-switch input[type=checkbox] {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  z-index: -1;\n}\n.bootstrap-switch input[type=radio].form-control,\n.bootstrap-switch input[type=checkbox].form-control {\n  height: auto;\n}\n.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-label {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-label {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-label {\n  padding: 6px 16px;\n  font-size: 18px;\n  line-height: 1.33;\n}\n.bootstrap-switch.bootstrap-switch-disabled,\n.bootstrap-switch.bootstrap-switch-readonly,\n.bootstrap-switch.bootstrap-switch-indeterminate {\n  cursor: default !important;\n}\n.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-label,\n.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-label,\n.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-label {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  cursor: default !important;\n}\n.bootstrap-switch.bootstrap-switch-animate .bootstrap-switch-container {\n  transition: margin-left 0.5s;\n}\n.bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-on {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-off {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.bootstrap-switch.bootstrap-switch-on .bootstrap-switch-container {\n  margin-left: -2px !important;\n}\n.bootstrap-switch.bootstrap-switch-off .bootstrap-switch-container {\n  margin-left: -37px !important;\n}\n.bootstrap-switch.bootstrap-switch-on:hover .bootstrap-switch-label {\n  width: 26px !important;\n  margin: 2px -15px;\n}\n.bootstrap-switch.bootstrap-switch-off:hover .bootstrap-switch-label {\n  width: 26px !important;\n  margin: 2px -15px -13px -11px;\n}\n.bootstrap-switch.bootstrap-switch-on .bootstrap-switch-handle-off {\n  background-color: #66615B;\n}\n.bootstrap-switch.bootstrap-switch-off .bootstrap-switch-handle-on {\n  background-color: #cfcfca;\n}\n.bootstrap-switch.bootstrap-switch-on .bootstrap-switch-danger ~ .bootstrap-switch-default {\n  background-color: #FB404B;\n}\n.bootstrap-switch.bootstrap-switch-on .bootstrap-switch-warning ~ .bootstrap-switch-default {\n  background-color: #FFA534;\n}\n.bootstrap-switch.bootstrap-switch-on .bootstrap-switch-success ~ .bootstrap-switch-default {\n  background-color: #7AC29A;\n}\n.bootstrap-switch.bootstrap-switch-on .bootstrap-switch-primary ~ .bootstrap-switch-default {\n  background-color: #51cbce;\n}\n.bootstrap-switch.bootstrap-switch-on .bootstrap-switch-info ~ .bootstrap-switch-default {\n  background-color: #447DF7;\n}\n.bootstrap-switch.bootstrap-switch-off .bootstrap-switch-danger,\n.bootstrap-switch.bootstrap-switch-off .bootstrap-switch-primary,\n.bootstrap-switch.bootstrap-switch-off .bootstrap-switch-info,\n.bootstrap-switch.bootstrap-switch-off .bootstrap-switch-warning,\n.bootstrap-switch.bootstrap-switch-off .bootstrap-switch-success {\n  background-color: #cfcfca;\n}\n/*      light colors - used for select dropdown         */\n.landing-alert {\n  margin-bottom: 0;\n}\n.page-header {\n  background-color: #B2AFAB;\n  background-position: center center;\n  background-size: cover;\n  min-height: 100vh;\n  max-height: 999px;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  z-index: 1;\n  display: flex;\n  /* Center vertically */\n  align-items: center;\n  /*Center horizontaly */\n  justify-content: center;\n  /*Center horizontaly ie */\n  -ms-flex-pack: center;\n}\n.page-header .filter::after {\n  background-color: rgba(0, 0, 0, 0.5);\n  content: \"\";\n  display: block;\n  height: 100%;\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n}\n.page-header.page-header-small {\n  min-height: 65vh !important;\n  max-height: 700px;\n}\n.page-header.page-header-xs {\n  min-height: 40vh !important;\n}\n.page-header.section-dark .content-center,\n.page-header.section-dark .category-absolute {\n  z-index: 1;\n}\n.page-header .motto {\n  text-align: left;\n  z-index: 3;\n  color: #fff;\n  position: relative;\n}\n.landing-section {\n  padding: 100px 0;\n  z-index: 1;\n}\n.section-buttons {\n  z-index: 1;\n}\n.landing-section .btn-simple {\n  padding: 0;\n}\n.landing-section .column {\n  padding: 0 75px 0 25px;\n}\n.team-player .img-circle, .team-player .img-thumbnail {\n  display: block;\n  margin-top: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 120px;\n}\n.contact-form {\n  margin-top: 30px;\n}\n.contact-form label {\n  margin-top: 15px;\n}\n.contact-form .btn {\n  margin-top: 30px;\n}\n.navbar-relative {\n  position: relative;\n  z-index: 2;\n}\n#register-navbar a {\n  color: #FFF;\n}\n.register-background .container {\n  margin-top: 11%;\n  position: relative;\n  z-index: 3;\n}\n.register-footer {\n  bottom: 20px;\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  background: transparent;\n  color: #FFFFFF;\n  left: 0;\n}\n.register-footer .fa-heart {\n  color: #EB5E28;\n}\n.register-card label {\n  margin-top: 15px;\n}\n.register-card .title {\n  color: #B33C12;\n  text-align: center;\n}\n.register-card .btn {\n  margin-top: 30px;\n}\n.register-card .forgot {\n  text-align: center;\n}\n.profile-content {\n  position: relative;\n}\n.owner {\n  text-align: center;\n}\n.owner .avatar {\n  padding: 15px;\n  max-width: 180px;\n  margin: -85px auto 0;\n  display: inline-block;\n}\n.owner .name h4 {\n  margin-top: 10px;\n}\n.profile-tabs {\n  margin: 50px 0;\n  min-height: 300px;\n}\n#following h3 {\n  margin: 20px 0 40px 0;\n}\n#follows .follows .unfollow .checkbox {\n  margin-top: -15px;\n}\n#follows .follows h6 {\n  margin-top: 15px;\n}\n.follows hr {\n  margin-top: 10px;\n}\n.title-brand {\n  max-width: 730px;\n  margin: 0 auto;\n  position: relative;\n  text-align: center;\n  color: #FFFFFF;\n  display: block;\n}\n.title-brand .type {\n  position: absolute;\n  font-size: 20px;\n  background: #132026;\n  padding: 6px 10px;\n  border-radius: 4px;\n  top: 0;\n  font-weight: 600;\n  margin-top: 10px;\n  right: -15px;\n}\n.presentation-title {\n  font-size: 8em;\n  font-weight: 700;\n  margin: 0;\n  color: #FFFFFF;\n  background: linear-gradient(to bottom, #FFFFFF 35%, #4e6773 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.presentation-subtitle {\n  font-size: 1.7em;\n  color: #FFFFFF;\n}\n.category-absolute {\n  position: absolute;\n  text-align: center;\n  top: 100vh;\n  margin-top: -60px;\n  padding: 0 15px;\n  width: 100%;\n  color: rgba(255, 255, 255, 0.5);\n}\n.category-absolute .creative-tim-logo {\n  max-width: 140px;\n  top: -2px;\n  left: 3px;\n  position: relative;\n}\n.fog-low {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  margin-left: -35%;\n  margin-bottom: -50px;\n  width: 110%;\n  opacity: 0.85;\n}\n.fog-low img {\n  width: 100%;\n}\n.fog-low.right {\n  margin-left: 30%;\n  opacity: 1;\n}\n.angular-logo {\n  max-width: 90px;\n  margin: -50px auto 45px;\n}\n.angular-logo img {\n  width: 100%;\n}\n.moving-clouds {\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  left: 0;\n  width: 250.625em;\n  height: 43.75em;\n  -webkit-animation: cloudLoop 80s linear infinite;\n  animation: cloudLoop 80s linear infinite;\n}\n@-webkit-keyframes cloudLoop {\n  0% {\n    transform: translate3d(0, 0, 0);\n  }\n  100% {\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n@keyframes cloudLoop {\n  0% {\n    transform: translate3d(0, 0, 0);\n  }\n  100% {\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n.following img {\n  max-width: 70px;\n}\n.ie-background .page-header .content-center {\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  -ms-transform: translate(-50%, -75%);\n}\n.ie-background .page-header .content-center .title-brand .presentation-title {\n  background: none;\n}\n@media (max-width: 500px) {\n  .presentation-title {\n    font-size: 5em;\n  }\n}\n/*          Changes for small display      */\n/*      light colors - used for select dropdown         */\n@media (max-width: 767px) {\n  .navbar-transparent {\n    background-color: rgba(0, 0, 0, 0.45);\n  }\n\n  body {\n    position: relative;\n    font-size: 12px;\n  }\n\n  h6 {\n    font-size: 1em;\n  }\n\n  .navbar .container {\n    left: 0;\n    width: 100%;\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    position: relative;\n  }\n\n  .navbar .navbar-nav .dropdown-menu {\n    height: 400px;\n    overflow-y: scroll;\n  }\n\n  .demo-header .motto {\n    padding-top: 30% !important;\n  }\n\n  .navbar-toggle .icon-bar {\n    display: block;\n    position: relative;\n    background: #fff;\n    width: 24px;\n    height: 2px;\n    border-radius: 1px;\n    margin: 0 auto;\n  }\n\n  .fog-low {\n    margin-bottom: -35px;\n  }\n\n  .presentation-title {\n    font-size: 5em;\n  }\n\n  .presentation-subtitle {\n    margin-top: 40px;\n  }\n\n  .title-brand {\n    max-width: 450px;\n  }\n  .title-brand .type {\n    font-size: 16px;\n  }\n\n  .navbar-header .navbar-toggle {\n    margin-top: 12px;\n    width: 40px;\n    height: 40px;\n  }\n\n  .bar1,\n.bar2,\n.bar3 {\n    outline: 1px solid transparent;\n  }\n\n  .bar1 {\n    top: 0px;\n    -webkit-animation: topbar-back 500ms linear 0s;\n    animation: topbar-back 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n\n  .bar2 {\n    opacity: 1;\n  }\n\n  .bar3 {\n    bottom: 0px;\n    -webkit-animation: bottombar-back 500ms linear 0s;\n    animation: bottombar-back 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n\n  .toggled .bar1 {\n    top: 6px;\n    -webkit-animation: topbar-x 500ms linear 0s;\n    animation: topbar-x 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n\n  .toggled .bar2 {\n    opacity: 0;\n  }\n\n  .toggled .bar3 {\n    bottom: 6px;\n    -webkit-animation: bottombar-x 500ms linear 0s;\n    animation: bottombar-x 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n\n  @keyframes topbar-x {\n    0% {\n      top: 0px;\n      transform: rotate(0deg);\n    }\n    45% {\n      top: 6px;\n      transform: rotate(145deg);\n    }\n    75% {\n      transform: rotate(130deg);\n    }\n    100% {\n      transform: rotate(135deg);\n    }\n  }\n  @-webkit-keyframes topbar-x {\n    0% {\n      top: 0px;\n      -webkit-transform: rotate(0deg);\n    }\n    45% {\n      top: 6px;\n      -webkit-transform: rotate(145deg);\n    }\n    75% {\n      -webkit-transform: rotate(130deg);\n    }\n    100% {\n      -webkit-transform: rotate(135deg);\n    }\n  }\n  @keyframes topbar-back {\n    0% {\n      top: 6px;\n      transform: rotate(135deg);\n    }\n    45% {\n      transform: rotate(-10deg);\n    }\n    75% {\n      transform: rotate(5deg);\n    }\n    100% {\n      top: 0px;\n      transform: rotate(0);\n    }\n  }\n  @-webkit-keyframes topbar-back {\n    0% {\n      top: 6px;\n      -webkit-transform: rotate(135deg);\n    }\n    45% {\n      -webkit-transform: rotate(-10deg);\n    }\n    75% {\n      -webkit-transform: rotate(5deg);\n    }\n    100% {\n      top: 0px;\n      -webkit-transform: rotate(0);\n    }\n  }\n  @keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      transform: rotate(0deg);\n    }\n    45% {\n      bottom: 6px;\n      transform: rotate(-145deg);\n    }\n    75% {\n      transform: rotate(-130deg);\n    }\n    100% {\n      transform: rotate(-135deg);\n    }\n  }\n  @-webkit-keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      -webkit-transform: rotate(0deg);\n    }\n    45% {\n      bottom: 6px;\n      -webkit-transform: rotate(-145deg);\n    }\n    75% {\n      -webkit-transform: rotate(-130deg);\n    }\n    100% {\n      -webkit-transform: rotate(-135deg);\n    }\n  }\n  @keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      transform: rotate(-135deg);\n    }\n    45% {\n      transform: rotate(10deg);\n    }\n    75% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      bottom: 0px;\n      transform: rotate(0);\n    }\n  }\n  @-webkit-keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      -webkit-transform: rotate(-135deg);\n    }\n    45% {\n      -webkit-transform: rotate(10deg);\n    }\n    75% {\n      -webkit-transform: rotate(-5deg);\n    }\n    100% {\n      bottom: 0px;\n      -webkit-transform: rotate(0);\n    }\n  }\n  @-webkit-keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  .navbar-nav {\n    margin: 1px -15px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    padding: 15px 15px 5px 50px;\n  }\n  .navbar-nav .open .dropdown-menu > li:first-child > a {\n    padding: 5px 15px 5px 50px;\n  }\n  .navbar-nav .open .dropdown-menu > li:last-child > a {\n    padding: 15px 15px 25px 50px;\n  }\n\n  [class*=navbar-] .navbar-nav > li > a, [class*=navbar-] .navbar-nav > li > a:hover, [class*=navbar-] .navbar-nav > li > a:focus, [class*=navbar-] .navbar-nav .active > a, [class*=navbar-] .navbar-nav .active > a:hover, [class*=navbar-] .navbar-nav .active > a:focus, [class*=navbar-] .navbar-nav .open .dropdown-menu > li > a, [class*=navbar-] .navbar-nav .open .dropdown-menu > li > a:hover, [class*=navbar-] .navbar-nav .open .dropdown-menu > li > a:focus, [class*=navbar-] .navbar-nav .navbar-nav .open .dropdown-menu > li > a:active {\n    color: white;\n  }\n  [class*=navbar-] .navbar-nav > li > a:not(.btn),\n[class*=navbar-] .navbar-nav > li > a:hover,\n[class*=navbar-] .navbar-nav > li > a:focus,\n[class*=navbar-] .navbar-nav .open .dropdown-menu > li > a:not(.btn),\n[class*=navbar-] .navbar-nav .open .dropdown-menu > li > a:hover,\n[class*=navbar-] .navbar-nav .open .dropdown-menu > li > a:focus {\n    opacity: 0.7;\n    background: transparent;\n  }\n  [class*=navbar-] .navbar-nav.navbar-nav .open .dropdown-menu > li > a:active {\n    opacity: 1;\n  }\n  [class*=navbar-] .navbar-nav .dropdown > a:hover .caret {\n    border-bottom-color: #777;\n    border-top-color: #777;\n  }\n  [class*=navbar-] .navbar-nav .dropdown > a:active .caret {\n    border-bottom-color: white;\n    border-top-color: white;\n  }\n\n  .bootstrap-datetimepicker-widget {\n    visibility: visible;\n  }\n\n  .dropdown-menu {\n    display: none;\n  }\n\n  .navbar-fixed-top {\n    -webkit-backface-visibility: hidden;\n  }\n\n  .social-line .btn {\n    margin: 0 0 10px 0;\n  }\n\n  .subscribe-line .form-control {\n    margin: 0 0 10px 0;\n  }\n\n  .social-line.pull-right {\n    float: none;\n  }\n\n  .footer nav.pull-left {\n    float: none !important;\n  }\n\n  .footer:not(.footer-big) nav > ul li {\n    float: none;\n  }\n\n  .footer .footer-nav,\n.footer .credits {\n    margin: 0 auto;\n  }\n\n  .section-buttons .input-group {\n    margin-top: 15px;\n  }\n  .section-buttons .form-group.has-danger .form-control-feedback {\n    margin-top: 5px;\n  }\n\n  .social-area.pull-right {\n    float: none !important;\n  }\n\n  .form-control + .form-control-feedback {\n    margin-top: -8px;\n  }\n\n  .navbar-toggle:hover, .navbar-toggle:focus {\n    background-color: transparent !important;\n  }\n\n  .btn.dropdown-toggle {\n    margin-bottom: 0;\n  }\n\n  .media-post .author {\n    width: 20%;\n    float: none !important;\n    display: block;\n    margin: 0 auto 10px;\n  }\n\n  .media-post .media-body {\n    width: 100%;\n  }\n\n  .modal-footer .btn-simple {\n    padding: 15px;\n  }\n\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    border: 1px solid #dddddd;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .typography-line {\n    padding-left: 100px !important;\n  }\n\n  .projects-1 .project-pills .nav.nav-pills {\n    display: block !important;\n  }\n  .projects-1 .project-pills .nav.nav-pills .nav-item:first-child .nav-link {\n    border-radius: 12px 12px 0 0 !important;\n    margin-left: -1px;\n  }\n  .projects-1 .project-pills .nav.nav-pills .nav-item.active:first-child .nav-link {\n    border-radius: 12px 12px 0 0 !important;\n    margin-left: -1px;\n  }\n  .projects-1 .project-pills .nav.nav-pills .nav-item:last-child .nav-link {\n    border-radius: 0 0 12px 12px !important;\n    margin-left: -1px;\n  }\n\n  .testimonials-2 .testimonials-people img,\n.section-testimonials .testimonials-people img {\n    display: none !important;\n  }\n\n  .presentation-page .section-cards,\n.presentation-page .section-components {\n    overflow: hidden;\n  }\n  .presentation-page .section-cards .first-card,\n.presentation-page .section-components .first-card {\n    top: 750px !important;\n  }\n  .presentation-page .section-cards .first-card .grid__link,\n.presentation-page .section-components .first-card .grid__link {\n    width: 200px !important;\n  }\n  .presentation-page .section-cards .fourth-card,\n.presentation-page .section-components .fourth-card {\n    top: 940px !important;\n  }\n  .presentation-page .section-cards .fourth-card .grid__link,\n.presentation-page .section-components .fourth-card .grid__link {\n    width: 200px !important;\n  }\n  .presentation-page .section-cards .fifth-card,\n.presentation-page .section-components .fifth-card {\n    top: 950px !important;\n    left: 220px !important;\n  }\n  .presentation-page .section-cards .fifth-card .grid__link,\n.presentation-page .section-components .fifth-card .grid__link {\n    width: 200px !important;\n  }\n  .presentation-page .section-cards .sixth-card,\n.presentation-page .section-components .sixth-card {\n    top: 1335px !important;\n    left: 220px !important;\n  }\n  .presentation-page .section-cards .sixth-card .grid__link,\n.presentation-page .section-components .sixth-card .grid__link {\n    width: 200px !important;\n  }\n  .presentation-page .section-cards .seventh-card,\n.presentation-page .section-components .seventh-card {\n    top: 1155px !important;\n  }\n  .presentation-page .section-cards .seventh-card .grid__link,\n.presentation-page .section-components .seventh-card .grid__link {\n    width: 200px !important;\n  }\n  .presentation-page .section-content .image-container .add-animation {\n    height: 250px !important;\n    width: 180px !important;\n  }\n  .presentation-page .section-components .image-container .components-macbook {\n    width: 580px !important;\n    height: 400px !important;\n  }\n  .presentation-page .section-components .image-container .social-img,\n.presentation-page .section-components .image-container .share-btn-img {\n    display: none;\n  }\n  .presentation-page .section-components .title {\n    margin-top: -100px !important;\n  }\n  .presentation-page .section-examples {\n    padding-top: 0 !important;\n    margin-top: 10px !important;\n  }\n  .presentation-page .section-icons .icons-nucleo .nc-icon:not(.ninth-left-icon):not(.seventh-left-icon):not(.third-left-icon) {\n    display: none !important;\n  }\n\n  #typography .typography-line .note {\n    margin-left: 7px !important;\n  }\n\n  .section-nucleo-icons [class*=col-lg] {\n    text-align: center !important;\n    margin-bottom: 2em;\n  }\n}\n@media screen and (max-width: 991px) {\n  .navbar-collapse {\n    display: block;\n    position: fixed;\n    top: 0;\n    height: 100%;\n    width: 230px;\n    right: 0;\n    z-index: 1032;\n    visibility: visible;\n    background-color: #999;\n    overflow-y: visible;\n    border-top: none;\n    text-align: left;\n    border-left: 1px solid #CCC5B9;\n    padding-right: 0px;\n    padding-left: 40px;\n    padding-top: 15px;\n    transform: translate3d(230px, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  }\n  .navbar-collapse ul {\n    position: relative;\n    z-index: 3;\n    height: 95%;\n  }\n  .navbar-collapse .navbar-nav > .nav-item:last-child {\n    border-bottom: 0;\n  }\n  .navbar-collapse .navbar-nav > .nav-item > .nav-link {\n    margin: 0px 0px;\n    color: #9A9A9A !important;\n    text-transform: uppercase;\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 1.5em;\n    padding: 15px 0;\n  }\n  .navbar-collapse .navbar-nav > .nav-item > .nav-link:hover, .navbar-collapse .navbar-nav > .nav-item > .nav-link:active {\n    color: #403D39 !important;\n  }\n  .navbar-collapse::after {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    background-color: #FFFCF5;\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(112, 112, 112, 0) 60%, rgba(186, 186, 186, 0.15) 100%);\n    display: block;\n    content: \"\";\n    z-index: 1;\n  }\n  .navbar-collapse.has-image::after {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    background-color: rgba(17, 17, 17, 0.8);\n    display: block;\n    content: \"\";\n    z-index: 1;\n  }\n\n  .nav-open .navbar-collapse {\n    transform: translate3d(0px, 0, 0);\n    display: block;\n  }\n  .nav-open .wrapper {\n    left: 0;\n    transform: translate3d(-230px, 0, 0);\n  }\n  .nav-open .navbar-translate {\n    transform: translate3d(-230px, 0, 0);\n  }\n\n  .wrapper .navbar-collapse {\n    display: none;\n  }\n\n  .fixed-top .navbar-collapse {\n    background-color: #FF8F5E;\n    float: left;\n  }\n\n  .dropdown.show .dropdown-menu,\n.dropdown .dropdown-menu {\n    background-color: transparent;\n    border: 0;\n    transition: none;\n    box-shadow: none;\n    width: auto;\n    border-radius: 0;\n  }\n  .dropdown.show .dropdown-menu .dropdown-item:hover,\n.dropdown.show .dropdown-menu .dropdown-item:focus,\n.dropdown .dropdown-menu .dropdown-item:hover,\n.dropdown .dropdown-menu .dropdown-item:focus {\n    background-color: transparent;\n    border-radius: 0;\n  }\n  .dropdown.show .dropdown-menu .dropdown-item a:hover, .dropdown.show .dropdown-menu .dropdown-item a:focus,\n.dropdown .dropdown-menu .dropdown-item a:hover,\n.dropdown .dropdown-menu .dropdown-item a:focus {\n    color: #403D39;\n  }\n  .dropdown.show .dropdown-menu:before, .dropdown.show .dropdown-menu:after,\n.dropdown .dropdown-menu:before,\n.dropdown .dropdown-menu:after {\n    display: none;\n  }\n\n  .dropdown .dropdown-menu {\n    display: none;\n  }\n  .dropdown.show .dropdown-menu {\n    display: block;\n  }\n\n  .navbar-translate {\n    justify-content: space-between;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    position: relative;\n    transform: translate3d(0, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  }\n\n  .wrapper {\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    left: 0;\n    background-color: white;\n  }\n}\n@media screen and (min-width: 767px) {\n  .section-sections .section-cols {\n    position: relative;\n    z-index: 1;\n  }\n  .section-sections .section-cols .row:first-of-type {\n    margin-top: 50px;\n    margin-right: -120px;\n    margin-left: -15px;\n    transform: translate3d(-80px, 0, 0);\n  }\n  .section-sections .section-cols .row:nth-of-type(2) {\n    margin-left: -100px;\n    margin-right: -15px;\n    transform: translateX(80px);\n  }\n  .section-sections .section-cols .row:nth-of-type(3) {\n    margin-right: -120px;\n    margin-left: 0px;\n    transform: translateX(-120px);\n  }\n  .section-sections .section-cols .row:nth-of-type(4) {\n    margin-right: -100px;\n    margin-left: -15px;\n    transform: translateX(-50px);\n  }\n}\n@media screen and (min-width: 991px) {\n  .burger-menu .navbar-collapse {\n    position: fixed;\n    display: block;\n    top: 0;\n    height: 100%;\n    width: 230px;\n    right: 0px;\n    z-index: 1032;\n    visibility: visible;\n    background-color: #999;\n    overflow-y: visible;\n    border-top: none;\n    text-align: left;\n    border-left: 1px solid #CCC5B9;\n    padding-right: 0px;\n    padding-left: 40px;\n    padding-top: 15px;\n    transform: translate3d(230px, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  }\n  .burger-menu .navbar-collapse .navbar-nav .nav-item:last-child {\n    border-bottom: 0;\n  }\n  .burger-menu .navbar-collapse .navbar-nav {\n    height: 100%;\n    z-index: 2;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n  }\n  .burger-menu .navbar-collapse::after {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    background-color: #FFFCF5;\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(112, 112, 112, 0) 60%, rgba(186, 186, 186, 0.15) 100%);\n    display: block;\n    content: \"\";\n    z-index: 1;\n  }\n  .burger-menu .navbar-collapse.has-image::after {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    background-color: rgba(17, 17, 17, 0.8);\n    display: block;\n    content: \"\";\n    z-index: 1;\n  }\n  .burger-menu .navbar .container .navbar-toggler {\n    display: block;\n    margin-top: 20px;\n  }\n  .burger-menu .navbar-translate {\n    width: 100%;\n    position: relative;\n    transform: translate3d(0, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  }\n  .burger-menu .wrapper {\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    left: 0;\n    background-color: white;\n  }\n  .burger-menu .body .navbar-collapse.collapse {\n    height: 100vh !important;\n  }\n  .burger-menu .navbar-collapse:before, .burger-menu .navbar-collapse:after,\n.burger-menu .navbar-nav:before,\n.burger-menu .navbar-nav:after {\n    display: table;\n    content: \" \";\n  }\n  .nav-open .burger-menu .navbar-collapse.collapse {\n    transform: translate3d(0px, 0, 0);\n  }\n  .nav-open .burger-menu .wrapper {\n    left: 0;\n    transform: translate3d(-230px, 0, 0);\n  }\n  .nav-open .burger-menu .navbar-translate {\n    transform: translate3d(-230px, 0, 0);\n  }\n  .burger-menu .dropdown.show .dropdown-menu,\n.burger-menu .dropdown .dropdown-menu {\n    background-color: transparent;\n    border: 0;\n    transition: none;\n    box-shadow: none;\n    width: auto;\n    border-radius: 0;\n  }\n  .burger-menu .dropdown.show .dropdown-menu .dropdown-item:hover,\n.burger-menu .dropdown.show .dropdown-menu .dropdown-item:focus,\n.burger-menu .dropdown .dropdown-menu .dropdown-item:hover,\n.burger-menu .dropdown .dropdown-menu .dropdown-item:focus {\n    background-color: transparent;\n    border-radius: 0;\n  }\n  .burger-menu .dropdown.show .dropdown-menu .dropdown-item a:hover, .burger-menu .dropdown.show .dropdown-menu .dropdown-item a:focus,\n.burger-menu .dropdown .dropdown-menu .dropdown-item a:hover,\n.burger-menu .dropdown .dropdown-menu .dropdown-item a:focus {\n    color: #403D39;\n  }\n  .burger-menu .dropdown.show .dropdown-menu:before, .burger-menu .dropdown.show .dropdown-menu:after,\n.burger-menu .dropdown .dropdown-menu:before,\n.burger-menu .dropdown .dropdown-menu:after {\n    display: none;\n  }\n  .burger-menu .dropdown .dropdown-menu {\n    display: none;\n  }\n  .burger-menu .dropdown.show .dropdown-menu {\n    display: block;\n  }\n}\n@media screen and (max-width: 1025px) {\n  .input-group .input-group-addon {\n    padding-right: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWNlc29yaW9zL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvQWNlc29yaW9zL19ib290c3RyYXAtc3dpdGNoLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvYnV0dG9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQWNlc29yaW9zL19leGFtcGxlcy5zY3NzIiwic3JjL2FwcC9BY2Vzb3Jpb3MvX3Jlc3BvbnNpdmUuc2NzcyIsInNyYy9hcHAvQWNlc29yaW9zL21peGlucy9fdmVuZG9yLXByZWZpeGVzLnNjc3MiLCJzcmMvYXBwL0FjZXNvcmlvcy9taXhpbnMvX3RyYW5zcGFyZW5jeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FQSx5REFBQTtBQUFBLHlEQUFBO0FDbkVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUVBLHdFQUFBO0FDRUY7QURDQTtFQUNFLG9CQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLCtCQUFBO0VBQ0EsdUJBQUE7QUNFRjtBRENBOzs7RUFLRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLDBCQUFBO0FDRUY7QURDQTs7RUFFRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0VGO0FEQ0E7O0VBRUUsV0FBQTtFQUNBLG1CRHhCMkI7QUUwQjdCO0FEQ0E7O0VB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QUE7SUFDQSx1QkFBQTtFRm15QlY7RUUveEJVO0lBQ0ksd0JBQUE7RUZpeUJkO0VFNXhCVTs7O0lBRUksY0FBQTtJQUNBLFlBQUE7RUYreEJkO0VFMXhCVTtJQzNqQkosaUNBQUE7RUg0MUNOO0VFOXhCVTtJQUNJLE9BQUE7SUMvakJSLG9DQUFBO0VIbzJDTjtFRWx5QlU7SUNsa0JKLG9DQUFBO0VIMjJDTjtFRXB5Qk07O0lBRUksNkJBQUE7SUFDQSxTQUFBO0lBQ0EsZ0JBQUE7SUFFQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFRnN5QlY7RUVueUJVOzs7O0lBRUksNkJBQUE7SUFDQSxnQkFBQTtFRnV5QmQ7RUVseUJjOzs7SUFFSSxjSmhuQlM7RUVxNUMzQjtFRWp5QlU7OztJQUVJLGFBQUE7RUZveUJkO0VFL3hCVTtJQUNHLGFBQUE7RUZpeUJiO0VFOXhCUztJQUNJLGNBQUE7RUZneUJiO0FBQ0Y7QUU1eEJBO0VBRVE7SUFDSSxtQkFBQTtFRjZ4QlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvYnV0dG9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJGZvbnQtY29sb3I6ICAgICAgICAgICAgICAgICAjNjY2MTViICFkZWZhdWx0O1xyXG4kZmlsbC1mb250LWNvbG9yOiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAnTW9udHNlcnJhdCcsIFwiSGVsdmV0aWNhXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuJG5vbmU6ICAgICAgICAgICAgICAgICAgICAgICAwICAgIWRlZmF1bHQ7XHJcbiRib3JkZXItdGhpbjogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xyXG4kYm9yZGVyLXRoaWNrOiAgICAgICAgICAgICAgIDJweCAhZGVmYXVsdDtcclxuXHJcbiR3aGl0ZS1jb2xvcjogICAgICAgICAgICAgICAgI0ZGRkZGRiAhZGVmYXVsdDtcclxuJHdoaXRlLWJnOiAgICAgICAgICAgICAgICAgICAjRkZGRkZGICFkZWZhdWx0O1xyXG4kd2hpdGUtc3RhdGVzLWNvbG9yOiAgICAgICAgIHJnYmEoJHdoaXRlLWNvbG9yLCAwLjgpO1xyXG5cclxuJHNtb2tlLWJnOiAgICAgICAgICAgICAgICAgICAjRjVGNUY1ICFkZWZhdWx0O1xyXG4kcGFsZS1iZzogICAgICAgICAgICAgICAgICAgICNGRkZDRjUgIWRlZmF1bHQ7XHJcbiRtZWRpdW0tcGFsZS1iZzogICAgICAgICAgICAgI0YxRUFFMCAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1saW5lLWNvbG9yOiAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcclxuJG11dGVkLWNvbG9yOiAgICAgICAgICAgICAgICAjYTQ5ZTkzICFkZWZhdWx0O1xyXG5cclxuJGJsYWNrLWJnOiAgICAgICAgICAgICAgICAgICByZ2JhKDMwLDMwLDMwLC45NykgIWRlZmF1bHQ7XHJcblxyXG4kYmxhY2stY29sb3I6ICAgICAgICAgICAgICAgICMzMzMzMzMgIWRlZmF1bHQ7XHJcbiRibGFjay1ocjogICAgICAgICAgICAgICAgICAgIzQ0NDQ0NCAhZGVmYXVsdDtcclxuXHJcbiRsaWdodC1ncmF5OiAgICAgICAgICAgICAgICAgI0UzRTNFMyAhZGVmYXVsdDtcclxuJG1lZGl1bS1ncmF5OiAgICAgICAgICAgICAgICAjREREREREICFkZWZhdWx0O1xyXG4kZGFyay1ncmF5OiAgICAgICAgICAgICAgICAgICM5QTlBOUEgIWRlZmF1bHQ7XHJcblxyXG4kcGxhY2Vob2xkZXItZ3JheTogICAgICAgICAgIHJnYmEoMjEwLCAyMTAsIDIxMCwgMSkgICFkZWZhdWx0O1xyXG5cclxuJGdyYXktaW5wdXQtYmc6ICAgICAgICAgICAgICAjZmZmY2Y1ICFkZWZhdWx0O1xyXG4kZGFuZ2VyLWlucHV0LWJnOiAgICAgICAgICAgICNGRkMwQTQgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzLWlucHV0LWJnOiAgICAgICAgICAgI0FCRjNDQiAhZGVmYXVsdDtcclxuJG90aGVyLW1lZGl1bS1ncmF5OiAgICAgICAgICAjQTQ5RTkzICFkZWZhdWx0O1xyXG4kdHJhbnNwYXJlbnQtYmc6ICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG5cclxuJGRlZmF1bHQtY29sb3I6ICAgICAgICAgICAgICAjNjY2MTVCICFkZWZhdWx0O1xyXG4kZGVmYXVsdC1iZzogICAgICAgICAgICAgICAgICM2NjYxNUIgIWRlZmF1bHQ7XHJcbiRkZWZhdWx0LXN0YXRlcy1jb2xvcjogICAgICAgIzQwM0QzOSAhZGVmYXVsdDtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAgICAgICAgICAgICAgIzUxY2JjZSAhZGVmYXVsdDtcclxuJHByaW1hcnktc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSkgIWRlZmF1bHQ7XHJcblxyXG4kc3VjY2Vzcy1jb2xvcjogICAgICAgICAgICAgICM2YmQwOTggIWRlZmF1bHQ7XHJcbiRzdWNjZXNzLXN0YXRlcy1jb2xvcjogICAgICAgZGFya2VuKCRzdWNjZXNzLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xyXG5cclxuJGluZm8tY29sb3I6ICAgICAgICAgICAgICAgICAjNTFiY2RhICFkZWZhdWx0O1xyXG4kaW5mby1zdGF0ZXMtY29sb3I6ICAgICAgICAgIGRhcmtlbigkaW5mby1jb2xvciwgMTAlKSAhZGVmYXVsdDtcclxuXHJcbiR3YXJuaW5nLWNvbG9yOiAgICAgICAgICAgICAgI2ZiYzY1OCAhZGVmYXVsdDtcclxuJHdhcm5pbmctc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHdhcm5pbmctY29sb3IsIDEwJSkgIWRlZmF1bHQ7XHJcblxyXG4kZGFuZ2VyLWNvbG9yOiAgICAgICAgICAgICAgICNmNTU5M2QgIWRlZmF1bHQ7XHJcbiRkYW5nZXItc3RhdGVzLWNvbG9yOiAgICAgICAgZGFya2VuKCRkYW5nZXItY29sb3IsIDglKSAhZGVmYXVsdDtcclxuXHJcbiRsaW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgIzY2NjY2NiAhZGVmYXVsdDtcclxuXHJcbiRwdXJwbGUtY29sb3I6ICAgICAgICAgICAgICAgI2MxNzhjMSAhZGVmYXVsdDtcclxuJHB1cnBsZS1zdGF0ZXMtY29sb3I6ICAgICAgICBkYXJrZW4oJHB1cnBsZS1jb2xvciwgOCUpICFkZWZhdWx0O1xyXG5cclxuJGJyb3duLWNvbG9yOiAgICAgICAgICAgICAgICAjZGNiMjg1ICFkZWZhdWx0O1xyXG4kYnJvd24tc3RhdGVzLWNvbG9yOiAgICAgICAgIGRhcmtlbigkYnJvd24tY29sb3IsIDglKSAhZGVmYXVsdDtcclxuXHJcblxyXG5cclxuXHJcbi8qICAgICAgbGlnaHQgY29sb3JzIC0gdXNlZCBmb3Igc2VsZWN0IGRyb3Bkb3duICAgICAgICAgKi9cclxuXHJcbiRsaWdodC1ibHVlOiAgICAgICAgICAgICAgICAgcmdiYSgkcHJpbWFyeS1jb2xvciwgLjIpO1xyXG4kbGlnaHQtYXp1cmU6ICAgICAgICAgICAgICAgIHJnYmEoJGluZm8tY29sb3IsIC4yKTtcclxuJGxpZ2h0LWdyZWVuOiAgICAgICAgICAgICAgICByZ2JhKCRzdWNjZXNzLWNvbG9yLCAuMik7XHJcbiRsaWdodC1vcmFuZ2U6ICAgICAgICAgICAgICAgcmdiYSgkd2FybmluZy1jb2xvciwgLjIpO1xyXG4kbGlnaHQtcmVkOiAgICAgICAgICAgICAgICAgIHJnYmEoJGRhbmdlci1jb2xvciwgLjIpO1xyXG5cclxuXHJcbi8vPT0gQ29tcG9uZW50c1xyXG4vL1xyXG4kcGFkZGluZy1iYXNlLXZlcnRpY2FsOiAgICAgICAgIDdweCAhZGVmYXVsdDtcclxuJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsOiAgICAgICAxOHB4ICFkZWZhdWx0O1xyXG5cclxuJHBhZGRpbmctcm91bmQtdmVydGljYWw6ICAgICAgICA5cHggIWRlZmF1bHQ7XHJcbiRwYWRkaW5nLXJvdW5kLWhvcml6b250YWw6ICAgICAxOHB4ICFkZWZhdWx0O1xyXG5cclxuJHBhZGRpbmctc2ltcGxlLXZlcnRpY2FsOiAgICAgIDEwcHggIWRlZmF1bHQ7XHJcbiRwYWRkaW5nLXNpbXBsZS1ob3Jpem9udGFsOiAgICAxOHB4ICFkZWZhdWx0O1xyXG5cclxuJHBhZGRpbmctbGFyZ2UtdmVydGljYWw6ICAgICAgIDExcHggIWRlZmF1bHQ7XHJcbiRwYWRkaW5nLWxhcmdlLWhvcml6b250YWw6ICAgICAzMHB4ICFkZWZhdWx0O1xyXG5cclxuJHBhZGRpbmctc21hbGwtdmVydGljYWw6ICAgICAgICA0cHggIWRlZmF1bHQ7XHJcbiRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw6ICAgICAxMHB4ICFkZWZhdWx0O1xyXG5cclxuJHBhZGRpbmcteHMtdmVydGljYWw6ICAgICAgICAgICAycHggIWRlZmF1bHQ7XHJcbiRwYWRkaW5nLXhzLWhvcml6b250YWw6ICAgICAgICAgNXB4ICFkZWZhdWx0O1xyXG5cclxuJHBhZGRpbmctbGFiZWwtdmVydGljYWw6ICAgICAgICAycHggIWRlZmF1bHQ7XHJcbiRwYWRkaW5nLWxhYmVsLWhvcml6b250YWw6ICAgICAxMnB4ICFkZWZhdWx0O1xyXG5cclxuLy8gcGFkZGluZyBmb3IgbGlua3MgaW5zaWRlIGRyb3Bkb3duIG1lbnVcclxuJHBhZGRpbmctZHJvcGRvd24tdmVydGljYWw6ICAgICAxMHB4ICFkZWZhdWx0O1xyXG4kcGFkZGluZy1kcm9wZG93bi1ob3Jpem9udGFsOiAgIDE1cHggIWRlZmF1bHQ7XHJcblxyXG4kbWFyZ2luLWxhcmdlLXZlcnRpY2FsOiAgICAgICAgMzBweCAhZGVmYXVsdDtcclxuJG1hcmdpbi1iYXNlLXZlcnRpY2FsOiAgICAgICAgIDE1cHggIWRlZmF1bHQ7XHJcblxyXG4vLyBib3JkZXIgcmFkaXVzIGZvciBidXR0b25zXHJcbiRib3JkZXItcmFkaXVzLW5vbmU6ICAgICAgICAgICAgIDBweCAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtYnRuLXNtYWxsOiAgICAgIDI2cHggIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWJ0bi1iYXNlOiAgICAgICAyMHB4ICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1idG4tbGFyZ2U6ICAgICAgNTBweCAhZGVmYXVsdDtcclxuXHJcblxyXG4kbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgMCAwIDEwcHggMCAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtc21hbGw6ICAgICAgICAgICAzcHggIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWJhc2U6ICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sYXJnZTogICAgICAgICAgIDZweCAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMteC1sYXJnZTogICAgICAgICA4cHggIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWV4dHJlbWU6ICAgICAgICAgMTJweCAhZGVmYXVsdDtcclxuXHJcbiRib3JkZXItcmFkaXVzLW5vbmUtdG9wOiAgICAgICRib3JkZXItcmFkaXVzLW5vbmUgJGJvcmRlci1yYWRpdXMtbm9uZSAwIDAgIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLW5vbmUtYm90dG9tOiAgIDAgMCAkYm9yZGVyLXJhZGl1cy1ub25lICRib3JkZXItcmFkaXVzLW5vbmUgIWRlZmF1bHQ7XHJcblxyXG4kYm9yZGVyLXJhZGl1cy1zbWFsbC10b3A6ICAgICAgJGJvcmRlci1yYWRpdXMtc21hbGwgJGJvcmRlci1yYWRpdXMtc21hbGwgMCAwICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbWFsbC1ib3R0b206ICAgMCAwICRib3JkZXItcmFkaXVzLXNtYWxsICRib3JkZXItcmFkaXVzLXNtYWxsICFkZWZhdWx0O1xyXG5cclxuJGJvcmRlci1yYWRpdXMtbGFyZ2UtdG9wOiAgICAgICRib3JkZXItcmFkaXVzLWxhcmdlICRib3JkZXItcmFkaXVzLWxhcmdlIDAgMCAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGFyZ2UtYm90dG9tOiAgIDAgMCAkYm9yZGVyLXJhZGl1cy1sYXJnZSAkYm9yZGVyLXJhZGl1cy1sYXJnZSAhZGVmYXVsdDtcclxuXHJcbiRidG4tcm91bmQtcmFkaXVzOiAgICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xyXG5cclxuJGhlaWdodC1iYXNlOiAgICAgICAgICAgICAgICAgIDQwcHggIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAgMTRweCAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1zbWFsbDogICAgICAgICAgICAgIDEycHggIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtbWVkaXVtOiAgICAgICAgICAgICAxNnB4ICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLWxhcmdlOiAgICAgICAgICAgICAgMjBweCAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1sYXJnZS1uYXZiYXI6ICAgICAgIDIycHggIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1zaXplLWgxOiAgICAgICAgICAgICAgICAgMy42ZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtaDI6ICAgICAgICAgICAgICAgICAyLjhlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1oMzogICAgICAgICAgICAgICAgIDEuODI1ZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtaDQ6ICAgICAgICAgICAgICAgICAxLjZlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1oNTogICAgICAgICAgICAgICAgIDEuMzVlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1oNjogICAgICAgICAgICAgICAgIDAuOWVtICFkZWZhdWx0O1xyXG4kZm9udC1wYXJhZ3JhcGg6ICAgICAgICAgICAgICAgMTVweCAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1uYXZiYXI6ICAgICAgICAgICAgIDE0cHggIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1zaXplLWluZm8taG9yaXpvbnRhbDogICAgMi41ZW0gIWRlZmF1bHQ7XHJcblxyXG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgIDMwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogICAgICAgICA0MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1zZW1pOiAgICAgICAgICAgNTAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgIDYwMCAhZGVmYXVsdDtcclxuXHJcbiRsaW5lLWhlaWdodC1zbWFsbDogICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQtZ2VuZXJhbDogICAgICAgICAgMS41ZW0gIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodDogICAgICAgICAgICAgICAgIDM2cHggIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodC1sZzogICAgICAgICAgICAgIDU0cHggIWRlZmF1bHQ7XHJcblxyXG5cclxuJGJvcmRlci1yYWRpdXMtdG9wOiAgICAgICAgMTBweCAxMHB4IDAgMCAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtYm90dG9tOiAgICAgMCAwIDEwcHggMTBweCAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtZHJvcGRvd246ICAgMTBweCAxMHB4ICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLXNoYWRvdzogICAgICAgICAgMCAycHggcmdiYSgxNywgMTYsIDE1LCAwLjEpLCAwIDJweCAxMHB4IHJnYmEoMTcsIDE2LCAxNSwgMC4xKTtcclxuXHJcbiRnZW5lcmFsLXRyYW5zaXRpb24tdGltZTogIDMwMG1zICFkZWZhdWx0O1xyXG5cclxuJHNsb3ctdHJhbnNpdGlvbi10aW1lOiAgICAgICAgICAgMzAwbXMgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1jb29yZGluYXRlczogICAgICAyOXB4IC01MHB4ICFkZWZhdWx0O1xyXG5cclxuJGZhc3QtdHJhbnNpdGlvbi10aW1lOiAgICAgICAgICAgMTUwbXMgIWRlZmF1bHQ7XHJcbiRzZWxlY3QtY29vcmRpbmF0ZXM6ICAgICAgICAgNTAlIC00MHB4ICFkZWZhdWx0O1xyXG5cclxuJHRyYW5zaXRpb24tbGluZWFyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZWFyICFkZWZhdWx0O1xyXG4kdHJhbnNpdGlvbi1iZXppZXI6ICAgICAgICAgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNjEsIDAuNywgMSkgIWRlZmF1bHQ7XHJcbiR0cmFuc2l0aW9uLWVhc2U6ICAgICAgICAgICBlYXNlIDBzO1xyXG5cclxuJG5hdmJhci1wYWRkaW5nLWE6ICAgICAgICAgICAgICAgMTBweCAxNXB4O1xyXG4kbmF2YmFyLW1hcmdpbi1hOiAgICAgICAgICAgICAgICAxNXB4ICAwcHg7XHJcblxyXG4kcGFkZGluZy1zb2NpYWwtYTogICAgICAgICAgICAgICAxMHB4ICA1cHg7XHJcblxyXG4kbmF2YmFyLW1hcmdpbi1hLWJ0bjogICAgICAgICAgICAxNXB4IDNweDtcclxuJG5hdmJhci1tYXJnaW4tYS1idG4tcm91bmQ6ICAgICAgMTZweCAzcHg7XHJcblxyXG4kbmF2YmFyLXBhZGRpbmctYS1pY29uczogICAgICAgICA2cHggMTVweDtcclxuJG5hdmJhci1tYXJnaW4tYS1pY29uczogICAgICAgICAgNnB4ICAzcHg7XHJcblxyXG4kbmF2YmFyLXBhZGRpbmctYnJhbmQ6ICAgICAgICAgICAyMHB4IDE1cHg7XHJcbiRuYXZiYXItbWFyZ2luLWJyYW5kOiAgICAgICAgICAgICA1cHggIDBweDtcclxuXHJcbiRuYXZiYXItbWFyZ2luLWJyYW5kLWljb25zOiAgICAgIDEycHggYXV0bztcclxuXHJcbiRuYXZiYXItbWFyZ2luLWJ0bjogICAgICAgICAgICAgIDE1cHggIDNweDtcclxuXHJcbiRoZWlnaHQtaWNvbjpcdFx0XHRcdFx0IDY0cHggIWRlZmF1bHQ7XHJcbiR3aWR0aC1pY29uOlx0XHRcdFx0XHQgNjRweCAhZGVmYXVsdDtcclxuJHBhZGRpbmctaWNvbjpcdFx0XHRcdFx0IDEycHggIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWljb246XHRcdCAgICAgMTVweCAhZGVmYXVsdDtcclxuXHJcbiRzaXplLWljb246IFx0XHRcdFx0XHQgNjRweDtcclxuJHNpemUtaWNvbi1zbTogXHRcdFx0XHRcdCAzMnB4O1xyXG5cclxuXHJcbiRoZWlnaHQtaWNvbi1zbTpcdFx0XHRcdCAzMnB4O1xyXG4kd2lkdGgtaWNvbi1zbTpcdFx0XHRcdFx0IDMycHg7XHJcbiRwYWRkaW5nLWljb24tc206XHRcdFx0ICAgICA0cHg7XHJcbiRib3JkZXItcmFkaXVzLWljb24tc206XHRcdFx0IDdweDtcclxuXHJcbiRoZWlnaHQtaWNvbi1tZXNzYWdlOlx0XHRcdCA0MHB4O1xyXG4kd2lkdGgtaWNvbi1tZXNzYWdlOlx0XHRcdCA0MHB4O1xyXG5cclxuJGhlaWdodC1pY29uLW1lc3NhZ2Utc206IFx0XHQgMjBweDtcclxuJHdpZHRoLWljb24tbWVzc2FnZS1zbTpcdFx0XHQgMjBweDtcclxuXHJcblxyXG5cclxuJHdoaXRlLW5hdmJhcjogICAgICAgICAgICAgIHJnYmEoI0ZGRkZGRiwgLjk2KTtcclxuJGJsdWUtbmF2YmFyOiAgICAgICAgICAgICAgIHJnYmEoIzM0QUNEQywgLjk4KTtcclxuJGF6dXJlLW5hdmJhcjogICAgICAgICAgICAgIHJnYmEoIzVCQ0FGRiwgLjk4KTtcclxuJGdyZWVuLW5hdmJhcjogICAgICAgICAgICAgIHJnYmEoIzRDRDk2NCwgLjk4KTtcclxuJG9yYW5nZS1uYXZiYXI6ICAgICAgICAgICAgIHJnYmEoI0ZGOTUwMCwgLjk4KTtcclxuJHJlZC1uYXZiYXI6ICAgICAgICAgICAgICAgIHJnYmEoI0ZGNEM0MCwgLjk4KTtcclxuXHJcbiRiZy1udWRlOiAgICAgICAgICAgICAgICNGRkZDRjUgIWRlZmF1bHQ7XHJcbiRiZy1wcmltYXJ5OiAgICAgICAgICAgIGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDclKSAhZGVmYXVsdDtcclxuJGJnLWluZm86ICAgICAgICAgICAgICAgbGlnaHRlbigkaW5mby1jb2xvciwgNyUpICFkZWZhdWx0O1xyXG4kYmctc3VjY2VzczogICAgICAgICAgICBsaWdodGVuKCRzdWNjZXNzLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XHJcbiRiZy13YXJuaW5nOiAgICAgICAgICAgIGxpZ2h0ZW4oJHdhcm5pbmctY29sb3IsIDclKSAhZGVmYXVsdDtcclxuJGJnLWRhbmdlcjogICAgICAgICAgICAgbGlnaHRlbigkZGFuZ2VyLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XHJcbiRiZy1icm93bjogICAgICAgICAgICAgIGxpZ2h0ZW4oJGJyb3duLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XHJcbiRiZy1wdXJwbGU6ICAgICAgICAgICAgIGxpZ2h0ZW4oJHB1cnBsZS1jb2xvciwgNyUpICFkZWZhdWx0O1xyXG5cclxuJHByZWxvYWRlci1jb2xvcjogICAgICAgICAgI0Q4RDFDOSAhZGVmYXVsdDtcclxuXHJcbiRmaWx0ZXItYmx1ZTogICAgICAgICBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XHJcbiRmaWx0ZXItYXp1cmU6ICAgICAgICBkYXJrZW4oJGluZm8tY29sb3IsIDEwJSk7XHJcbiRmaWx0ZXItZ3JlZW46ICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MtY29sb3IsIDEwJSk7XHJcbiRmaWx0ZXItb3JhbmdlOiAgICAgICBkYXJrZW4oJHdhcm5pbmctY29sb3IsIDEwJSk7XHJcbiRmaWx0ZXItcmVkOiAgICAgICAgICBkYXJrZW4oJGRhbmdlci1jb2xvciwgMTAlKTtcclxuXHJcblxyXG4kdG9wYmFyLXg6ICAgICAgICAgICAgIHRvcGJhci14ICFkZWZhdWx0O1xyXG4kdG9wYmFyLWJhY2s6ICAgICAgICAgIHRvcGJhci1iYWNrICFkZWZhdWx0O1xyXG4kYm90dG9tYmFyLXg6ICAgICAgICAgIGJvdHRvbWJhci14ICFkZWZhdWx0O1xyXG4kYm90dG9tYmFyLWJhY2s6ICAgICAgIGJvdHRvbWJhci1iYWNrICFkZWZhdWx0O1xyXG5cclxuJHNvY2lhbC1mYWNlYm9vazogXHRcdFx0IzNiNTk5ODtcclxuJHNvY2lhbC10d2l0dGVyOiBcdFx0XHQjNTVhY2VlO1xyXG4kc29jaWFsLXBpbnRlcmVzdDogXHRcdFx0I2NjMjEyNztcclxuJHNvY2lhbC1nb29nbGU6IFx0XHRcdCNkZDRiMzk7XHJcbiRzb2NpYWwtbGlua2VkaW46IFx0XHRcdCMwOTc2YjQ7XHJcbiRzb2NpYWwtZHJpYmJibGU6IFx0XHRcdCNlYTRjODk7XHJcbiRzb2NpYWwtZ2l0aHViOiBcdFx0XHQjMzMzMzMzO1xyXG4kc29jaWFsLXlvdXR1YmU6IFx0XHRcdCNlNTJkMjc7XHJcbiRzb2NpYWwtaW5zdGFncmFtOiBcdFx0ICAgICMxMjU2ODg7XHJcbiRzb2NpYWwtcmVkZGl0OiBcdFx0XHQjZmY0NTAwO1xyXG4kc29jaWFsLXR1bWJscjogXHRcdFx0IzM1NDY1YztcclxuXHJcbiRiYWNrZ3JvdW5kLWxpZ2h0LWdyZXk6ICAgICAjRThFN0UzICFkZWZhdWx0O1xyXG4kYmFja2dyb3VuZC1saWdodGVyLWdyZXk6ICAgI0YwRUZFQiAhZGVmYXVsdDtcclxuJGZvbnQtYmFja2dyb3VuZC1saWdodC1ncmV5OiAjOUM5Qjk5ICFkZWZhdWx0O1xyXG4kZm9udC1ob3Zlci1iYWNrZ3JvdW5kLWxpZ2h0LWdyZXk6ICM1RTVFNUMgIWRlZmF1bHQ7XHJcblxyXG4vLyB2YXJpYWJsZXMgdXNlZCBpbiBoZWFkZXJzXHJcbiRoZWFkZXItYmFja2dyb3VuZDogICAgICAgICAjQjJBRkFCICFkZWZhdWx0O1xyXG5cclxuJGZpbHRlci1wcmltYXJ5OiAgICAgICAgIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcclxuJGZpbHRlci1pbmZvOiAgICAgICAgZGFya2VuKCRpbmZvLWNvbG9yLCAxMCUpO1xyXG4kZmlsdGVyLXN1Y2Nlc3M6ICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MtY29sb3IsIDEwJSk7XHJcbiRmaWx0ZXItd2FybmluZzogICAgICAgZGFya2VuKCR3YXJuaW5nLWNvbG9yLCAxMCUpO1xyXG4kZmlsdGVyLWRhbmdlcjogICAgICAgICAgZGFya2VuKCRkYW5nZXItY29sb3IsIDEwJSk7XHJcblxyXG4vLyB2YXJpYWJsZSB1c2VkIGluIGZvb3RlcnNcclxuJGJsYWNrLWZvb3Rlci1iZzogICAgICAgICAgICAjMjUyNDIyICFkZWZhdWx0O1xyXG4kYnJvd24tZm9udC1jb2xvcjogICAgICAgICAgICNBNDlFOUUgIWRlZmF1bHQ7XHJcbiRicm93bi1mb250LWNvbG9yLWhvdmVyOiAgICAgI0YxRUFFMCAhZGVmYXVsdDtcclxuXHJcbi8vdmFyaWFibGVzIHVzZWQgaW4gY2FyZHNcclxuJGNhcmQtYmxhY2stY29sb3I6ICAgICAgICAgICAjMzMzMzMzICFkZWZhdWx0O1xyXG4kY2FyZC1tdXRlZC1jb2xvcjogICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1iYWNrZ3JvdW5kLWJsdWU6ICAgICAgI2I4ZDhkOCAhZGVmYXVsdDtcclxuJGNhcmQtZm9udC1ibHVlOiAgICAgICAgICAgICM1MDY1NjggIWRlZmF1bHQ7XHJcbiRjYXJkLXN1YnRpdGxlLWJsdWU6ICAgICAgICAjN2E5ZTlmICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtYmFja2dyb3VuZC1ncmVlbjogICAgICAjZDVlNWEzICFkZWZhdWx0O1xyXG4kY2FyZC1mb250LWdyZWVuOiAgICAgICAgICAgICM2MDc3M2QgIWRlZmF1bHQ7XHJcbiRjYXJkLXN1YnRpdGxlLWdyZWVuOiAgICAgICAgIzkyYWM1NiAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWJhY2tncm91bmQteWVsbG93OiAgICAgICNmZmUyOGMgIWRlZmF1bHQ7XHJcbiRjYXJkLWZvbnQteWVsbG93OiAgICAgICAgICAgICNiMjU4MjUgIWRlZmF1bHQ7XHJcbiRjYXJkLXN1YnRpdGxlLXllbGxvdzogICAgICAgICNkODg3MTUgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1iYWNrZ3JvdW5kLWJyb3duOiAgICAgICNkNmMxYWIgIWRlZmF1bHQ7XHJcbiRjYXJkLWZvbnQtYnJvd246ICAgICAgICAgICAgIzc1NDQyZSAhZGVmYXVsdDtcclxuJGNhcmQtc3VidGl0bGUtYnJvd246ICAgICAgICAjYTQ3ZTY1ICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtYmFja2dyb3VuZC1wdXJwbGU6ICAgICAgI2JhYTliYSAhZGVmYXVsdDtcclxuJGNhcmQtZm9udC1wdXJwbGU6ICAgICAgICAgICAgIzNhMjgzZCAhZGVmYXVsdDtcclxuJGNhcmQtc3VidGl0bGUtcHVycGxlOiAgICAgICAgIzVhMjgzZCAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWJhY2tncm91bmQtb3JhbmdlOiAgICAgICNmZjhmNWUgIWRlZmF1bHQ7XHJcbiRjYXJkLWZvbnQtb3JhbmdlOiAgICAgICAgICAgICM3NzI1MTAgIWRlZmF1bHQ7XHJcbiRjYXJkLXN1YnRpdGxlLW9yYW5nZTogICAgICAgICNlOTVlMzcgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1iYWNrZ3JvdW5kLXByaW1hcnk6ICAgICAjNDI3Qzg5ICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAjNDI3Qzg5ICFkZWZhdWx0O1xyXG5cclxuJGNvbG9yLXJlZC1lcnJvcjogcmdiKDE4NSwgNzQsIDcyKSAhZGVmYXVsdDtcclxuJGNvbG9yLWdyZXktYXJyb3c6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4yKSAhZGVmYXVsdDtcclxuXHJcbiR3aWR0aC1kZWZhdWx0OiAyMjBweCAhZGVmYXVsdDsgLy8gMyA5NjBweC1ncmlkIGNvbHVtbnNcclxuXHJcbiR6aW5kZXgtc2VsZWN0LWRyb3Bkb3duOiAxMDYwICFkZWZhdWx0OyAvLyBtdXN0IGJlIGhpZ2hlciB0aGFuIGEgbW9kYWwgYmFja2dyb3VuZCAoMTA1MClcclxuXHJcbi8vKiogUGxhY2Vob2xkZXIgdGV4dCBjb2xvclxyXG4kaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI6ICM5OTkgIWRlZmF1bHQ7XHJcbiIsIkBpbXBvcnQgXCIuLi9BY2Vzb3Jpb3MvdmFyaWFibGVzXCI7XG4uYm9vdHN0cmFwLXN3aXRjaCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbGluZS1oZWlnaHQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIHdpZHRoOiA2MXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjZweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaCAuYm9vdHN0cmFwLXN3aXRjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2ggLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9uLFxuLmJvb3RzdHJhcC1zd2l0Y2ggLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZixcbi5ib290c3RyYXAtc3dpdGNoIC5ib290c3RyYXAtc3dpdGNoLWxhYmVsIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtaW5kZW50OiAtNXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjI1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1vdXQ7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vbixcbi5ib290c3RyYXAtc3dpdGNoIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDE7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjYxNUI7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vbi5ib290c3RyYXAtc3dpdGNoLXByaW1hcnksXG4uYm9vdHN0cmFwLXN3aXRjaCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmLmJvb3RzdHJhcC1zd2l0Y2gtcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2ggLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9uLmJvb3RzdHJhcC1zd2l0Y2gtaW5mbyxcbi5ib290c3RyYXAtc3dpdGNoIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYuYm9vdHN0cmFwLXN3aXRjaC1pbmZvIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM0NDdERjc7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vbi5ib290c3RyYXAtc3dpdGNoLXN1Y2Nlc3MsXG4uYm9vdHN0cmFwLXN3aXRjaCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmLmJvb3RzdHJhcC1zd2l0Y2gtc3VjY2VzcyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjN0FDMjlBO1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24uYm9vdHN0cmFwLXN3aXRjaC13YXJuaW5nLFxuLmJvb3RzdHJhcC1zd2l0Y2ggLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZi5ib290c3RyYXAtc3dpdGNoLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiAjRkZBNTM0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2ggLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9uLmJvb3RzdHJhcC1zd2l0Y2gtZGFuZ2VyLFxuLmJvb3RzdHJhcC1zd2l0Y2ggLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZi5ib290c3RyYXAtc3dpdGNoLWRhbmdlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjRkI0MDRCO1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24uYm9vdHN0cmFwLXN3aXRjaC1kZWZhdWx0LFxuLmJvb3RzdHJhcC1zd2l0Y2ggLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZi5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2NmY2ZjYTtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2ggLmJvb3RzdHJhcC1zd2l0Y2gtbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAycHggLTExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAjRkZGRkZGIGluc2V0LCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2ggLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9uIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYge1xuICB0ZXh0LWluZGVudDogNnB4O1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaCBpbnB1dFt0eXBlPSdyYWRpbyddLFxuLmJvb3RzdHJhcC1zd2l0Y2ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoIGlucHV0W3R5cGU9J3JhZGlvJ10uZm9ybS1jb250cm9sLFxuLmJvb3RzdHJhcC1zd2l0Y2ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXS5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtbWluaSAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24sXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLW1pbmkgLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZixcbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtbWluaSAuYm9vdHN0cmFwLXN3aXRjaC1sYWJlbCB7XG4gIHBhZGRpbmc6IDFweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1zbWFsbCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24sXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLXNtYWxsIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYsXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLXNtYWxsIC5ib290c3RyYXAtc3dpdGNoLWxhYmVsIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1sYXJnZSAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24sXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLWxhcmdlIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYsXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLWxhcmdlIC5ib290c3RyYXAtc3dpdGNoLWxhYmVsIHtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzM7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtZGlzYWJsZWQsXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLXJlYWRvbmx5LFxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1pbmRldGVybWluYXRlIHtcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtZGlzYWJsZWQgLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9uLFxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1yZWFkb25seSAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24sXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLWluZGV0ZXJtaW5hdGUgLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9uLFxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1kaXNhYmxlZCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmLFxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1yZWFkb25seSAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmLFxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1pbmRldGVybWluYXRlIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYsXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLWRpc2FibGVkIC5ib290c3RyYXAtc3dpdGNoLWxhYmVsLFxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1yZWFkb25seSAuYm9vdHN0cmFwLXN3aXRjaC1sYWJlbCxcbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtaW5kZXRlcm1pbmF0ZSAuYm9vdHN0cmFwLXN3aXRjaC1sYWJlbCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtYW5pbWF0ZSAuYm9vdHN0cmFwLXN3aXRjaC1jb250YWluZXIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXM7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXM7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtaW52ZXJzZSAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24ge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLWludmVyc2UgLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZiB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtb24gLmJvb3RzdHJhcC1zd2l0Y2gtY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0ycHggIWltcG9ydGFudDtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vZmYgLmJvb3RzdHJhcC1zd2l0Y2gtY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0zN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtb246aG92ZXIgLmJvb3RzdHJhcC1zd2l0Y2gtbGFiZWwge1xuICB3aWR0aDogMjZweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDJweCAtMTVweDtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vZmY6aG92ZXIgLmJvb3RzdHJhcC1zd2l0Y2gtbGFiZWwge1xuICB3aWR0aDogMjZweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDJweCAtMTVweCAtMTNweCAtMTFweDtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vbiAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjE1Qjtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vZmYgLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmY2ZjYTtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vbiAuYm9vdHN0cmFwLXN3aXRjaC1kYW5nZXIgfiAuYm9vdHN0cmFwLXN3aXRjaC1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCNDA0Qjtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vbiAuYm9vdHN0cmFwLXN3aXRjaC13YXJuaW5nIH4gLmJvb3RzdHJhcC1zd2l0Y2gtZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkE1MzQ7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtb24gLmJvb3RzdHJhcC1zd2l0Y2gtc3VjY2VzcyB+IC5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0FDMjlBO1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLW9uIC5ib290c3RyYXAtc3dpdGNoLXByaW1hcnkgfiAuYm9vdHN0cmFwLXN3aXRjaC1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtb24gLmJvb3RzdHJhcC1zd2l0Y2gtaW5mbyB+IC5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3REY3O1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLW9mZiAuYm9vdHN0cmFwLXN3aXRjaC1kYW5nZXIsXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLW9mZiAuYm9vdHN0cmFwLXN3aXRjaC1wcmltYXJ5LFxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vZmYgLmJvb3RzdHJhcC1zd2l0Y2gtaW5mbyxcbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtb2ZmIC5ib290c3RyYXAtc3dpdGNoLXdhcm5pbmcsXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLW9mZiAuYm9vdHN0cmFwLXN3aXRjaC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmY2ZjYTtcbn1cbiIsIi8qICAgICAgbGlnaHQgY29sb3JzIC0gdXNlZCBmb3Igc2VsZWN0IGRyb3Bkb3duICAgICAgICAgKi9cbi8qICAgICAgbGlnaHQgY29sb3JzIC0gdXNlZCBmb3Igc2VsZWN0IGRyb3Bkb3duICAgICAgICAgKi9cbi5ib290c3RyYXAtc3dpdGNoIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBkaXJlY3Rpb246IGx0cjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBsaW5lLWhlaWdodDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgd2lkdGg6IDYxcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAwO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaCAuYm9vdHN0cmFwLXN3aXRjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2ggLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9uLFxuLmJvb3RzdHJhcC1zd2l0Y2ggLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZixcbi5ib290c3RyYXAtc3dpdGNoIC5ib290c3RyYXAtc3dpdGNoLWxhYmVsIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtaW5kZW50OiAtNXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjI1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1vdXQ7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vbixcbi5ib290c3RyYXAtc3dpdGNoIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDE7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjYxNUI7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vbi5ib290c3RyYXAtc3dpdGNoLXByaW1hcnksXG4uYm9vdHN0cmFwLXN3aXRjaCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmLmJvb3RzdHJhcC1zd2l0Y2gtcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNTFjYmNlO1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24uYm9vdHN0cmFwLXN3aXRjaC1pbmZvLFxuLmJvb3RzdHJhcC1zd2l0Y2ggLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZi5ib290c3RyYXAtc3dpdGNoLWluZm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzQ0N0RGNztcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2ggLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9uLmJvb3RzdHJhcC1zd2l0Y2gtc3VjY2Vzcyxcbi5ib290c3RyYXAtc3dpdGNoIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYuYm9vdHN0cmFwLXN3aXRjaC1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM3QUMyOUE7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vbi5ib290c3RyYXAtc3dpdGNoLXdhcm5pbmcsXG4uYm9vdHN0cmFwLXN3aXRjaCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmLmJvb3RzdHJhcC1zd2l0Y2gtd2FybmluZyB7XG4gIGJhY2tncm91bmQ6ICNGRkE1MzQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24uYm9vdHN0cmFwLXN3aXRjaC1kYW5nZXIsXG4uYm9vdHN0cmFwLXN3aXRjaCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmLmJvb3RzdHJhcC1zd2l0Y2gtZGFuZ2VyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNGQjQwNEI7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vbi5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQsXG4uYm9vdHN0cmFwLXN3aXRjaCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmLmJvb3RzdHJhcC1zd2l0Y2gtZGVmYXVsdCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjY2ZjZmNhO1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaCAuYm9vdHN0cmFwLXN3aXRjaC1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTAwO1xuICBjb2xvcjogIzMzMzMzMztcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDIycHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW46IDJweCAtMTFweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4ICNGRkZGRkYgaW5zZXQsIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24ge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2ggLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZiB7XG4gIHRleHQtaW5kZW50OiA2cHg7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoIGlucHV0W3R5cGU9cmFkaW9dLFxuLmJvb3RzdHJhcC1zd2l0Y2ggaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaCBpbnB1dFt0eXBlPXJhZGlvXS5mb3JtLWNvbnRyb2wsXG4uYm9vdHN0cmFwLXN3aXRjaCBpbnB1dFt0eXBlPWNoZWNrYm94XS5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtbWluaSAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24sXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLW1pbmkgLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZixcbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtbWluaSAuYm9vdHN0cmFwLXN3aXRjaC1sYWJlbCB7XG4gIHBhZGRpbmc6IDFweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1zbWFsbCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24sXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLXNtYWxsIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYsXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLXNtYWxsIC5ib290c3RyYXAtc3dpdGNoLWxhYmVsIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1sYXJnZSAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24sXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLWxhcmdlIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYsXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLWxhcmdlIC5ib290c3RyYXAtc3dpdGNoLWxhYmVsIHtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzM7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtZGlzYWJsZWQsXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLXJlYWRvbmx5LFxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1pbmRldGVybWluYXRlIHtcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtZGlzYWJsZWQgLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9uLFxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1yZWFkb25seSAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24sXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLWluZGV0ZXJtaW5hdGUgLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9uLFxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1kaXNhYmxlZCAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmLFxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1yZWFkb25seSAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmLFxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1pbmRldGVybWluYXRlIC5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYsXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLWRpc2FibGVkIC5ib290c3RyYXAtc3dpdGNoLWxhYmVsLFxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1yZWFkb25seSAuYm9vdHN0cmFwLXN3aXRjaC1sYWJlbCxcbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtaW5kZXRlcm1pbmF0ZSAuYm9vdHN0cmFwLXN3aXRjaC1sYWJlbCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtYW5pbWF0ZSAuYm9vdHN0cmFwLXN3aXRjaC1jb250YWluZXIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXM7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXM7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtaW52ZXJzZSAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb24ge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLWludmVyc2UgLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZiB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtb24gLmJvb3RzdHJhcC1zd2l0Y2gtY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0ycHggIWltcG9ydGFudDtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vZmYgLmJvb3RzdHJhcC1zd2l0Y2gtY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0zN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtb246aG92ZXIgLmJvb3RzdHJhcC1zd2l0Y2gtbGFiZWwge1xuICB3aWR0aDogMjZweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDJweCAtMTVweDtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vZmY6aG92ZXIgLmJvb3RzdHJhcC1zd2l0Y2gtbGFiZWwge1xuICB3aWR0aDogMjZweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDJweCAtMTVweCAtMTNweCAtMTFweDtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vbiAuYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjE1Qjtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vZmYgLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmY2ZjYTtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vbiAuYm9vdHN0cmFwLXN3aXRjaC1kYW5nZXIgfiAuYm9vdHN0cmFwLXN3aXRjaC1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCNDA0Qjtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vbiAuYm9vdHN0cmFwLXN3aXRjaC13YXJuaW5nIH4gLmJvb3RzdHJhcC1zd2l0Y2gtZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkE1MzQ7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtb24gLmJvb3RzdHJhcC1zd2l0Y2gtc3VjY2VzcyB+IC5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0FDMjlBO1xufVxuXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLW9uIC5ib290c3RyYXAtc3dpdGNoLXByaW1hcnkgfiAuYm9vdHN0cmFwLXN3aXRjaC1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxY2JjZTtcbn1cblxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vbiAuYm9vdHN0cmFwLXN3aXRjaC1pbmZvIH4gLmJvb3RzdHJhcC1zd2l0Y2gtZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDdERjc7XG59XG5cbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtb2ZmIC5ib290c3RyYXAtc3dpdGNoLWRhbmdlcixcbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtb2ZmIC5ib290c3RyYXAtc3dpdGNoLXByaW1hcnksXG4uYm9vdHN0cmFwLXN3aXRjaC5ib290c3RyYXAtc3dpdGNoLW9mZiAuYm9vdHN0cmFwLXN3aXRjaC1pbmZvLFxuLmJvb3RzdHJhcC1zd2l0Y2guYm9vdHN0cmFwLXN3aXRjaC1vZmYgLmJvb3RzdHJhcC1zd2l0Y2gtd2FybmluZyxcbi5ib290c3RyYXAtc3dpdGNoLmJvb3RzdHJhcC1zd2l0Y2gtb2ZmIC5ib290c3RyYXAtc3dpdGNoLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZjZmNhO1xufVxuXG4vKiAgICAgIGxpZ2h0IGNvbG9ycyAtIHVzZWQgZm9yIHNlbGVjdCBkcm9wZG93biAgICAgICAgICovXG4ubGFuZGluZy1hbGVydCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCMkFGQUI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXgtaGVpZ2h0OiA5OTlweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogQ2VudGVyIHZlcnRpY2FsbHkgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLypDZW50ZXIgaG9yaXpvbnRhbHkgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qQ2VudGVyIGhvcml6b250YWx5IGllICovXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuLnBhZ2UtaGVhZGVyLnBhZ2UtaGVhZGVyLXNtYWxsIHtcbiAgbWluLWhlaWdodDogNjV2aCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA3MDBweDtcbn1cbi5wYWdlLWhlYWRlci5wYWdlLWhlYWRlci14cyB7XG4gIG1pbi1oZWlnaHQ6IDQwdmggIWltcG9ydGFudDtcbn1cbi5wYWdlLWhlYWRlci5zZWN0aW9uLWRhcmsgLmNvbnRlbnQtY2VudGVyLFxuLnBhZ2UtaGVhZGVyLnNlY3Rpb24tZGFyayAuY2F0ZWdvcnktYWJzb2x1dGUge1xuICB6LWluZGV4OiAxO1xufVxuXG4ucGFnZS1oZWFkZXIgLm1vdHRvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgei1pbmRleDogMztcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxhbmRpbmctc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zZWN0aW9uLWJ1dHRvbnMge1xuICB6LWluZGV4OiAxO1xufVxuXG4ubGFuZGluZy1zZWN0aW9uIC5idG4tc2ltcGxlIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxhbmRpbmctc2VjdGlvbiAuY29sdW1uIHtcbiAgcGFkZGluZzogMCA3NXB4IDAgMjVweDtcbn1cblxuLnRlYW0tcGxheWVyIC5pbWctY2lyY2xlLCAudGVhbS1wbGF5ZXIgLmltZy10aHVtYm5haWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNvbnRhY3QtZm9ybSBsYWJlbCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5jb250YWN0LWZvcm0gLmJ0biB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5uYXZiYXItcmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbiNyZWdpc3Rlci1uYXZiYXIgYSB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4ucmVnaXN0ZXItYmFja2dyb3VuZCAuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTElO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5yZWdpc3Rlci1mb290ZXIge1xuICBib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbGVmdDogMDtcbn1cblxuLnJlZ2lzdGVyLWZvb3RlciAuZmEtaGVhcnQge1xuICBjb2xvcjogI0VCNUUyODtcbn1cblxuLnJlZ2lzdGVyLWNhcmQgbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucmVnaXN0ZXItY2FyZCAudGl0bGUge1xuICBjb2xvcjogI0IzM0MxMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVnaXN0ZXItY2FyZCAuYnRuIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnJlZ2lzdGVyLWNhcmQgLmZvcmdvdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm93bmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3duZXIgLmF2YXRhciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIG1hcmdpbjogLTg1cHggYXV0byAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5vd25lciAubmFtZSBoNCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wcm9maWxlLXRhYnMge1xuICBtYXJnaW46IDUwcHggMDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG59XG5cbiNmb2xsb3dpbmcgaDMge1xuICBtYXJnaW46IDIwcHggMCA0MHB4IDA7XG59XG5cbiNmb2xsb3dzIC5mb2xsb3dzIC51bmZvbGxvdyAuY2hlY2tib3gge1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cblxuI2ZvbGxvd3MgLmZvbGxvd3MgaDYge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZm9sbG93cyBociB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aXRsZS1icmFuZCB7XG4gIG1heC13aWR0aDogNzMwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRpdGxlLWJyYW5kIC50eXBlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMxMzIwMjY7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRvcDogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcmlnaHQ6IC0xNXB4O1xufVxuXG4ucHJlc2VudGF0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiA4ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZGRkZGRiAzNSUsICM0ZTY3NzMgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZGRkZGRiAzNSUsICM0ZTY3NzMgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkZGRkZGIDM1JSwgIzRlNjc3MyAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZGRkZGRiAzNSUsICM0ZTY3NzMgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkZGRkYgMzUlLCAjNGU2NzczIDEwMCUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucHJlc2VudGF0aW9uLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjdlbTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5jYXRlZ29yeS1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDEwMHZoO1xuICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5jYXRlZ29yeS1hYnNvbHV0ZSAuY3JlYXRpdmUtdGltLWxvZ28ge1xuICBtYXgtd2lkdGg6IDE0MHB4O1xuICB0b3A6IC0ycHg7XG4gIGxlZnQ6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9nLWxvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogLTM1JTtcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG4gIHdpZHRoOiAxMTAlO1xuICBvcGFjaXR5OiAwLjg1O1xufVxuLmZvZy1sb3cgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9nLWxvdy5yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5hbmd1bGFyLWxvZ28ge1xuICBtYXgtd2lkdGg6IDkwcHg7XG4gIG1hcmdpbjogLTUwcHggYXV0byA0NXB4O1xufVxuLmFuZ3VsYXItbG9nbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vdmluZy1jbG91ZHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDI1MC42MjVlbTtcbiAgaGVpZ2h0OiA0My43NWVtO1xuICAtd2Via2l0LWFuaW1hdGlvbjogY2xvdWRMb29wIDgwcyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogY2xvdWRMb29wIDgwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgY2xvdWRMb29wIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xuICB9XG59XG4uZm9sbG93aW5nIGltZyB7XG4gIG1heC13aWR0aDogNzBweDtcbn1cblxuLmllLWJhY2tncm91bmQgLnBhZ2UtaGVhZGVyIC5jb250ZW50LWNlbnRlciB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03NSUpO1xufVxuLmllLWJhY2tncm91bmQgLnBhZ2UtaGVhZGVyIC5jb250ZW50LWNlbnRlciAudGl0bGUtYnJhbmQgLnByZXNlbnRhdGlvbi10aXRsZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAucHJlc2VudGF0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDVlbTtcbiAgfVxufVxuLyogICAgICAgICAgQ2hhbmdlcyBmb3Igc21hbGwgZGlzcGxheSAgICAgICovXG4vKiAgICAgIGxpZ2h0IGNvbG9ycyAtIHVzZWQgZm9yIHNlbGVjdCBkcm9wZG93biAgICAgICAgICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5hdmJhci10cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgfVxuXG4gIGJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICBoNiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICAubmF2YmFyIC5jb250YWluZXIge1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubmF2YmFyIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuXG4gIC5kZW1vLWhlYWRlciAubW90dG8ge1xuICAgIHBhZGRpbmctdG9wOiAzMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmZvZy1sb3cge1xuICAgIG1hcmdpbi1ib3R0b206IC0zNXB4O1xuICB9XG5cbiAgLnByZXNlbnRhdGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiA1ZW07XG4gIH1cblxuICAucHJlc2VudGF0aW9uLXN1YnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG5cbiAgLnRpdGxlLWJyYW5kIHtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICB9XG4gIC50aXRsZS1icmFuZCAudHlwZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLm5hdmJhci1oZWFkZXIgLm5hdmJhci10b2dnbGUge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgLmJhcjEsXG4uYmFyMixcbi5iYXIzIHtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuYmFyMSB7XG4gICAgdG9wOiAwcHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHRvcGJhci1iYWNrIDUwMG1zIGxpbmVhciAwcztcbiAgICAtbW96LWFuaW1hdGlvbjogdG9wYmFyLWJhY2sgNTAwbXMgbGluZWFyIDBzO1xuICAgIGFuaW1hdGlvbjogdG9wYmFyLWJhY2sgNTAwbXMgMHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICB9XG5cbiAgLmJhcjIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAuYmFyMyB7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJvdHRvbWJhci1iYWNrIDUwMG1zIGxpbmVhciAwcztcbiAgICAtbW96LWFuaW1hdGlvbjogYm90dG9tYmFyLWJhY2sgNTAwbXMgbGluZWFyIDBzO1xuICAgIGFuaW1hdGlvbjogYm90dG9tYmFyLWJhY2sgNTAwbXMgMHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICB9XG5cbiAgLnRvZ2dsZWQgLmJhcjEge1xuICAgIHRvcDogNnB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0b3BiYXIteCA1MDBtcyBsaW5lYXIgMHM7XG4gICAgLW1vei1hbmltYXRpb246IHRvcGJhci14IDUwMG1zIGxpbmVhciAwcztcbiAgICBhbmltYXRpb246IHRvcGJhci14IDUwMG1zIDBzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgfVxuXG4gIC50b2dnbGVkIC5iYXIyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgLnRvZ2dsZWQgLmJhcjMge1xuICAgIGJvdHRvbTogNnB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBib3R0b21iYXIteCA1MDBtcyBsaW5lYXIgMHM7XG4gICAgLW1vei1hbmltYXRpb246IGJvdHRvbWJhci14IDUwMG1zIGxpbmVhciAwcztcbiAgICBhbmltYXRpb246IGJvdHRvbWJhci14IDUwMG1zIDBzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgfVxuXG4gIEBrZXlmcmFtZXMgdG9wYmFyLXgge1xuICAgIDAlIHtcbiAgICAgIHRvcDogMHB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDQ1JSB7XG4gICAgICB0b3A6IDZweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE0NWRlZyk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgfVxuICB9XG4gIEAtd2Via2l0LWtleWZyYW1lcyB0b3BiYXIteCB7XG4gICAgMCUge1xuICAgICAgdG9wOiAwcHg7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICA0NSUge1xuICAgICAgdG9wOiA2cHg7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE0NWRlZyk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAgIH1cbiAgfVxuICBALW1vei1rZXlmcmFtZXMgdG9wYmFyLXgge1xuICAgIDAlIHtcbiAgICAgIHRvcDogMHB4O1xuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgNDUlIHtcbiAgICAgIHRvcDogNnB4O1xuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNDVkZWcpO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyB0b3BiYXItYmFjayB7XG4gICAgMCUge1xuICAgICAgdG9wOiA2cHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAgIH1cbiAgICA0NSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRvcDogMHB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgfVxuICB9XG4gIEAtd2Via2l0LWtleWZyYW1lcyB0b3BiYXItYmFjayB7XG4gICAgMCUge1xuICAgICAgdG9wOiA2cHg7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgfVxuICAgIDQ1JSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRvcDogMHB4O1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB9XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzIHRvcGJhci1iYWNrIHtcbiAgICAwJSB7XG4gICAgICB0b3A6IDZweDtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICB9XG4gICAgNDUlIHtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdG9wOiAwcHg7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGJvdHRvbWJhci14IHtcbiAgICAwJSB7XG4gICAgICBib3R0b206IDBweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICA0NSUge1xuICAgICAgYm90dG9tOiA2cHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTQ1ZGVnKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgIH1cbiAgfVxuICBALXdlYmtpdC1rZXlmcmFtZXMgYm90dG9tYmFyLXgge1xuICAgIDAlIHtcbiAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgNDUlIHtcbiAgICAgIGJvdHRvbTogNnB4O1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTQ1ZGVnKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICB9XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzIGJvdHRvbWJhci14IHtcbiAgICAwJSB7XG4gICAgICBib3R0b206IDBweDtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDQ1JSB7XG4gICAgICBib3R0b206IDZweDtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTE0NWRlZyk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgYm90dG9tYmFyLWJhY2sge1xuICAgIDAlIHtcbiAgICAgIGJvdHRvbTogNnB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgfVxuICAgIDQ1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYm90dG9tOiAwcHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB9XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIGJvdHRvbWJhci1iYWNrIHtcbiAgICAwJSB7XG4gICAgICBib3R0b206IDZweDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgfVxuICAgIDQ1JSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB9XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzIGJvdHRvbWJhci1iYWNrIHtcbiAgICAwJSB7XG4gICAgICBib3R0b206IDZweDtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgfVxuICAgIDQ1JSB7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB9XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIC5uYXZiYXItbmF2IHtcbiAgICBtYXJnaW46IDFweCAtMTVweDtcbiAgfVxuICAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYSB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDVweCA1MHB4O1xuICB9XG4gIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGk6Zmlyc3QtY2hpbGQgPiBhIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggNTBweDtcbiAgfVxuICAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpOmxhc3QtY2hpbGQgPiBhIHtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMjVweCA1MHB4O1xuICB9XG5cbiAgW2NsYXNzKj1uYXZiYXItXSAubmF2YmFyLW5hdiA+IGxpID4gYSwgW2NsYXNzKj1uYXZiYXItXSAubmF2YmFyLW5hdiA+IGxpID4gYTpob3ZlciwgW2NsYXNzKj1uYXZiYXItXSAubmF2YmFyLW5hdiA+IGxpID4gYTpmb2N1cywgW2NsYXNzKj1uYXZiYXItXSAubmF2YmFyLW5hdiAuYWN0aXZlID4gYSwgW2NsYXNzKj1uYXZiYXItXSAubmF2YmFyLW5hdiAuYWN0aXZlID4gYTpob3ZlciwgW2NsYXNzKj1uYXZiYXItXSAubmF2YmFyLW5hdiAuYWN0aXZlID4gYTpmb2N1cywgW2NsYXNzKj1uYXZiYXItXSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYSwgW2NsYXNzKj1uYXZiYXItXSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlciwgW2NsYXNzKj1uYXZiYXItXSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cywgW2NsYXNzKj1uYXZiYXItXSAubmF2YmFyLW5hdiAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTphY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBbY2xhc3MqPW5hdmJhci1dIC5uYXZiYXItbmF2ID4gbGkgPiBhOm5vdCguYnRuKSxcbltjbGFzcyo9bmF2YmFyLV0gLm5hdmJhci1uYXYgPiBsaSA+IGE6aG92ZXIsXG5bY2xhc3MqPW5hdmJhci1dIC5uYXZiYXItbmF2ID4gbGkgPiBhOmZvY3VzLFxuW2NsYXNzKj1uYXZiYXItXSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpub3QoLmJ0biksXG5bY2xhc3MqPW5hdmJhci1dIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyLFxuW2NsYXNzKj1uYXZiYXItXSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cyB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gIFtjbGFzcyo9bmF2YmFyLV0gLm5hdmJhci1uYXYubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTphY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgW2NsYXNzKj1uYXZiYXItXSAubmF2YmFyLW5hdiAuZHJvcGRvd24gPiBhOmhvdmVyIC5jYXJldCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzc3NztcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjNzc3O1xuICB9XG4gIFtjbGFzcyo9bmF2YmFyLV0gLm5hdmJhci1uYXYgLmRyb3Bkb3duID4gYTphY3RpdmUgLmNhcmV0IHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXItd2lkZ2V0IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLmRyb3Bkb3duLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubmF2YmFyLWZpeGVkLXRvcCB7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAuc29jaWFsLWxpbmUgLmJ0biB7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICB9XG5cbiAgLnN1YnNjcmliZS1saW5lIC5mb3JtLWNvbnRyb2wge1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgfVxuXG4gIC5zb2NpYWwtbGluZS5wdWxsLXJpZ2h0IHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuXG4gIC5mb290ZXIgbmF2LnB1bGwtbGVmdCB7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mb290ZXI6bm90KC5mb290ZXItYmlnKSBuYXYgPiB1bCBsaSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cblxuICAuZm9vdGVyIC5mb290ZXItbmF2LFxuLmZvb3RlciAuY3JlZGl0cyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuc2VjdGlvbi1idXR0b25zIC5pbnB1dC1ncm91cCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICAuc2VjdGlvbi1idXR0b25zIC5mb3JtLWdyb3VwLmhhcy1kYW5nZXIgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLnNvY2lhbC1hcmVhLnB1bGwtcmlnaHQge1xuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZm9ybS1jb250cm9sICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbiAgfVxuXG4gIC5uYXZiYXItdG9nZ2xlOmhvdmVyLCAubmF2YmFyLXRvZ2dsZTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLm1lZGlhLXBvc3QgLmF1dGhvciB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gIH1cblxuICAubWVkaWEtcG9zdCAubWVkaWEtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubW9kYWwtZm9vdGVyIC5idG4tc2ltcGxlIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgfVxuXG4gIC50eXBvZ3JhcGh5LWxpbmUge1xuICAgIHBhZGRpbmctbGVmdDogMTAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wcm9qZWN0cy0xIC5wcm9qZWN0LXBpbGxzIC5uYXYubmF2LXBpbGxzIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9qZWN0cy0xIC5wcm9qZWN0LXBpbGxzIC5uYXYubmF2LXBpbGxzIC5uYXYtaXRlbTpmaXJzdC1jaGlsZCAubmF2LWxpbmsge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgfVxuICAucHJvamVjdHMtMSAucHJvamVjdC1waWxscyAubmF2Lm5hdi1waWxscyAubmF2LWl0ZW0uYWN0aXZlOmZpcnN0LWNoaWxkIC5uYXYtbGluayB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICB9XG4gIC5wcm9qZWN0cy0xIC5wcm9qZWN0LXBpbGxzIC5uYXYubmF2LXBpbGxzIC5uYXYtaXRlbTpsYXN0LWNoaWxkIC5uYXYtbGluayB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICB9XG5cbiAgLnRlc3RpbW9uaWFscy0yIC50ZXN0aW1vbmlhbHMtcGVvcGxlIGltZyxcbi5zZWN0aW9uLXRlc3RpbW9uaWFscyAudGVzdGltb25pYWxzLXBlb3BsZSBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wcmVzZW50YXRpb24tcGFnZSAuc2VjdGlvbi1jYXJkcyxcbi5wcmVzZW50YXRpb24tcGFnZSAuc2VjdGlvbi1jb21wb25lbnRzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5wcmVzZW50YXRpb24tcGFnZSAuc2VjdGlvbi1jYXJkcyAuZmlyc3QtY2FyZCxcbi5wcmVzZW50YXRpb24tcGFnZSAuc2VjdGlvbi1jb21wb25lbnRzIC5maXJzdC1jYXJkIHtcbiAgICB0b3A6IDc1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByZXNlbnRhdGlvbi1wYWdlIC5zZWN0aW9uLWNhcmRzIC5maXJzdC1jYXJkIC5ncmlkX19saW5rLFxuLnByZXNlbnRhdGlvbi1wYWdlIC5zZWN0aW9uLWNvbXBvbmVudHMgLmZpcnN0LWNhcmQgLmdyaWRfX2xpbmsge1xuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcmVzZW50YXRpb24tcGFnZSAuc2VjdGlvbi1jYXJkcyAuZm91cnRoLWNhcmQsXG4ucHJlc2VudGF0aW9uLXBhZ2UgLnNlY3Rpb24tY29tcG9uZW50cyAuZm91cnRoLWNhcmQge1xuICAgIHRvcDogOTQwcHggIWltcG9ydGFudDtcbiAgfVxuICAucHJlc2VudGF0aW9uLXBhZ2UgLnNlY3Rpb24tY2FyZHMgLmZvdXJ0aC1jYXJkIC5ncmlkX19saW5rLFxuLnByZXNlbnRhdGlvbi1wYWdlIC5zZWN0aW9uLWNvbXBvbmVudHMgLmZvdXJ0aC1jYXJkIC5ncmlkX19saW5rIHtcbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgfVxuICAucHJlc2VudGF0aW9uLXBhZ2UgLnNlY3Rpb24tY2FyZHMgLmZpZnRoLWNhcmQsXG4ucHJlc2VudGF0aW9uLXBhZ2UgLnNlY3Rpb24tY29tcG9uZW50cyAuZmlmdGgtY2FyZCB7XG4gICAgdG9wOiA5NTBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDIyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByZXNlbnRhdGlvbi1wYWdlIC5zZWN0aW9uLWNhcmRzIC5maWZ0aC1jYXJkIC5ncmlkX19saW5rLFxuLnByZXNlbnRhdGlvbi1wYWdlIC5zZWN0aW9uLWNvbXBvbmVudHMgLmZpZnRoLWNhcmQgLmdyaWRfX2xpbmsge1xuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcmVzZW50YXRpb24tcGFnZSAuc2VjdGlvbi1jYXJkcyAuc2l4dGgtY2FyZCxcbi5wcmVzZW50YXRpb24tcGFnZSAuc2VjdGlvbi1jb21wb25lbnRzIC5zaXh0aC1jYXJkIHtcbiAgICB0b3A6IDEzMzVweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDIyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByZXNlbnRhdGlvbi1wYWdlIC5zZWN0aW9uLWNhcmRzIC5zaXh0aC1jYXJkIC5ncmlkX19saW5rLFxuLnByZXNlbnRhdGlvbi1wYWdlIC5zZWN0aW9uLWNvbXBvbmVudHMgLnNpeHRoLWNhcmQgLmdyaWRfX2xpbmsge1xuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcmVzZW50YXRpb24tcGFnZSAuc2VjdGlvbi1jYXJkcyAuc2V2ZW50aC1jYXJkLFxuLnByZXNlbnRhdGlvbi1wYWdlIC5zZWN0aW9uLWNvbXBvbmVudHMgLnNldmVudGgtY2FyZCB7XG4gICAgdG9wOiAxMTU1cHggIWltcG9ydGFudDtcbiAgfVxuICAucHJlc2VudGF0aW9uLXBhZ2UgLnNlY3Rpb24tY2FyZHMgLnNldmVudGgtY2FyZCAuZ3JpZF9fbGluayxcbi5wcmVzZW50YXRpb24tcGFnZSAuc2VjdGlvbi1jb21wb25lbnRzIC5zZXZlbnRoLWNhcmQgLmdyaWRfX2xpbmsge1xuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcmVzZW50YXRpb24tcGFnZSAuc2VjdGlvbi1jb250ZW50IC5pbWFnZS1jb250YWluZXIgLmFkZC1hbmltYXRpb24ge1xuICAgIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTgwcHggIWltcG9ydGFudDtcbiAgfVxuICAucHJlc2VudGF0aW9uLXBhZ2UgLnNlY3Rpb24tY29tcG9uZW50cyAuaW1hZ2UtY29udGFpbmVyIC5jb21wb25lbnRzLW1hY2Jvb2sge1xuICAgIHdpZHRoOiA1ODBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcbiAgfVxuICAucHJlc2VudGF0aW9uLXBhZ2UgLnNlY3Rpb24tY29tcG9uZW50cyAuaW1hZ2UtY29udGFpbmVyIC5zb2NpYWwtaW1nLFxuLnByZXNlbnRhdGlvbi1wYWdlIC5zZWN0aW9uLWNvbXBvbmVudHMgLmltYWdlLWNvbnRhaW5lciAuc2hhcmUtYnRuLWltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJlc2VudGF0aW9uLXBhZ2UgLnNlY3Rpb24tY29tcG9uZW50cyAudGl0bGUge1xuICAgIG1hcmdpbi10b3A6IC0xMDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcmVzZW50YXRpb24tcGFnZSAuc2VjdGlvbi1leGFtcGxlcyB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByZXNlbnRhdGlvbi1wYWdlIC5zZWN0aW9uLWljb25zIC5pY29ucy1udWNsZW8gLm5jLWljb246bm90KC5uaW50aC1sZWZ0LWljb24pOm5vdCguc2V2ZW50aC1sZWZ0LWljb24pOm5vdCgudGhpcmQtbGVmdC1pY29uKSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgI3R5cG9ncmFwaHkgLnR5cG9ncmFwaHktbGluZSAubm90ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlY3Rpb24tbnVjbGVvLWljb25zIFtjbGFzcyo9Y29sLWxnXSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMTAzMjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQ0NDNUI5O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIzMHB4LCAwLCAwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjMwcHgsIDAsIDApO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjMwcHgsIDAsIDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIzMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIzMHB4LCAwLCAwKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xuICB9XG4gIC5uYXZiYXItY29sbGFwc2UgdWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAzO1xuICAgIGhlaWdodDogOTUlO1xuICB9XG4gIC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgfVxuICAubmF2YmFyLWNvbGxhcHNlIC5uYXZiYXItbmF2ID4gLm5hdi1pdGVtID4gLm5hdi1saW5rIHtcbiAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgY29sb3I6ICM5QTlBOUEgIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gIH1cbiAgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSA+IC5uYXYtbGluazpob3ZlciwgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSA+IC5uYXYtbGluazphY3RpdmUge1xuICAgIGNvbG9yOiAjNDAzRDM5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhci1jb2xsYXBzZTo6YWZ0ZXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkNGNTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApIDAlLCByZ2JhKDExMiwgMTEyLCAxMTIsIDApIDYwJSwgcmdiYSgxODYsIDE4NiwgMTg2LCAwLjE1KSAxMDAlKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgLm5hdmJhci1jb2xsYXBzZS5oYXMtaW1hZ2U6OmFmdGVyIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE3LCAxNywgMC44KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAubmF2LW9wZW4gLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5uYXYtb3BlbiAud3JhcHBlciB7XG4gICAgbGVmdDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIzMHB4LCAwLCAwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIzMHB4LCAwLCAwKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMzBweCwgMCwgMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIzMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMzBweCwgMCwgMCk7XG4gIH1cbiAgLm5hdi1vcGVuIC5uYXZiYXItdHJhbnNsYXRlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIzMHB4LCAwLCAwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIzMHB4LCAwLCAwKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMzBweCwgMCwgMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIzMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMzBweCwgMCwgMCk7XG4gIH1cblxuICAud3JhcHBlciAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZpeGVkLXRvcCAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4RjVFO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgLmRyb3Bkb3duLnNob3cgLmRyb3Bkb3duLW1lbnUsXG4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgLmRyb3Bkb3duLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIsXG4uZHJvcGRvd24uc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cyxcbi5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3Zlcixcbi5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAuZHJvcGRvd24uc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSBhOmhvdmVyLCAuZHJvcGRvd24uc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSBhOmZvY3VzLFxuLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIGE6aG92ZXIsXG4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0gYTpmb2N1cyB7XG4gICAgY29sb3I6ICM0MDNEMzk7XG4gIH1cbiAgLmRyb3Bkb3duLnNob3cgLmRyb3Bkb3duLW1lbnU6YmVmb3JlLCAuZHJvcGRvd24uc2hvdyAuZHJvcGRvd24tbWVudTphZnRlcixcbi5kcm9wZG93biAuZHJvcGRvd24tbWVudTpiZWZvcmUsXG4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnU6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmRyb3Bkb3duLnNob3cgLmRyb3Bkb3duLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLm5hdmJhci10cmFuc2xhdGUge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XG4gIH1cblxuICAud3JhcHBlciB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xuICAuc2VjdGlvbi1zZWN0aW9ucyAuc2VjdGlvbi1jb2xzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAuc2VjdGlvbi1zZWN0aW9ucyAuc2VjdGlvbi1jb2xzIC5yb3c6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04MHB4LCAwLCAwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTgwcHgsIDAsIDApO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTgwcHgsIDAsIDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04MHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04MHB4LCAwLCAwKTtcbiAgfVxuICAuc2VjdGlvbi1zZWN0aW9ucyAuc2VjdGlvbi1jb2xzIC5yb3c6bnRoLW9mLXR5cGUoMikge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCk7XG4gIH1cbiAgLnNlY3Rpb24tc2VjdGlvbnMgLnNlY3Rpb24tY29scyAucm93Om50aC1vZi10eXBlKDMpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwcHgpO1xuICB9XG4gIC5zZWN0aW9uLXNlY3Rpb25zIC5zZWN0aW9uLWNvbHMgLnJvdzpudGgtb2YtdHlwZSg0KSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XG4gIC5idXJnZXItbWVudSAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB6LWluZGV4OiAxMDMyO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNDQ0M1Qjk7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjMwcHgsIDAsIDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMzBweCwgMCwgMCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMzBweCwgMCwgMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjMwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjMwcHgsIDAsIDApO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XG4gIH1cbiAgLmJ1cmdlci1tZW51IC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gIH1cbiAgLmJ1cmdlci1tZW51IC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5idXJnZXItbWVudSAubmF2YmFyLWNvbGxhcHNlOjphZnRlciB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQ0Y1O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCkgMCUsIHJnYmEoMTEyLCAxMTIsIDExMiwgMCkgNjAlLCByZ2JhKDE4NiwgMTg2LCAxODYsIDAuMTUpIDEwMCUpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAuYnVyZ2VyLW1lbnUgLm5hdmJhci1jb2xsYXBzZS5oYXMtaW1hZ2U6OmFmdGVyIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE3LCAxNywgMC44KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgLmJ1cmdlci1tZW51IC5uYXZiYXIgLmNvbnRhaW5lciAubmF2YmFyLXRvZ2dsZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLmJ1cmdlci1tZW51IC5uYXZiYXItdHJhbnNsYXRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgfVxuICAuYnVyZ2VyLW1lbnUgLndyYXBwZXIge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuYnVyZ2VyLW1lbnUgLmJvZHkgLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZSB7XG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICB9XG4gIC5idXJnZXItbWVudSAubmF2YmFyLWNvbGxhcHNlOmJlZm9yZSwgLmJ1cmdlci1tZW51IC5uYXZiYXItY29sbGFwc2U6YWZ0ZXIsXG4uYnVyZ2VyLW1lbnUgLm5hdmJhci1uYXY6YmVmb3JlLFxuLmJ1cmdlci1tZW51IC5uYXZiYXItbmF2OmFmdGVyIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgfVxuICAubmF2LW9wZW4gLmJ1cmdlci1tZW51IC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2Uge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcbiAgfVxuICAubmF2LW9wZW4gLmJ1cmdlci1tZW51IC53cmFwcGVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjMwcHgsIDAsIDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjMwcHgsIDAsIDApO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIzMHB4LCAwLCAwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjMwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIzMHB4LCAwLCAwKTtcbiAgfVxuICAubmF2LW9wZW4gLmJ1cmdlci1tZW51IC5uYXZiYXItdHJhbnNsYXRlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIzMHB4LCAwLCAwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIzMHB4LCAwLCAwKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMzBweCwgMCwgMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIzMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMzBweCwgMCwgMCk7XG4gIH1cbiAgLmJ1cmdlci1tZW51IC5kcm9wZG93bi5zaG93IC5kcm9wZG93bi1tZW51LFxuLmJ1cmdlci1tZW51IC5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAuYnVyZ2VyLW1lbnUgLmRyb3Bkb3duLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIsXG4uYnVyZ2VyLW1lbnUgLmRyb3Bkb3duLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06Zm9jdXMsXG4uYnVyZ2VyLW1lbnUgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmhvdmVyLFxuLmJ1cmdlci1tZW51IC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAuYnVyZ2VyLW1lbnUgLmRyb3Bkb3duLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0gYTpob3ZlciwgLmJ1cmdlci1tZW51IC5kcm9wZG93bi5zaG93IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIGE6Zm9jdXMsXG4uYnVyZ2VyLW1lbnUgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIGE6aG92ZXIsXG4uYnVyZ2VyLW1lbnUgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjNDAzRDM5O1xuICB9XG4gIC5idXJnZXItbWVudSAuZHJvcGRvd24uc2hvdyAuZHJvcGRvd24tbWVudTpiZWZvcmUsIC5idXJnZXItbWVudSAuZHJvcGRvd24uc2hvdyAuZHJvcGRvd24tbWVudTphZnRlcixcbi5idXJnZXItbWVudSAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnU6YmVmb3JlLFxuLmJ1cmdlci1tZW51IC5kcm9wZG93biAuZHJvcGRvd24tbWVudTphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYnVyZ2VyLW1lbnUgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5idXJnZXItbWVudSAuZHJvcGRvd24uc2hvdyAuZHJvcGRvd24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICAuaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uL0FjZXNvcmlvcy92YXJpYWJsZXNcIjtcbi5sYW5kaW5nLWFsZXJ0e1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucGFnZS1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IyQUZBQjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWF4LWhlaWdodDogOTk5cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBDZW50ZXIgdmVydGljYWxseSAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLypDZW50ZXIgaG9yaXpvbnRhbHkgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC8qQ2VudGVyIGhvcml6b250YWx5IGllICovXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuXG4gICAgLmZpbHRlcjo6YWZ0ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgICYucGFnZS1oZWFkZXItc21hbGx7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDY1dmggIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNzAwcHg7XG4gICAgfVxuICAgICYucGFnZS1oZWFkZXIteHN7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwdmggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLnNlY3Rpb24tZGFya3tcbiAgICAgICAgLmNvbnRlbnQtY2VudGVyLFxuICAgICAgICAuY2F0ZWdvcnktYWJzb2x1dGV7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuLnBhZ2UtaGVhZGVyIC5tb3R0b3tcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHotaW5kZXg6IDM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG4ubGFuZGluZy1zZWN0aW9ue1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG4gICAgei1pbmRleDogMTtcbn1cbi5zZWN0aW9uLWJ1dHRvbnN7XG4gICAgei1pbmRleDogMTtcbn1cbi5sYW5kaW5nLXNlY3Rpb24gLmJ0bi1zaW1wbGV7XG4gICAgcGFkZGluZzogMDtcbn1cbi5sYW5kaW5nLXNlY3Rpb24gLmNvbHVtbntcbiAgICBwYWRkaW5nOiAwIDc1cHggMCAyNXB4O1xufVxuLnRlYW0tcGxheWVyIC5pbWctY2lyY2xlLCAudGVhbS1wbGF5ZXIgLmltZy10aHVtYm5haWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEyMHB4O1xufVxuLmNvbnRhY3QtZm9ybXtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmNvbnRhY3QtZm9ybSBsYWJlbHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNvbnRhY3QtZm9ybSAuYnRue1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5uYXZiYXItcmVsYXRpdmV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG59XG4jcmVnaXN0ZXItbmF2YmFyIGF7XG4gICAgY29sb3I6ICNGRkY7XG59XG4ucmVnaXN0ZXItYmFja2dyb3VuZCAuY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDExJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMztcbn1cbi5yZWdpc3Rlci1mb290ZXJ7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XG4gICAgbGVmdDogMDtcbn1cbi5yZWdpc3Rlci1mb290ZXIgLmZhLWhlYXJ0e1xuICAgIGNvbG9yOiAjRUI1RTI4O1xufVxuXG4ucmVnaXN0ZXItY2FyZCBsYWJlbHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnJlZ2lzdGVyLWNhcmQgLnRpdGxle1xuICAgIGNvbG9yOiAjQjMzQzEyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3Rlci1jYXJkIC5idG57XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5yZWdpc3Rlci1jYXJkIC5mb3Jnb3R7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZmlsZS1jb250ZW50e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5vd25lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ub3duZXIgLmF2YXRhcntcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgbWFyZ2luOiAtODVweCBhdXRvIDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm93bmVyIC5uYW1lIGg0e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucHJvZmlsZS10YWJze1xuICAgIG1hcmdpbjogNTBweCAwO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuI2ZvbGxvd2luZyBoM3tcbiAgICBtYXJnaW46IDIwcHggMCA0MHB4IDA7XG59XG4jZm9sbG93cyAuZm9sbG93cyAudW5mb2xsb3cgLmNoZWNrYm94e1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuI2ZvbGxvd3MgLmZvbGxvd3MgaDZ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5mb2xsb3dzIGhye1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYWxlcnQgaDV7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi50aXRsZS1icmFuZHtcbiAgICBtYXgtd2lkdGg6IDczMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAudHlwZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxMzIwMjY7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IC0xNXB4O1xuICAgIH1cbn1cblxuLnByZXNlbnRhdGlvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDhlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZmJmOGVjO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZGRkZGRiAzNSUsICM0ZTY3NzMgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkZGRkZGIDM1JSwjNGU2NzczIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkZGRkZGIDM1JSwjNGU2NzczIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkZGRkYgMzUlLCM0ZTY3NzMgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZGRkZGRiAzNSUsIzRlNjc3MyAxMDAlKTtcblxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5wcmVzZW50YXRpb24tc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmNhdGVnb3J5LWFic29sdXRle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAxMDB2aDtcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcblxuICAgIC5jcmVhdGl2ZS10aW0tbG9nbyB7XG4gICAgICAgIG1heC13aWR0aDogMTQwcHg7XG4gICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgbGVmdDogM3B4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxufVxuXG4uZm9nLWxvd3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luLWxlZnQ6IC0zNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG4gICAgd2lkdGg6IDExMCU7XG4gICAgb3BhY2l0eTogLjg1O1xuXG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmLnJpZ2h0e1xuICAgICAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbi5hbmd1bGFyLWxvZ297XG4gICAgbWF4LXdpZHRoOiA5MHB4O1xuICAgIG1hcmdpbjogLTUwcHggYXV0byA0NXB4O1xuXG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4ucGFnZS1oZWFkZXJ7XG4gICAgLmNvbnRlbnQtY2VudGVye1xuICAgICAgICAvL21hcmdpbi10b3A6IDg1cHg7XG4gICAgfVxufVxuLm1vdmluZy1jbG91ZHN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDI1MC42MjVlbTtcbiAgICBoZWlnaHQ6IDQzLjc1ZW07XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGNsb3VkTG9vcCA4MHMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogY2xvdWRMb29wIDgwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgY2xvdWRMb29weyAgIDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNTAlLDAsMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTUwJSwwLDApfVxuICAgICAgICAgICAgICAgICAgICB9XG4uZm9sbG93aW5ne1xuICAgIGltZ3tcbiAgICAgICAgbWF4LXdpZHRoOiA3MHB4O1xuICAgIH1cbn1cblxuLmllLWJhY2tncm91bmR7XG4gICAgLnBhZ2UtaGVhZGVye1xuICAgICAgICAuY29udGVudC1jZW50ZXJ7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNzUlKTtcbiAgICAgICAgICAgIC50aXRsZS1icmFuZHtcbiAgICAgICAgICAgICAgICAucHJlc2VudGF0aW9uLXRpdGxle1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KXtcbiAgICAucHJlc2VudGF0aW9uLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDVlbTtcbiAgICB9XG59XG4iLCIvKiAgICAgICAgICBDaGFuZ2VzIGZvciBzbWFsbCBkaXNwbGF5ICAgICAgKi9cbkBpbXBvcnQgXCIuLi9BY2Vzb3Jpb3MvdmFyaWFibGVzXCI7XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xuICAgIC5uYXZiYXItdHJhbnNwYXJlbnR7XG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAgIH1cbiAgICBib2R5IHtcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcbiAgICB9XG4gICAgaDZ7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgICAubmF2YmFyIC5jb250YWluZXJ7XG4gICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiAoMC4zM3MsIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSkpO1xuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51e1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgfVxuICAgIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZSxcbiAgICAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2UuaW4sXG4gICAgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNpbmd7XG4gICAgICAgIC8vIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmRlbW8taGVhZGVyIC5tb3R0b3tcbiAgICAgICAgcGFkZGluZy10b3A6IDMwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAuZm9nLWxvd3tcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTM1cHg7XG4gICAgfVxuICAgIC5wcmVzZW50YXRpb24tdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgIH1cbiAgICAucHJlc2VudGF0aW9uLXN1YnRpdGxle1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbiAgICAudGl0bGUtYnJhbmR7XG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgICAgIC50eXBle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm5hdmJhci1oZWFkZXIgLm5hdmJhci10b2dnbGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgICAuYmFyMSxcbiAgICAuYmFyMixcbiAgICAuYmFyMyB7XG4gICAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC5iYXIxIHtcbiAgICAgIHRvcDogMHB4O1xuICAgICAgQGluY2x1ZGUgYmFyLWFuaW1hdGlvbigkdG9wYmFyLWJhY2spO1xuICAgIH1cbiAgICAuYmFyMiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAuYmFyMyB7XG4gICAgICBib3R0b206IDBweDtcbiAgICAgIEBpbmNsdWRlIGJhci1hbmltYXRpb24oJGJvdHRvbWJhci1iYWNrKTtcbiAgICB9XG4gICAgLnRvZ2dsZWQgLmJhcjEge1xuICAgICAgdG9wOiA2cHg7XG4gICAgICBAaW5jbHVkZSBiYXItYW5pbWF0aW9uKCR0b3BiYXIteCk7XG4gICAgfVxuICAgIC50b2dnbGVkIC5iYXIyIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIC50b2dnbGVkIC5iYXIzIHtcbiAgICAgIGJvdHRvbTogNnB4O1xuICAgICAgQGluY2x1ZGUgYmFyLWFuaW1hdGlvbigkYm90dG9tYmFyLXgpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHRvcGJhci14LXJvdGF0aW9uKCk7XG4gICAgQGluY2x1ZGUgdG9wYmFyLWJhY2stcm90YXRpb24oKTtcbiAgICBAaW5jbHVkZSBib3R0b21iYXIteC1yb3RhdGlvbigpO1xuICAgIEBpbmNsdWRlIGJvdHRvbWJhci1iYWNrLXJvdGF0aW9uKCk7XG5cbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIDAlIHtvcGFjaXR5OiAwO31cbiAgICAgIDEwMCUge29wYWNpdHk6IDE7fVxuICAgIH1cbiAgICBALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIDAlIHtvcGFjaXR5OiAwO31cbiAgICAgIDEwMCUge29wYWNpdHk6IDE7fVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAwJSB7b3BhY2l0eTogMDt9XG4gICAgICAxMDAlIHtvcGFjaXR5OiAxO31cbiAgICB9XG5cbiAgICAubmF2YmFyLW5hdiB7XG4gICAgICAgIG1hcmdpbjogMXB4IC0xNXB4O1xuXG4gICAgICAgIC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkge1xuICAgICAgICAgICAgJiA+IGF7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAxNXB4IDVweCA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkID4gYXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkID4gYSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAxNXB4IDI1cHggNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFtjbGFzcyo9XCJuYXZiYXItXCJdIC5uYXZiYXItbmF2IHtcbiAgICAgICAgJiA+IGxpID4gYSwgPiBsaSA+IGE6aG92ZXIsID4gbGkgPiBhOmZvY3VzLCAuYWN0aXZlID4gYSwgLmFjdGl2ZSA+IGE6aG92ZXIsIC5hY3RpdmUgPiBhOmZvY3VzLCAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYSwgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIsIC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmZvY3VzLCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTphY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgIH1cblxuICAgICAgICAmID4gbGkgPiBhOm5vdCguYnRuKSxcbiAgICAgICAgPiBsaSA+IGE6aG92ZXIsXG4gICAgICAgID4gbGkgPiBhOmZvY3VzLFxuICAgICAgICAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpub3QoLmJ0biksXG4gICAgICAgIC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyLFxuICAgICAgICAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1c3tcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6YWN0aXZlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAmIC5kcm9wZG93biA+IGF7XG4gICAgICAgICAgICAmOmhvdmVyIC5jYXJldCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzc3NztcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjNzc3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjphY3RpdmUgLmNhcmV0IHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLmJvb3RzdHJhcC1kYXRldGltZXBpY2tlci13aWRnZXR7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubmF2YmFyLWZpeGVkLXRvcCB7XG4gICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgIC5zb2NpYWwtbGluZSAuYnRue1xuICAgICAgICBtYXJnaW46ICRtYXJnaW4tYm90dG9tO1xuICAgIH1cbiAgICAuc3Vic2NyaWJlLWxpbmUgLmZvcm0tY29udHJvbHtcbiAgICAgICAgbWFyZ2luOiAkbWFyZ2luLWJvdHRvbTtcbiAgICB9XG4gICAgLnNvY2lhbC1saW5lLnB1bGwtcmlnaHR7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgICAuZm9vdGVyIG5hdi5wdWxsLWxlZnR7XG4gICAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mb290ZXI6bm90KC5mb290ZXItYmlnKSBuYXYgPiB1bCBsaXtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuICAgIC5mb290ZXJ7XG4gICAgICAgIC5mb290ZXItbmF2LFxuICAgICAgICAuY3JlZGl0c3tcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zZWN0aW9uLWJ1dHRvbnN7XG4gICAgICAgIC5pbnB1dC1ncm91cHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0tZ3JvdXAuaGFzLWRhbmdlcntcbiAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5zb2NpYWwtYXJlYS5wdWxsLXJpZ2h0e1xuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZm9ybS1jb250cm9sICsgLmZvcm0tY29udHJvbC1mZWVkYmFja3tcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICB9XG4gICAgLm5hdmJhci10b2dnbGU6aG92ZXIsLm5hdmJhci10b2dnbGU6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYnRuLmRyb3Bkb3duLXRvZ2dsZXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgLm1lZGlhLXBvc3QgLmF1dGhvcntcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gICAgfVxuICAgIC5tZWRpYS1wb3N0IC5tZWRpYS1ib2R5e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLm1vZGFsLWZvb3RlciAuYnRuLXNpbXBsZSB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIH1cbiAgICAudHlwb2dyYXBoeS1saW5le1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnByb2plY3RzLTF7XG4gICAgICAgICYgLnByb2plY3QtcGlsbHN7XG4gICAgICAgICAgICAmIC5uYXYubmF2LXBpbGxze1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLm5hdi1pdGVte1xuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIC5uYXYtbGlua3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZlOmZpcnN0LWNoaWxkIC5uYXYtbGlua3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIC5uYXYtbGlua3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC50ZXN0aW1vbmlhbHMtMixcbiAgICAuc2VjdGlvbi10ZXN0aW1vbmlhbHN7XG4gICAgICAgIC50ZXN0aW1vbmlhbHMtcGVvcGxle1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJlc2VudGF0aW9uLXBhZ2V7XG4gICAgICAgIC5zZWN0aW9uLWNhcmRzLFxuICAgICAgICAuc2VjdGlvbi1jb21wb25lbnRze1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIC5maXJzdC1jYXJke1xuICAgICAgICAgICAgICAgIHRvcDogNzUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAuZ3JpZF9fbGlua3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvdXJ0aC1jYXJke1xuICAgICAgICAgICAgICAgIHRvcDogOTQwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAuZ3JpZF9fbGlua3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpZnRoLWNhcmR7XG4gICAgICAgICAgICAgICAgdG9wOiA5NTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDIyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLmdyaWRfX2xpbmt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaXh0aC1jYXJke1xuICAgICAgICAgICAgICAgIHRvcDogMTMzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbGVmdDogMjIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAuZ3JpZF9fbGlua3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNldmVudGgtY2FyZCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMTU1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAuZ3JpZF9fbGlua3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zZWN0aW9uLWNvbnRlbnR7XG4gICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVye1xuICAgICAgICAgICAgICAgIC5hZGQtYW5pbWF0aW9ue1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uLWNvbXBvbmVudHN7XG4gICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVye1xuICAgICAgICAgICAgICAgIC5jb21wb25lbnRzLW1hY2Jvb2t7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1ODBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zb2NpYWwtaW1nLFxuICAgICAgICAgICAgICAgIC5zaGFyZS1idG4taW1ne1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uLWV4YW1wbGVze1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uLWljb25ze1xuICAgICAgICAgICAgLmljb25zLW51Y2xlb3tcbiAgICAgICAgICAgICAgICAubmMtaWNvbjpub3QoLm5pbnRoLWxlZnQtaWNvbik6bm90KC5zZXZlbnRoLWxlZnQtaWNvbik6bm90KC50aGlyZC1sZWZ0LWljb24pe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICN0eXBvZ3JhcGh5e1xuICAgICAgICAudHlwb2dyYXBoeS1saW5le1xuICAgICAgICAgICAgLm5vdGV7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5zZWN0aW9uLW51Y2xlby1pY29uc3tcbiAgICAgICAgW2NsYXNzKj0nY29sLWxnJ117XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpe1xuICAgIC5uYXZiYXItY29sbGFwc2Uge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogMTAzMjtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICAgICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQ0NDNUI5O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtLXRyYW5zbGF0ZS14KDIzMHB4KTtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiAoMC4zM3MsIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSkpO1xuICAgICAgICB1bCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgICAgLy8gb3ZlcmZsb3cteTpzY3JvbGw7XG4gICAgICAgICAgICBoZWlnaHQ6IDk1JTtcbiAgICAgICAgfVxuICAgICAgICAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbXtcbiAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJiA+IC5uYXYtbGlua3tcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrLWdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtZ2VuZXJhbDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgICAgICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRkZWZhdWx0LXN0YXRlcy1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOjphZnRlcntcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1udWRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgxMTIsIDExMiwgMTEyLCAwKSA2MCUsIHJnYmEoMTg2LCAxODYsIDE4NiwgMC4xNSkgMTAwJSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgICYuaGFzLWltYWdlOjphZnRlcntcbiAgICAgICAgICAgIEBpbmNsdWRlIGJsYWNrLWZpbHRlciguOCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm5hdi1vcGVue1xuICAgICAgICAmIC5uYXZiYXItY29sbGFwc2V7XG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0tdHJhbnNsYXRlLXgoMHB4KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgICYgLndyYXBwZXJ7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtLXRyYW5zbGF0ZS14KC0yMzBweCk7XG4gICAgICAgIH1cbiAgICAgICAgJiAubmF2YmFyLXRyYW5zbGF0ZXtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybS10cmFuc2xhdGUteCgtMjMwcHgpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgLndyYXBwZXIgLm5hdmJhci1jb2xsYXBzZXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuZml4ZWQtdG9wIC5uYXZiYXItY29sbGFwc2V7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjhGNUU7XG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG5cbiAgICAuZHJvcGRvd24uc2hvdyAuZHJvcGRvd24tbWVudSxcbiAgICAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cblxuICAgICAgICAuZHJvcGRvd24taXRlbTpob3ZlcixcbiAgICAgICAgLmRyb3Bkb3duLWl0ZW06Zm9jdXN7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kcm9wZG93bi1pdGVtIGF7XG5cbiAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICAmOmZvY3Vze1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkZGVmYXVsdC1zdGF0ZXMtY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmJlZm9yZSxcbiAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcGRvd257XG4gICAgICAgIC5kcm9wZG93bi1tZW51e1xuICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgIH1cblxuICAgICAgICYuc2hvdyAuZHJvcGRvd24tbWVudXtcbiAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZiYXItdHJhbnNsYXRle1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybS10cmFuc2xhdGUteCgwKTtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiAoMC4zM3MsIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSkpO1xuICAgIH1cbiAgICAud3JhcHBlcntcbiAgICAvLyAgICBAaW5jbHVkZSB0cmFuc2Zvcm0tdHJhbnNsYXRlLXgoMHB4KTtcbiAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uICgwLjMzcywgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKSk7XG4gICAgICAgbGVmdDogMDtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY3cHgpe1xuICAgIC5zZWN0aW9uLXNlY3Rpb25ze1xuICAgICAgICAuc2VjdGlvbi1jb2xze1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIC5yb3d7XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBle1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0tdHJhbnNsYXRlLXgoLTgwcHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDIpe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMyl7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTEyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyMHB4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSg0KXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweCl7XG4gICAgLmJ1cmdlci1tZW51e1xuICAgICAgICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMzI7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0NDQzVCOTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtLXRyYW5zbGF0ZS14KDIzMHB4KTtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24gKDAuMzNzLCBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpKTtcblxuICAgICAgICAgICAgLm5hdmJhci1uYXYgLm5hdi1pdGVte1xuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdmJhci1uYXZ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6OmFmdGVye1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLW51ZGU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgxMTIsIDExMiwgMTEyLCAwKSA2MCUsIHJnYmEoMTg2LCAxODYsIDE4NiwgMC4xNSkgMTAwJSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5oYXMtaW1hZ2U6OmFmdGVye1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJsYWNrLWZpbHRlciguOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmJhcntcbiAgICAgICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgLm5hdmJhci10b2dnbGVye1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubmF2YmFyLXRyYW5zbGF0ZXtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtLXRyYW5zbGF0ZS14KDApO1xuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiAoMC4zM3MsIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyYXBwZXJ7XG4gICAgICAgICAgICAvLyAgICBAaW5jbHVkZSB0cmFuc2Zvcm0tdHJhbnNsYXRlLXgoMHB4KTtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24gKDAuMzNzLCBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpKTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib2R5e1xuICAgICAgICAgICAgLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmJhci1jb2xsYXBzZSxcbiAgICAgICAgLm5hdmJhci1uYXZ7XG4gICAgICAgICAgICAmOmJlZm9yZSxcbiAgICAgICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubmF2LW9wZW4gJntcbiAgICAgICAgICAgIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2V7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtLXRyYW5zbGF0ZS14KDBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud3JhcHBlcntcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybS10cmFuc2xhdGUteCgtMjMwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdmJhci10cmFuc2xhdGV7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtLXRyYW5zbGF0ZS14KC0yMzBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZHJvcGRvd24uc2hvdyAuZHJvcGRvd24tbWVudSxcbiAgICAgICAgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51e1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcblxuXG4gICAgICAgICAgICAuZHJvcGRvd24taXRlbTpob3ZlcixcbiAgICAgICAgICAgIC5kcm9wZG93bi1pdGVtOmZvY3Vze1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW0gYXtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICAgICAgJjpmb2N1c3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRkZWZhdWx0LXN0YXRlcy1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6YmVmb3JlLFxuICAgICAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRyb3Bkb3due1xuICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnV7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICB9XG5cbiAgICAgICAgICAgJi5zaG93IC5kcm9wZG93bi1tZW51e1xuICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjVweCl7XG4gICAgLmlucHV0LWdyb3Vwe1xuICAgICAgICAuaW5wdXQtZ3JvdXAtYWRkb257XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVXNlciBzZWxlY3Rcbi8vIEZvciBzZWxlY3RpbmcgdGV4dCBvbiB0aGUgcGFnZVxuXG5AbWl4aW4gdXNlci1zZWxlY3QoJHNlbGVjdCkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiAkc2VsZWN0O1xuICAgICAtbW96LXVzZXItc2VsZWN0OiAkc2VsZWN0O1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiAkc2VsZWN0OyAvLyBJRTEwK1xuICAgICAgICAgIHVzZXItc2VsZWN0OiAkc2VsZWN0O1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdzsgLy8gaU9TIDw0LjMgJiBBbmRyb2lkIDw0LjFcbiAgICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG4vLyBCb3ggc2l6aW5nXG5AbWl4aW4gYm94LXNpemluZygkYm94bW9kZWwpIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkYm94bW9kZWw7XG4gICAgIC1tb3otYm94LXNpemluZzogJGJveG1vZGVsO1xuICAgICAgICAgIGJveC1zaXppbmc6ICRib3htb2RlbDtcbn1cblxuXG5AbWl4aW4gdHJhbnNpdGlvbigkdGltZSwgJHR5cGUpe1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsICR0aW1lICR0eXBlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsICR0aW1lICR0eXBlO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAkdGltZSAkdHlwZTtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsICR0aW1lICR0eXBlO1xuICAgIHRyYW5zaXRpb246IGFsbCAkdGltZSAkdHlwZTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24tb3BhY2l0eSgkdGltZSwgJHR5cGUpe1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAkdGltZSAkdHlwZTtcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgJHRpbWUgJHR5cGU7XG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAkdGltZSAkdHlwZTtcbiAgICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAkdGltZSAkdHlwZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR0aW1lICR0eXBlO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbi1ub25lKCl7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xuICAgIC1tb3otdHJhbnNpdGlvbjogbm9uZTtcbiAgICAtby10cmFuc2l0aW9uOiBub25lO1xuICAgIC1tcy10cmFuc2l0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0tc2NhbGUoJHZhbHVlKXtcbiAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCR2YWx1ZSk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkdmFsdWUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKCR2YWx1ZSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKCR2YWx1ZSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoJHZhbHVlKTtcbn1cblxuQG1peGluIHRyYW5zZm9ybS10cmFuc2xhdGUteCgkdmFsdWUpe1xuICAgICAtd2Via2l0LXRyYW5zZm9ybTogIHRyYW5zbGF0ZTNkKCR2YWx1ZSwgMCwgMCk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdmFsdWUsIDAsIDApO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR2YWx1ZSwgMCwgMCk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR2YWx1ZSwgMCwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHZhbHVlLCAwLCAwKTtcbn1cblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJGNvb3JkaW5hdGVzKXtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogJGNvb3JkaW5hdGVzO1xuICAgICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICRjb29yZGluYXRlcztcbiAgICAgICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJGNvb3JkaW5hdGVzO1xuICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogJGNvb3JkaW5hdGVzO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkY29vcmRpbmF0ZXM7XG59XG5cbkBtaXhpbiBpY29uLWdyYWRpZW50ICgkdG9wLWNvbG9yLCAkYm90dG9tLWNvbG9yKXtcbiAgICBiYWNrZ3JvdW5kOiAkdG9wLWNvbG9yO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICR0b3AtY29sb3IgMCUsICRib3R0b20tY29sb3IgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwkdG9wLWNvbG9yKSwgY29sb3Itc3RvcCgxMDAlLCRib3R0b20tY29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAkdG9wLWNvbG9yIDAlLCRib3R0b20tY29sb3IgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgICR0b3AtY29sb3IgMCUsJGJvdHRvbS1jb2xvciAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgICR0b3AtY29sb3IgMCUsJGJvdHRvbS1jb2xvciAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgJHRvcC1jb2xvciAwJSwkYm90dG9tLWNvbG9yIDEwMCUpO1xufVxuXG5AbWl4aW4gdmVydGljYWwtYWxpZ24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5AbWl4aW4gcm90YXRlLTE4MCgpe1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249Mik7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbkBtaXhpbiBiYXItYW5pbWF0aW9uKCR0eXBlKXtcbiAgICAgLXdlYmtpdC1hbmltYXRpb246ICR0eXBlIDUwMG1zIGxpbmVhciAwcztcbiAgICAgLW1vei1hbmltYXRpb246ICR0eXBlIDUwMG1zIGxpbmVhciAwcztcbiAgICAgYW5pbWF0aW9uOiAkdHlwZSA1MDBtcyAwcztcbiAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbkBtaXhpbiB0b3BiYXIteC1yb3RhdGlvbigpe1xuICAgIEBrZXlmcmFtZXMgdG9wYmFyLXgge1xuICAgICAgMCUge3RvcDogMHB4OyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgNDUlIHt0b3A6IDZweDsgdHJhbnNmb3JtOiByb3RhdGUoMTQ1ZGVnKTsgfVxuICAgICAgNzUlIHt0cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpOyB9XG4gICAgICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpOyB9XG4gICAgfVxuICAgIEAtd2Via2l0LWtleWZyYW1lcyB0b3BiYXIteCB7XG4gICAgICAwJSB7dG9wOiAwcHg7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgIDQ1JSB7dG9wOiA2cHg7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTQ1ZGVnKTsgfVxuICAgICAgNzUlIHstd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7IH1cbiAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7IH1cbiAgICB9XG4gICAgQC1tb3ota2V5ZnJhbWVzIHRvcGJhci14IHtcbiAgICAgIDAlIHt0b3A6IDBweDsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgNDUlIHt0b3A6IDZweDsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNDVkZWcpOyB9XG4gICAgICA3NSUgey1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTsgfVxuICAgICAgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTsgfVxuICAgIH1cbn1cblxuQG1peGluIHRvcGJhci1iYWNrLXJvdGF0aW9uKCl7XG4gICAgQGtleWZyYW1lcyB0b3BiYXItYmFjayB7XG4gICAgICAwJSB7IHRvcDogNnB4OyB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpOyB9XG4gICAgICA0NSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpOyB9XG4gICAgICA3NSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTsgfVxuICAgICAgMTAwJSB7IHRvcDogMHB4OyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICAgIH1cblxuICAgIEAtd2Via2l0LWtleWZyYW1lcyB0b3BiYXItYmFjayB7XG4gICAgICAwJSB7IHRvcDogNnB4OyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7IH1cbiAgICAgIDQ1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTsgfVxuICAgICAgNzUlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTsgfVxuICAgICAgMTAwJSB7IHRvcDogMHB4OyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApOyB9XG4gICAgfVxuXG4gICAgQC1tb3ota2V5ZnJhbWVzIHRvcGJhci1iYWNrIHtcbiAgICAgIDAlIHsgdG9wOiA2cHg7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTsgfVxuICAgICAgNDUlIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpOyB9XG4gICAgICA3NSUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpOyB9XG4gICAgICAxMDAlIHsgdG9wOiAwcHg7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cbiAgICB9XG59XG5cbkBtaXhpbiBib3R0b21iYXIteC1yb3RhdGlvbigpe1xuICAgIEBrZXlmcmFtZXMgYm90dG9tYmFyLXgge1xuICAgICAgMCUge2JvdHRvbTogMHB4OyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG4gICAgICA0NSUge2JvdHRvbTogNnB4OyB0cmFuc2Zvcm06IHJvdGF0ZSgtMTQ1ZGVnKTt9XG4gICAgICA3NSUge3RyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO31cbiAgICAgIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO31cbiAgICB9XG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGJvdHRvbWJhci14IHtcbiAgICAgIDAlIHtib3R0b206IDBweDsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG4gICAgICA0NSUge2JvdHRvbTogNnB4OyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xNDVkZWcpO31cbiAgICAgIDc1JSB7LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKTt9XG4gICAgICAxMDAlIHstd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO31cbiAgICB9XG4gICAgQC1tb3ota2V5ZnJhbWVzIGJvdHRvbWJhci14IHtcbiAgICAgIDAlIHtib3R0b206IDBweDsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG4gICAgICA0NSUge2JvdHRvbTogNnB4OyAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xNDVkZWcpO31cbiAgICAgIDc1JSB7LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKTt9XG4gICAgICAxMDAlIHstbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO31cbiAgICB9XG59XG5cbkBtaXhpbiBib3R0b21iYXItYmFjay1yb3RhdGlvbntcbiAgICBAa2V5ZnJhbWVzIGJvdHRvbWJhci1iYWNrIHtcbiAgICAgIDAlIHsgYm90dG9tOiA2cHg7dHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7fVxuICAgICAgNDUlIHsgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO31cbiAgICAgIDc1JSB7IHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTt9XG4gICAgICAxMDAlIHsgYm90dG9tOiAwcHg7dHJhbnNmb3JtOiByb3RhdGUoMCk7fVxuICAgIH1cbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgYm90dG9tYmFyLWJhY2sge1xuICAgICAgMCUge2JvdHRvbTogNnB4Oy13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7fVxuICAgICAgNDUlIHstd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTt9XG4gICAgICA3NSUgey13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO31cbiAgICAgIDEwMCUge2JvdHRvbTogMHB4Oy13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7fVxuICAgIH1cbiAgICBALW1vei1rZXlmcmFtZXMgYm90dG9tYmFyLWJhY2sge1xuICAgICAgMCUge2JvdHRvbTogNnB4Oy1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7fVxuICAgICAgNDUlIHstbW96LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTt9XG4gICAgICA3NSUgey1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO31cbiAgICAgIDEwMCUge2JvdHRvbTogMHB4Oy1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7fVxuICAgIH1cblxufVxuIiwiLy8gT3BhY2l0eVxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eSkge1xuICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgLy8gSUU4IGZpbHRlclxuICAkb3BhY2l0eS1pZTogKCRvcGFjaXR5ICogMTAwKTtcbiAgZmlsdGVyOiAje2FscGhhKG9wYWNpdHk9JG9wYWNpdHktaWUpfTtcbn1cblxuQG1peGluIGJsYWNrLWZpbHRlcigkb3BhY2l0eSl7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LDE3LDE3LCRvcGFjaXR5KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHotaW5kZXg6IDE7IFxufSJdfQ== */";
      /***/
    },

    /***/
    "jGP6": function jGP6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=\"http://coinbank.ddns.net\">\n                        coinbank.ddns.net\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://coinbank.ddns.net\">\n                       Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://coinbank.ddns.net\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, By <a href=\"http://coinbank.ddns.net\">StarkEnergys</a>\n        </div>\n    </div>\n</footer>\n";
      /***/
    },

    /***/
    "jQpT": function jQpT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "jGP6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.test = new Date();
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'footer-cmp',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterComponent);
      /***/
    },

    /***/
    "pG9d": function pG9d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".body{\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 100%;\r\n    align-items: center;\r\n    background-color:#f5f5f5;\r\n}\r\n\r\n.login{\r\n    align-items: center;\r\n    width: 100%;\r\n    max-width: 330px;\r\n    text-align: center;\r\n}\r\n\r\n.ancho{\r\n    \r\n    width: 100%;\r\n    color: #f5f5f5;\r\n    margin: 10px 1px;\r\n    border-radius: 12px;\r\n    height: 47px;\r\n\r\n    \r\n}\r\n\r\n.spinner{\r\n    width: 3rem; \r\n    height: 3rem;\r\n    margin: 0 auto;\r\n}\r\n\r\n.entrada{\r\n    border-radius: 12px;\r\n    \r\n\r\n}\r\n\r\n.line{\r\n    caret-color: red;\r\n    margin-left: 116px;\r\n    margin-right: 100px;\r\n}\r\n\r\n.color7{\r\n    color:black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7OztBQUdoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjs7O0FBR3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O1xyXG59XHJcblxyXG4ubG9naW57XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYW5jaG97XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBtYXJnaW46IDEwcHggMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGhlaWdodDogNDdweDtcclxuXHJcbiAgICBcclxufVxyXG5cclxuLnNwaW5uZXJ7XHJcbiAgICB3aWR0aDogM3JlbTsgXHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmVudHJhZGF7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4ubGluZXtcclxuICAgIGNhcmV0LWNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uY29sb3I3e1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "vtrx": function vtrx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "wCP4": function wCP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
        return SidebarModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sidebar.component */
      "47Jg");

      var SidebarModule = function SidebarModule() {
        _classCallCheck(this, SidebarModule);
      };

      SidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
      })], SidebarModule);
      /***/
    },

    /***/
    "ywSW": function ywSW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<div class=\"body\">\n   \n    \n      \n      <div class=\"login\">\n      \n        \n\n        <div class=\"spinner-border spinner\" *ngIf=\"cargando\" >\n\n        <span class=\"sr-only\">Loading...</span>\n\n        </div>\n\n        <form *ngIf=\"!cargando\" [formGroup]=\"Torm\" (ngSubmit)=\"ingresar()\">\n\n        <div class=\"line\">\n        <img src =\"../../../assets/img/CoinBank.ico\" width = \"70\"  >\n        </div>\n            <p>login</p>\n      \n           \n            <div class=\"form-group\" appearance=\"fill\">\n                <input type=\"text\" class=\"form-control entrada\" autocomplete=\"off\"  formControlName=\"username\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control entrada\" autocomplete=\"off\"  formControlName=\"password\" >\n            </div>\n\n         \n           \n            \n           \n           <button type=\"submit\" class=\"btn ancho btn-primary\"  [disabled] = \"Torm.invalid\"> Login</button>\n         \n        </form>\n      </div>\n\n  \n\n   </div>   ";
      /***/
    },

    /***/
    "zRkE": function zRkE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\">\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n    </div>\n   Salir\n  </div>\n</nav>\n";
      /***/
    },

    /***/
    "zUnb": function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /*!
      
      =========================================================
      * Paper Dashboard Angular - v2.1.0
      =========================================================
      
      * Product Page: https://www.creative-tim.com/product/paper-dashboard-angular
      * Copyright 2019 Creative Tim (https://www.creative-tim.com)
      * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)
      
      * Coded by Creative Tim
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      */


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/
    },

    /***/
    "zvoc": function zvoc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a href=\"dashboard\" class=\"simple-text logo-mini\">\n      <div class=\"logo-image-small\">\n        <img src=\"assets/img/CoinBank.ico\">\n      </div>\n    </a>\n    <a href=\"dashboard\" class=\"simple-text logo-normal\">\n      CoinBank\n    </a>\n  </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"mat-icon {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map