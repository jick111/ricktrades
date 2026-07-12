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
const LabelPairedRectangleBarcodeSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 5.5A.88.88 0 0 0 1 6.375v8.75c0 .492.383.875.875.875h12.25a.88.88 0 0 0 .875-.875v-8.75a.9.9 0 0 0-.875-.875zm-1.75.875c0-.957.766-1.75 1.75-1.75h12.25c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75zM2.75 7.688a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v6.125a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437zm7.875 0a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v6.125a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437zm2.188-.438a.47.47 0 0 1 .437.438v6.125a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V7.687a.45.45 0 0 1 .438-.437M4.5 7.688a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v6.125a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437zm2.188-.438a.47.47 0 0 1 .437.438v6.125a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V7.687a.45.45 0 0 1 .438-.437m1.75.438a.45.45 0 0 1 .437-.438.47.47 0 0 1 .438.438v6.125a.45.45 0 0 1-.438.437.43.43 0 0 1-.437-.437z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '254b87ddde39a372df3f4da3a7036472__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedRectangleBarcodeSmRegularIcon);
exports.default = ForwardRef;
