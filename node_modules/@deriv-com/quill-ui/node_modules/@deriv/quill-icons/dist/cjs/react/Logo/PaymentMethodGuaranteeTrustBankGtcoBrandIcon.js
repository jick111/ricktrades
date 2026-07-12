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
const PaymentMethodGuaranteeTrustBankGtcoBrandIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 128 80', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#E04403', d: 'M95.998 8H32.002v64h63.996z' }),
    React.createElement("path", { fill: '#fff', d: 'M84.637 17.097h-16v16.001h16zM48.569 59.809c-2.607 0-5.385-.727-5.385-7.057s3.352-7.447 6.17-7.447a7.3 7.3 0 0 1 3.31.744v2.257a11.6 11.6 0 0 0-3.31-.704c-1.43 0-3.35.767-3.35 4.979 0 4.468 1.489 5.005 2.52 5.005a12 12 0 0 0 1.918-.205v-4.286h-1.918l-.201-2.16h4.941v8.147c-1.53.431-3.106.675-4.695.727M64.239 47.911h-3.106v11.697h-2.826V47.91H54.88v-2.42h9.682zM70.27 59.809c-2.36 0-5-.745-5-7.262s3.325-7.257 5.262-7.257a6.3 6.3 0 0 1 2.606.502v2.28a9 9 0 0 0-2.461-.485c-1.37 0-2.58.827-2.58 4.96 0 3.694.867 4.942 2.379 4.942a9 9 0 0 0 2.662-.503v2.279a6.8 6.8 0 0 1-2.867.544M79.685 59.809c-2.179 0-5.043-.444-5.043-7.262s3.047-7.257 5.043-7.257 5.041.484 5.041 7.257c0 6.878-2.912 7.262-5.041 7.262m0-12.505c-1.412 0-2.235.927-2.235 5.243 0 4.38 1.028 5.247 2.234 5.247 1.207 0 2.216-.808 2.216-5.247 0-4.234-.83-5.243-2.216-5.243' })));
const ForwardRef = (0, react_1.forwardRef)(PaymentMethodGuaranteeTrustBankGtcoBrandIcon);
exports.default = ForwardRef;
