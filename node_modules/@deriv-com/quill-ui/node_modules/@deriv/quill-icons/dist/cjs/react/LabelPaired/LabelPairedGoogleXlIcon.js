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
const LabelPairedGoogleXlIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 23, height: 36, viewBox: '0 0 23 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M22.938 18.281c0 6.657-4.547 11.344-11.25 11.344A11.564 11.564 0 0 1 .063 18 11.593 11.593 0 0 1 11.688 6.375c3.093 0 5.765 1.172 7.78 3.047l-3.187 3.047C12.156 8.484 4.47 11.484 4.47 18c0 4.078 3.234 7.36 7.219 7.36 4.593 0 6.328-3.282 6.562-5.016h-6.562v-3.985H22.75c.094.61.188 1.172.188 1.922' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f343ff1c568014e1c925e7bd3aef86ad__a' },
            React.createElement("path", { d: 'M0 0h23v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGoogleXlIcon);
exports.default = ForwardRef;
