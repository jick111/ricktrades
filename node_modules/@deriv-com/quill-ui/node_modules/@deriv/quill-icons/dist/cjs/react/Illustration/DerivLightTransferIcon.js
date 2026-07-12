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
const DerivLightTransferIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#C6E4E5', d: 'm31.657 12.14-8.9-7.873A1.052 1.052 0 0 0 21 5.022v3.993h-7a1 1 0 0 0-1 1v4h6a3.01 3.01 0 0 1 3 3v3.97c.257.018.51-.061.712-.22l8.9-7.086a1 1 0 0 0 .045-1.54' }),
    React.createElement("path", { fill: '#85ABB0', d: 'M20 22.981V17.02a1 1 0 0 0-1-1h-8v-3.997A1.036 1.036 0 0 0 9.945 11a1.05 1.05 0 0 0-.7.267l-8.9 7.872a1 1 0 0 0 .042 1.544l8.9 7.085c.187.15.42.232.659.232A1.036 1.036 0 0 0 11 26.978v-2.993h8a1.007 1.007 0 0 0 1-1.004' })));
const ForwardRef = (0, react_1.forwardRef)(DerivLightTransferIcon);
exports.default = ForwardRef;
