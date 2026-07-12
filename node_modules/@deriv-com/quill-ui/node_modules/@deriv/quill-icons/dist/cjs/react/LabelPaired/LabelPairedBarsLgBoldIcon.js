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
const LabelPairedBarsLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 8.938C.25 8.43.64 8 1.188 8h15.625a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H1.188c-.547 0-.938-.39-.938-.937m0 6.25c0-.508.39-.938.938-.938h15.625a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H1.188c-.547 0-.938-.39-.938-.937m17.5 6.25c0 .546-.43.937-.937.937H1.188c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h15.625a.95.95 0 0 1 .937.938' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '77cb2eefd0657a7213f5e77d13da8508__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBarsLgBoldIcon);
exports.default = ForwardRef;
