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
const LabelPairedSortDownSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.336 15.945c.027.055.082.055.164.055.055 0 .11 0 .137-.055l3.281-3.09c.055-.054.082-.082.082-.136 0-.11-.11-.219-.219-.219h-6.59c-.109 0-.191.11-.191.219 0 .054 0 .082.055.136zm-.602.657-3.28-3.118a1.03 1.03 0 0 1-.329-.765c0-.602.465-1.094 1.066-1.094h6.59c.602 0 1.094.492 1.094 1.094 0 .273-.137.574-.355.765l-3.282 3.118c-.191.191-.465.273-.738.273-.3 0-.574-.082-.766-.273' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '95809443cb0b830c6d8374d0db5557ae__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSortDownSmRegularIcon);
exports.default = ForwardRef;
