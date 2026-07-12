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
const LabelPairedGridSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.375 5.719a1.08 1.08 0 0 1 1.094-1.094H2.78c.602 0 1.094.492 1.094 1.094V7.03a1.08 1.08 0 0 1-1.094 1.094H1.47A1.063 1.063 0 0 1 .375 7.031zm0 4.375A1.08 1.08 0 0 1 1.469 9H2.78c.602 0 1.094.492 1.094 1.094v1.312A1.08 1.08 0 0 1 2.781 12.5H1.47a1.063 1.063 0 0 1-1.094-1.094zm3.5 4.375v1.312a1.08 1.08 0 0 1-1.094 1.094H1.47a1.063 1.063 0 0 1-1.094-1.094V14.47a1.08 1.08 0 0 1 1.094-1.094H2.78c.602 0 1.094.492 1.094 1.094m.875-8.75a1.08 1.08 0 0 1 1.094-1.094h1.312c.602 0 1.094.492 1.094 1.094V7.03a1.08 1.08 0 0 1-1.094 1.094H5.844A1.063 1.063 0 0 1 4.75 7.031zm3.5 4.375v1.312A1.08 1.08 0 0 1 7.156 12.5H5.844a1.063 1.063 0 0 1-1.094-1.094v-1.312A1.08 1.08 0 0 1 5.844 9h1.312c.602 0 1.094.492 1.094 1.094m-3.5 4.375a1.08 1.08 0 0 1 1.094-1.094h1.312c.602 0 1.094.492 1.094 1.094v1.312a1.08 1.08 0 0 1-1.094 1.094H5.844a1.063 1.063 0 0 1-1.094-1.094zm7.875-8.75V7.03a1.08 1.08 0 0 1-1.094 1.094H10.22a1.063 1.063 0 0 1-1.094-1.094V5.72a1.08 1.08 0 0 1 1.094-1.094h1.312c.602 0 1.094.492 1.094 1.094m-3.5 4.375A1.08 1.08 0 0 1 10.219 9h1.312c.602 0 1.094.492 1.094 1.094v1.312a1.08 1.08 0 0 1-1.094 1.094H10.22a1.063 1.063 0 0 1-1.094-1.094zm3.5 4.375v1.312a1.08 1.08 0 0 1-1.094 1.094H10.22a1.063 1.063 0 0 1-1.094-1.094V14.47a1.08 1.08 0 0 1 1.094-1.094h1.312c.602 0 1.094.492 1.094 1.094' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '14d2fb68a253a14126938a60e90cfe6e__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGridSmFillIcon);
exports.default = ForwardRef;
