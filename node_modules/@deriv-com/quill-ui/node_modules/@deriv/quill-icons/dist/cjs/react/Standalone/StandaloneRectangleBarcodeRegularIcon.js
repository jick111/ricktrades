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
exports.StandaloneRectangleBarcodeRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneRectangleBarcodeRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 9C6.547 9 6 9.586 6 10.25v12.5c0 .703.547 1.25 1.25 1.25h17.5c.664 0 1.25-.547 1.25-1.25v-12.5C26 9.586 25.414 9 24.75 9zm-2.5 1.25c0-1.367 1.094-2.5 2.5-2.5h17.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H7.25a2.47 2.47 0 0 1-2.5-2.5zm3.75 1.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625v8.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625zm11.25 0c0-.312.273-.625.625-.625.313 0 .625.313.625.625v8.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625zm3.125-.625c.313 0 .625.313.625.625v8.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-8.75c0-.312.273-.625.625-.625M11 12.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625v8.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625zm3.125-.625c.313 0 .625.313.625.625v8.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-8.75c0-.312.273-.625.625-.625m2.5.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625v8.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625z' })));
exports.StandaloneRectangleBarcodeRegularIcon = StandaloneRectangleBarcodeRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneRectangleBarcodeRegularIcon);
exports.default = ForwardRef;
