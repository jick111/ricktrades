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
exports.StandaloneUnlockBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneUnlockBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M12.875 11.5V14h9.375c1.367 0 2.5 1.133 2.5 2.5V24c0 1.406-1.133 2.5-2.5 2.5H9.75a2.47 2.47 0 0 1-2.5-2.5v-7.5c0-1.367 1.094-2.5 2.5-2.5H11v-2.5c0-2.734 2.227-5 5-5 2.227 0 4.102 1.484 4.727 3.477a.933.933 0 0 1-.586 1.171.933.933 0 0 1-1.172-.585c-.43-1.25-1.602-2.188-2.969-2.188a3.11 3.11 0 0 0-3.125 3.125m-3.75 5V24c0 .352.273.625.625.625h12.5a.64.64 0 0 0 .625-.625v-7.5c0-.312-.312-.625-.625-.625H9.75a.64.64 0 0 0-.625.625' })));
exports.StandaloneUnlockBoldIcon = StandaloneUnlockBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneUnlockBoldIcon);
exports.default = ForwardRef;
