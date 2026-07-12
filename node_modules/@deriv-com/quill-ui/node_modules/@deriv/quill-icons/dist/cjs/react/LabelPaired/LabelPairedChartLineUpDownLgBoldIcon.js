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
const LabelPairedChartLineUpDownLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.938 6.75a.95.95 0 0 1 .937.938v13.75c0 .546.39.937.938.937h16.25a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H2.813A2.8 2.8 0 0 1 0 21.438V7.688c0-.508.39-.938.938-.938m13.75 3.125c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.124c.235 0 .47.117.665.273.156.196.273.43.273.665v3.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937v-.86l-4.96 4.961c-.392.39-.977.39-1.33 0l-2.46-2.46-2.46 2.46c-.392.39-.977.39-1.33 0a.856.856 0 0 1 0-1.289l3.126-3.125c.351-.39.937-.39 1.328 0l2.461 2.46 4.297-4.335zm0 10.625c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h.859l-1.836-1.836 1.328-1.328 1.836 1.836v-.86c0-.507.39-.937.938-.937a.95.95 0 0 1 .937.938v3.125a.94.94 0 0 1-.273.664.92.92 0 0 1-.665.273z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '71b7e875692438ae65d41b99d20ba6d4__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartLineUpDownLgBoldIcon);
exports.default = ForwardRef;
