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
const LabelPairedChartLineUpDownLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.5 8v13.125c0 .352.273.625.625.625H18.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H3.125C1.367 24.25 0 22.883 0 21.125V8c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m12.227 2.266-.743-.743a.89.89 0 0 1-.234-.625c0-.468.39-.898.86-.898h3.515c.313 0 .625.313.625.625v3.515c0 .47-.43.86-.898.86a.89.89 0 0 1-.625-.234l-.743-.743-4.375 4.375a1.205 1.205 0 0 1-1.757 0l-2.227-2.226-2.266 2.226a1.205 1.205 0 0 1-1.757 0 1.205 1.205 0 0 1 0-1.757l3.125-3.125a1.205 1.205 0 0 1 1.757 0l2.266 2.226zm2.5 5.507a.92.92 0 0 1 .625-.273c.507 0 .898.43.898.898v3.477a.64.64 0 0 1-.625.625h-3.516a.867.867 0 0 1-.859-.86c0-.234.078-.468.234-.624l.743-.743-1.368-1.367 1.797-1.758 1.328 1.368z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '976467e09ce31c7275b6b6200eb5a897__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartLineUpDownLgFillIcon);
exports.default = ForwardRef;
