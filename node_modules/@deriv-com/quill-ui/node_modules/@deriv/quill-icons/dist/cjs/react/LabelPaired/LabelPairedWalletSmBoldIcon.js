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
const LabelPairedWalletSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.406 4.625H12.47c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H2.406A1.08 1.08 0 0 0 1.312 7.03v7.438c0 .629.465 1.094 1.094 1.094h9.188a1.08 1.08 0 0 0 1.094-1.094V9.656c0-.601-.493-1.094-1.094-1.094H3.28a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656h8.313A2.43 2.43 0 0 1 14 9.656v4.813a2.41 2.41 0 0 1-2.406 2.406H2.406A2.39 2.39 0 0 1 0 14.469V7.03a2.41 2.41 0 0 1 2.406-2.406m8.094 8.313a.864.864 0 0 1-.875-.876c0-.464.383-.874.875-.874a.9.9 0 0 1 .875.874c0 .493-.41.876-.875.876' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '42901ad89dac2d6a9b0096f4c2763a3b__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedWalletSmBoldIcon);
exports.default = ForwardRef;
