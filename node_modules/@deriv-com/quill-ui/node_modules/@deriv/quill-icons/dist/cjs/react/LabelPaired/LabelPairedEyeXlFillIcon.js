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
const LabelPairedEyeXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.5 7.5c3.75 0 6.797 1.734 9 3.797 2.203 2.015 3.656 4.453 4.36 6.14.14.375.14.797 0 1.172-.704 1.641-2.157 4.078-4.36 6.141s-5.25 3.75-9 3.75c-3.797 0-6.844-1.687-9.047-3.75s-3.656-4.5-4.36-6.14a1.68 1.68 0 0 1 0-1.172c.704-1.688 2.157-4.125 4.36-6.141C6.656 9.234 9.703 7.5 13.5 7.5M6.75 18a6.71 6.71 0 0 0 3.375 5.86c2.063 1.218 4.64 1.218 6.75 0 2.063-1.22 3.375-3.422 3.375-5.86 0-2.39-1.312-4.594-3.375-5.812-2.11-1.22-4.687-1.22-6.75 0A6.7 6.7 0 0 0 6.75 18m6.75-3c0-.328-.094-.61-.187-.937-.094-.235.093-.563.374-.563a4.53 4.53 0 0 1 4.126 3.375c.656 2.39-.75 4.828-3.188 5.484-2.39.657-4.875-.797-5.484-3.187A3.5 3.5 0 0 1 9 18.234c-.047-.28.281-.468.516-.375.328.094.609.141.984.141 1.64 0 3-1.312 3-3' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b5a69aab6113f01a3ce3a7a6dff5da61__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEyeXlFillIcon);
exports.default = ForwardRef;
