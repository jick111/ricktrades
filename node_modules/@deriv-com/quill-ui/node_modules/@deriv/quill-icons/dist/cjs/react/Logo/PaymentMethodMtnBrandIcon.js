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
const PaymentMethodMtnBrandIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 128 80', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#FFC403', d: 'M32 8h64v64H32z' }),
    React.createElement("path", { fill: '#000', d: 'M60.449 36.222v7.306H58.45V39.43l-1.335 1.975H56.07l-1.467-1.975v4.098h-1.826v-7.306h1.841l2.108 2.865 1.889-2.865zm.577 1.655v-1.655h6.822v1.655H65.46v5.65h-2.038v-5.65zm14.338-1.655v7.306h-1.678l-3.434-4.176v4.176h-1.827v-7.306h1.819l3.286 4.028v-4.028z' }),
    React.createElement("path", { fill: '#000', d: 'M64 51.161c-5.9 0-11.465-1.1-15.664-3.106-4.395-2.1-6.814-4.956-6.814-8.055s2.42-5.955 6.814-8.055C52.535 29.94 58.1 28.84 64 28.84s11.465 1.1 15.664 3.106c4.394 2.1 6.814 4.956 6.814 8.055s-2.42 5.955-6.814 8.055C75.465 50.06 69.9 51.16 64 51.16m0-20.675c-5.666 0-10.974 1.046-14.954 2.95-3.785 1.81-5.877 4.145-5.877 6.572s2.084 4.76 5.877 6.564c3.98 1.904 9.296 2.95 14.954 2.95s10.974-1.046 14.954-2.95c3.786-1.803 5.877-4.145 5.877-6.564s-2.084-4.761-5.877-6.564c-3.98-1.912-9.288-2.958-14.954-2.958' })));
const ForwardRef = (0, react_1.forwardRef)(PaymentMethodMtnBrandIcon);
exports.default = ForwardRef;
