"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const DerivLightIcCashierLockedIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 128 128', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#24cd38b691a28a6c87d989a8c0286132__a)' },
        React.createElement("path", { fill: '#C7E5E5', d: 'M109.93 54.93H19v-.09A8.87 8.87 0 0 1 27.89 46h73.17a8.873 8.873 0 0 1 8.87 8.86zM19 114h90.91v.09a8.86 8.86 0 0 1-2.598 6.272 8.87 8.87 0 0 1-6.272 2.598H27.89a8.87 8.87 0 0 1-8.89-8.83z' }),
        React.createElement("path", { fill: '#C7E5E5', d: 'M19.02 54.93h90.91v59.11H19.02z' }),
        React.createElement("path", { fill: '#85ACB0', d: 'm72.35 99.56-4.44-17.64a8.36 8.36 0 1 0-6.87 0L56.6 99.56a2.762 2.762 0 0 0 2.68 3.44h10.39a2.76 2.76 0 0 0 2.707-2.194 2.76 2.76 0 0 0-.027-1.246' }),
        React.createElement("path", { fill: '#BCCDCE', d: 'M100.55 46H89.39v-5.87c0-11.13-8.55-24-24-24h-.64c-15.42 0-24 12.83-24 24V46h-11.1v-5.87C29.672 20.737 45.387 5.022 64.78 5h.64c19.393.022 35.108 15.737 35.13 35.13z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '24cd38b691a28a6c87d989a8c0286132__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h128v128H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(DerivLightIcCashierLockedIcon);
exports.default = ForwardRef;
