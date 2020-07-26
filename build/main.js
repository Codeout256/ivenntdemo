webpackJsonp([0],{

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_picker__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_base64__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, base64, camera, fileChooser, plt, filePicker, actionSheetCtrl, filePath, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.base64 = base64;
        this.camera = camera;
        this.fileChooser = fileChooser;
        this.plt = plt;
        this.filePicker = filePicker;
        this.actionSheetCtrl = actionSheetCtrl;
        this.filePath = filePath;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.fileArray = [];
        this.imageArr = [];
    }
    HomePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: "Scan the sketch",
            buttons: [
                {
                    text: "From Gallery",
                    handler: function () {
                        _this.openGallery();
                    }
                },
                {
                    text: "From Camera",
                    handler: function () {
                        _this.openCamera();
                    }
                },
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            correctOrientation: true,
            cameraDirection: 1
        };
        this.camera
            .getPicture(options)
            .then(function (imageData) {
            console.log("IMAGE DATA IS", imageData);
            _this.presentToast("Image chosen successfully");
            _this.convertToBase64(imageData, true);
        })
            .catch(function (e) {
            console.log("Error while picking from camera", e);
        });
    };
    HomePage.prototype.openGallery = function () {
        var _this = this;
        var options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI
        };
        this.camera
            .getPicture(options)
            .then(function (imageData) {
            console.log("IMAGE DATA IS", imageData);
            _this.presentToast("Image chosen successfully");
            _this.convertToBase64(imageData, true);
        })
            .catch(function (e) {
            console.log("Error while picking from gallery", e);
        });
    };
    HomePage.prototype.chooseFile = function () {
        if (this.plt.is("ios")) {
            this.chooseFileForIos();
        }
        else {
            this.chooseFileForAndroid();
        }
    };
    HomePage.prototype.chooseFileForIos = function () {
        var _this = this;
        this.filePicker
            .pickFile()
            .then(function (uri) {
            console.log(uri);
            _this.presentToast("File chosen successfully");
            _this.convertToBase64(uri, false);
        })
            .catch(function (err) { return console.log("Error", err); });
    };
    HomePage.prototype.chooseFileForAndroid = function () {
        var _this = this;
        this.fileChooser
            .open()
            .then(function (uri) {
            console.log(uri);
            _this.presentToast("File chosen successfully");
            _this.convertToBase64(uri, false);
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    HomePage.prototype.convertToBase64 = function (imageUrl, isImage) {
        var _this = this;
        this.filePath
            .resolveNativePath(imageUrl)
            .then(function (filePath) {
            console.log(filePath);
            _this.base64.encodeFile(filePath).then(function (base64File) {
                console.log("BASE 64 IS", filePath.split(".").pop());
                if (isImage == false) {
                    _this.fileArray.push({
                        displayFile: filePath.split("/").pop(),
                        base64File: base64File.split(",").pop() //split(",").pop() depends on the requirement, if back end API is able to extract
                        //the file mime type then you can do this, if back end expects  UI update the Mime type
                        //  then don't use split(",").pop()
                    });
                }
                else {
                    _this.imageArr.push({
                        displayImg: filePath,
                        base64Img: base64File.split(",").pop() //same comment for image follows here.
                    });
                }
                console.log("LENGTH OF BASE64ARR", _this.fileArray.length);
            }, function (err) {
                console.log(err);
            });
        })
            .catch(function (err) { return console.log(err); });
    };
    HomePage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomePage.prototype.uploadImageAndFile = function () {
        // some back-end, base 64 to file conversation libraries expect comma
        // separated string instead of an array, that time you can use the below code 
        var fileArrayBase64 = "";
        var imageArrayBase64 = "";
        for (var i = 0; i < this.fileArray.length; i++) {
            if (fileArrayBase64 == "") {
                fileArrayBase64 = this.fileArray[i].base64File;
            }
            else {
                fileArrayBase64 = fileArrayBase64 + "," + this.fileArray[i].base64File;
            }
        }
        for (var j = 0; j < this.imageArr.length; j++) {
            if (imageArrayBase64 == "") {
                imageArrayBase64 = this.imageArr[j].base64Img;
            }
            else {
                imageArrayBase64 = imageArrayBase64 + "," + this.imageArr[j].base64Img;
            }
        }
        debugger;
        var fd = new FormData();
        // you can also keep a length check for file and image array, if only 
        // one of it is chosen,  I assume both are chosen and below is code for same.
        fd.append("fileArray", fileArrayBase64);
        fd.append("fileArray", imageArrayBase64);
        // you can append as many as other custom key value pairs
        // along with above two
        //you can use below 2 lines if your API handles the array instead of comma separated
        // base 64 string, un comment below 2 lines in such case
        // fd.append("fileArray", fileArrayBase64);
        // fd.append("fileArray", imageArrayBase64);
        // you can also use native http or angular http instead of XMLHttpRequest
        var xhr = new XMLHttpRequest();
        var self = this; // directly you cannot use this inside  the xhr.onload = function() {
        // so this variable is created
        var url = "YOUR URL GOES HERE, WHICH CAN TAKE BASE 64 ARRAY OR STRING";
        xhr.open("POST", url, true);
        xhr.onload = function () {
            // below is the success code check
            if (xhr.status == 202) {
                // if data added successfully then, you can perform the required tasks
            }
            else {
                //handle the error here
            }
        };
        xhr.send(fd);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\I520465\Downloads\upload-multiple-image-files-in-Ionic-3-4-master\upload-multiple-image-files-in-Ionic-3-4-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      SNAPP\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button color="secondary" ion-button (tap)="presentActionSheet()" block> Choose Image  </button>\n  <button color="secondary" ion-button (tap)="chooseFile()" block> Choose File  </button>\n  <button color="secondary" [disabled]="fileArray.length == 0  && imageArr.length == 0" ion-button (tap)="uploadImageAndFile()" block> Upload Image/File  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\I520465\Downloads\upload-multiple-image-files-in-Ionic-3-4-master\upload-multiple-image-files-in-Ionic-3-4-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_picker__["a" /* IOSFilePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_picker__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_chooser__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_base64__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_picker__["a" /* IOSFilePicker */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__["a" /* FilePath */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\I520465\Downloads\upload-multiple-image-files-in-Ionic-3-4-master\upload-multiple-image-files-in-Ionic-3-4-master\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\I520465\Downloads\upload-multiple-image-files-in-Ionic-3-4-master\upload-multiple-image-files-in-Ionic-3-4-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map