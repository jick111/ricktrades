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
exports.StandaloneObjectsColumnRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneObjectsColumnRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M9.125 9a.64.64 0 0 0-.625.625v6.25c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-6.25c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zM19.125 16.5a.64.64 0 0 0-.625.625v6.25c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-6.25c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zm-4.375 3.125h-3.75a.64.64 0 0 0-.625.625v2.5c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625M9.125 19h3.75c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875v-2.5c0-1.016.82-1.875 1.875-1.875m10-10a.64.64 0 0 0-.625.625v2.5c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875z' })));
exports.StandaloneObjectsColumnRegularIcon = StandaloneObjectsColumnRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneObjectsColumnRegularIcon);
exports.default = ForwardRef;
