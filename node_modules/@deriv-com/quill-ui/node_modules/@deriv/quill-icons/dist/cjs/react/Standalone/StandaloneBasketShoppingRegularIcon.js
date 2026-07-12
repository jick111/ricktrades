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
exports.StandaloneBasketShoppingRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBasketShoppingRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M17.523 6.617a.62.62 0 0 1 .86.196L22.602 14h4.023c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-.937l-2.344 9.375c-.274 1.094-1.29 1.875-2.422 1.875h-9.844c-1.172 0-2.148-.781-2.46-1.875L6.311 15.25h-.937a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625H9.36l4.218-7.187a.62.62 0 0 1 .86-.196c.273.156.39.547.195.86L10.805 14h10.351l-3.828-6.523a.62.62 0 0 1 .195-.86M7.602 15.25l2.265 9.063c.117.546.625.937 1.211.937h9.844c.547 0 1.055-.39 1.21-.937l2.266-9.063zm5.898 3.125v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625m2.5-.625c.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625m3.75.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625' })));
exports.StandaloneBasketShoppingRegularIcon = StandaloneBasketShoppingRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBasketShoppingRegularIcon);
exports.default = ForwardRef;
