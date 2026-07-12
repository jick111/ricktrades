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
const LabelPairedSixSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm6.469 6.074-1.75 2.078c2.297.11 4.156 2.024 4.156 4.348A4.37 4.37 0 0 1 4.5 16.875 4.353 4.353 0 0 1 .125 12.5v-.11a4.42 4.42 0 0 1 1.04-2.761l3.964-4.676c.3-.383.875-.41 1.23-.11.383.302.41.876.11 1.231m.656 6.426c0-.93-.52-1.777-1.312-2.27a2.65 2.65 0 0 0-2.625 0c-.82.493-1.313 1.34-1.313 2.27 0 .957.492 1.805 1.313 2.297a2.65 2.65 0 0 0 2.625 0c.792-.492 1.312-1.34 1.312-2.297' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a7b009b5b8497fec704bb528f8f96bbc__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSixSmFillIcon);
exports.default = ForwardRef;
