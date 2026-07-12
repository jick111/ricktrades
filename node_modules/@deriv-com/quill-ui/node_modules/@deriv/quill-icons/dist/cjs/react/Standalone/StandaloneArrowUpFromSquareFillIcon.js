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
exports.StandaloneArrowUpFromSquareFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowUpFromSquareFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm16.86 6.89 3.75 3.75c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0l-1.602-1.601V19c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-8.203l-1.64 1.601a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l3.75-3.75a1.205 1.205 0 0 1 1.757 0M8.5 10.876v12.5c0 .352.273.625.625.625h13.75a.64.64 0 0 0 .625-.625v-12.5c0-.312-.312-.625-.625-.625h-.312c-.704 0-1.25-.547-1.25-1.25 0-.664.546-1.25 1.25-1.25h.312A3.134 3.134 0 0 1 26 10.875v12.5a3.11 3.11 0 0 1-3.125 3.125H9.125C7.367 26.5 6 25.133 6 23.375v-12.5A3.11 3.11 0 0 1 9.125 7.75h.313c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.313a.64.64 0 0 0-.625.625' })));
exports.StandaloneArrowUpFromSquareFillIcon = StandaloneArrowUpFromSquareFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowUpFromSquareFillIcon);
exports.default = ForwardRef;
