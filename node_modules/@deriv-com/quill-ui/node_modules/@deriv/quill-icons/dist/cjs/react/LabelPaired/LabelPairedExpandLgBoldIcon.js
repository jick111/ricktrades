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
const LabelPairedExpandLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.563 6.75a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H2.125v3.438c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V7.687c0-.507.39-.937.938-.937zM.25 18.938c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v3.437h3.438a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H1.188c-.547 0-.938-.39-.938-.937zM16.813 6.75a.95.95 0 0 1 .937.938v4.375c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V8.625h-3.437c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938zm-.938 12.188c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v4.375c0 .546-.43.937-.937.937h-4.375c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.437z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ae94d0be4913a12ec38dba9a4f388792__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExpandLgBoldIcon);
exports.default = ForwardRef;
