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
exports.StandaloneMobileNotchFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneMobileNotchFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M13.5 9h-1.25a.64.64 0 0 0-.625.625v13.75c0 .352.273.625.625.625h7.5a.64.64 0 0 0 .625-.625V9.625c0-.312-.312-.625-.625-.625H18.5v.625a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625zm-1.25-2.5h7.5a3.134 3.134 0 0 1 3.125 3.125v13.75A3.11 3.11 0 0 1 19.75 26.5h-7.5c-1.758 0-3.125-1.367-3.125-3.125V9.625A3.11 3.11 0 0 1 12.25 6.5m1.25 15.625c0-.312.273-.625.625-.625h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625' })));
exports.StandaloneMobileNotchFillIcon = StandaloneMobileNotchFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneMobileNotchFillIcon);
exports.default = ForwardRef;
