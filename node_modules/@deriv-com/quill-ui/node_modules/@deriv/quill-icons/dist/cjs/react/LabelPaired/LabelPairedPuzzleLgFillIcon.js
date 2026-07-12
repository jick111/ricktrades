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
const LabelPairedPuzzleLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.5 5.5h5C18.867 5.5 20 6.633 20 8v5a.64.64 0 0 1-.625.625h-2.031a.475.475 0 0 0-.469.469v.156c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-.156a.504.504 0 0 0-.469-.469H12.5a.617.617 0 0 1-.625-.625v-1.25c0-.312.273-.625.625-.625h.625c.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25H12.5A.617.617 0 0 1 11.875 8V6.125c0-.312.273-.625.625-.625M0 15.5v-5C0 9.133 1.094 8 2.5 8h5c.313 0 .625.313.625.625v1.406c0 .274.195.469.469.469h.156c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.156a.475.475 0 0 0-.469.469V15.5a.64.64 0 0 1-.625.625H6.25a.617.617 0 0 1-.625-.625v-.625c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25v.625a.64.64 0 0 1-.625.625H.625A.617.617 0 0 1 0 15.5M0 23v-5c0-.312.273-.625.625-.625H7.5c.313 0 .625.313.625.625v1.25a.64.64 0 0 1-.625.625h-.625c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25H7.5c.313 0 .625.313.625.625v1.875a.64.64 0 0 1-.625.625h-5A2.47 2.47 0 0 1 0 23m9.375-5c0-.312.273-.625.625-.625h1.25c.313 0 .625.313.625.625v.625c0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25V18c0-.312.273-.625.625-.625h1.875c.313 0 .625.313.625.625v5c0 1.406-1.133 2.5-2.5 2.5h-5a.617.617 0 0 1-.625-.625z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '32609bc11896273d9ec8845c8bbc6333__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPuzzleLgFillIcon);
exports.default = ForwardRef;
