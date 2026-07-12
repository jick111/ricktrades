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
const LabelPairedCashRegisterLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.5 5.5h8.75c.664 0 1.25.586 1.25 1.25v2.5c0 .703-.586 1.25-1.25 1.25H8.125v1.25h8.477c1.21 0 2.265.938 2.46 2.148l.86 5.82c.039.196.078.391.078.587V23c0 1.406-1.133 2.5-2.5 2.5h-15A2.47 2.47 0 0 1 0 23v-2.695c0-.196 0-.39.04-.547l.858-5.86c.196-1.21 1.25-2.148 2.5-2.148h2.227V10.5H2.5c-.703 0-1.25-.547-1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25m1.25 1.875A.64.64 0 0 0 3.125 8c0 .352.273.625.625.625H10A.64.64 0 0 0 10.625 8c0-.312-.312-.625-.625-.625zm-1.25 15c0 .352.273.625.625.625h13.75a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625H3.125a.64.64 0 0 0-.625.625m1.875-6.562c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937c0 .547.39.938.937.938m4.688-.938a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937c0 .547.39.938.937.938.508 0 .938-.391.938-.938M6.25 18.938c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937c0 .547.39.938.937.938m6.563-4.063a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937c0 .547.39.938.937.938.508 0 .938-.391.938-.938M10 18.938c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937c0 .547.39.938.937.938m6.563-4.063a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937c0 .547.39.938.937.938.508 0 .938-.391.938-.938m-2.813 4.063c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937c0 .547.39.938.937.938' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '096b2d3d27d8d53b4648bb7216f6797f__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCashRegisterLgFillIcon);
exports.default = ForwardRef;
