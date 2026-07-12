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
const LabelPairedAtMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8 5c-3.875 0-7 3.156-7 7 0 3.875 3.125 7 7 7 .25 0 .5.25.5.5 0 .281-.25.5-.5.5-4.437 0-8-3.562-8-8 0-4.406 3.563-8 8-8 4.406 0 8 3.594 8 8v.75c0 1.531-1.25 2.75-2.75 2.75-1.062 0-1.969-.562-2.437-1.437A3.45 3.45 0 0 1 8 15.5 3.494 3.494 0 0 1 4.5 12c0-1.906 1.563-3.5 3.5-3.5.969 0 1.844.406 2.5 1.063V9.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v3.25c0 .969.781 1.75 1.75 1.75.938 0 1.75-.781 1.75-1.75V12c0-3.844-3.156-7-7-7m2.5 7c0-.875-.5-1.687-1.25-2.156-.781-.438-1.75-.438-2.5 0-.781.469-1.25 1.281-1.25 2.156 0 .906.469 1.719 1.25 2.188.75.437 1.719.437 2.5 0 .75-.47 1.25-1.282 1.25-2.188' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fdc60ae841eb846b91bed4b5bd33045d__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedAtMdRegularIcon);
exports.default = ForwardRef;
