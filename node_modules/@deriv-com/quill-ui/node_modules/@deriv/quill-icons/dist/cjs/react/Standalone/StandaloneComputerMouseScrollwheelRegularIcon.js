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
exports.StandaloneComputerMouseScrollwheelRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneComputerMouseScrollwheelRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M22.25 20.25v-7.5c0-2.734-2.266-5-5-5h-2.5c-2.773 0-5 2.266-5 5v7.5c0 2.773 2.227 5 5 5h2.5c2.734 0 5-2.227 5-5M8.5 12.75a6.243 6.243 0 0 1 6.25-6.25h2.5c3.438 0 6.25 2.813 6.25 6.25v7.5a6.243 6.243 0 0 1-6.25 6.25h-2.5a6.22 6.22 0 0 1-6.25-6.25zm8.125-1.875v2.5A.64.64 0 0 1 16 14a.617.617 0 0 1-.625-.625v-2.5c0-.312.273-.625.625-.625.313 0 .625.313.625.625' })));
exports.StandaloneComputerMouseScrollwheelRegularIcon = StandaloneComputerMouseScrollwheelRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneComputerMouseScrollwheelRegularIcon);
exports.default = ForwardRef;
