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
exports.StandaloneFileCircleInfoBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFileCircleInfoBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 24.625h8.594a6.7 6.7 0 0 0 1.758 1.875H7.25a2.47 2.47 0 0 1-2.5-2.5V9c0-1.367 1.094-2.5 2.5-2.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758v1.718c-.703.196-1.328.47-1.875.86V12.75H14.75c-.703 0-1.25-.547-1.25-1.25V8.375H7.25A.64.64 0 0 0 6.625 9v15c0 .352.273.625.625.625m14.375-9.375c1.992 0 3.828 1.094 4.844 2.813 1.015 1.757 1.015 3.906 0 5.625a5.58 5.58 0 0 1-4.844 2.812 5.6 5.6 0 0 1-4.883-2.812c-1.015-1.72-1.015-3.868 0-5.625 1.016-1.72 2.852-2.813 4.883-2.813m0 3.75c.508 0 .938-.39.938-.937a.95.95 0 0 0-.938-.938.925.925 0 0 0-.937.938c0 .546.39.937.937.937m-1.25 1.875c0 .352.273.625.625.625v1.875a.64.64 0 0 0-.625.625c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625v-2.5c0-.312-.312-.625-.625-.625H21a.64.64 0 0 0-.625.625' })));
exports.StandaloneFileCircleInfoBoldIcon = StandaloneFileCircleInfoBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFileCircleInfoBoldIcon);
exports.default = ForwardRef;
