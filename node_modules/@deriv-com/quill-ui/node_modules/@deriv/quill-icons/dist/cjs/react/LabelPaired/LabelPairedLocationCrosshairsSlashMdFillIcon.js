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
const LabelPairedLocationCrosshairsSlashMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.188 4.188 5.75 7.75c.875-.844 2-1.437 3.25-1.656V5c0-.531.438-1 1-1 .531 0 1 .469 1 1v1.094A6.05 6.05 0 0 1 15.906 11H17c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-1.094a6 6 0 0 1-.781 2.094l4.563 3.594c.343.25.406.718.125 1.03-.25.345-.72.407-1.032.126l-18.5-14.5c-.343-.25-.406-.719-.125-1.032.25-.343.719-.406 1.032-.125M7.344 9l1.218.938C8.97 9.688 9.47 9.5 10 9.5c1.375 0 2.5 1.125 2.5 2.5 0 .313-.062.625-.187.906l1.218.938A3.9 3.9 0 0 0 14 12c0-2.187-1.812-4-4-4a4 4 0 0 0-2.656 1m3.843 6.844 1.75 1.375a6 6 0 0 1-1.937.718V19c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-1.062a6.05 6.05 0 0 1-4.937-4.907H3c-.562 0-1-.469-1-1 0-.562.438-1 1-1h1.063c.03-.25.093-.469.156-.687L6 11.75V12c0 2.219 1.781 4 4 4 .406 0 .813-.062 1.188-.156' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '611e2099672f6a8d893442e1a0557645__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLocationCrosshairsSlashMdFillIcon);
exports.default = ForwardRef;
