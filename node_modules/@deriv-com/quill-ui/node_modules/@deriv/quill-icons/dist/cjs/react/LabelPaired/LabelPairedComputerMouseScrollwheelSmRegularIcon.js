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
const LabelPairedComputerMouseScrollwheelSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 22, viewBox: '0 0 11 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.875 13.375v-5.25c0-1.914-1.586-3.5-3.5-3.5h-1.75a3.507 3.507 0 0 0-3.5 3.5v5.25a3.49 3.49 0 0 0 3.5 3.5h1.75c1.914 0 3.5-1.559 3.5-3.5M.25 8.125A4.37 4.37 0 0 1 4.625 3.75h1.75a4.39 4.39 0 0 1 4.375 4.375v5.25a4.37 4.37 0 0 1-4.375 4.375h-1.75A4.353 4.353 0 0 1 .25 13.375zm5.688-1.312v1.75A.45.45 0 0 1 5.5 9a.43.43 0 0 1-.437-.437v-1.75a.45.45 0 0 1 .437-.438.47.47 0 0 1 .438.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '45282e253ee2540a3095ae8decf18f2f__a' },
            React.createElement("path", { d: 'M0 0h11v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedComputerMouseScrollwheelSmRegularIcon);
exports.default = ForwardRef;
