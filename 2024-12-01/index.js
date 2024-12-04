"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Base = (name) => {
    const fn = (target) => {
        target.prototype.xiaoman = name;
        target.prototype.fn = () => {
            console.log('我是天下第一帅');
        };
    };
    return fn;
};
const Base1 = (target) => {
    console.log(target);
    target.prototype.name = 'slr';
    target.prototype.fn = () => {
        console.log('憨憨');
    };
};
let Http = class Http {
};
Http = __decorate([
    Base('slr')
], Http);
const http = new Http();
