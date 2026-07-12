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
const LabelPairedWalletCircleMinusSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 6.813c0-1.204.957-2.188 2.188-2.188h10.5a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-10.5c-.739 0-1.313.602-1.313 1.313v7.875c0 .738.574 1.312 1.313 1.312H9.52c.164.328.355.629.574.875H2.438A2.16 2.16 0 0 1 .25 14.688zm2.625 0a.45.45 0 0 1 .438-.438h8.75c1.203 0 2.187.984 2.187 2.188v.464c-.164 0-.3-.027-.437-.027-.165 0-.301.027-.438.027v-.464a1.33 1.33 0 0 0-1.312-1.313h-8.75a.43.43 0 0 1-.438-.437m7 7c0-2.16 1.75-3.938 3.938-3.938 2.16 0 3.937 1.777 3.937 3.938a3.94 3.94 0 0 1-3.937 3.937 3.92 3.92 0 0 1-3.938-3.937m.875 0a3.057 3.057 0 0 0 3.063 3.062 3.075 3.075 0 0 0 3.062-3.062c0-1.668-1.395-3.063-3.062-3.063a3.075 3.075 0 0 0-3.063 3.063m.875 0a.45.45 0 0 1 .438-.438h3.5a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-3.5a.43.43 0 0 1-.438-.437' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6972f0c8fc15b4852a6b413c080c0c2e__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedWalletCircleMinusSmRegularIcon);
exports.default = ForwardRef;
