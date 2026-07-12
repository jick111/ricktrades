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
exports.StandaloneHorizontalRuleDashedRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneHorizontalRuleDashedRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M3.5 16.5c0-.312.273-.625.625-.625H7.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H4.125A.617.617 0 0 1 3.5 16.5m6.875 0c0-.312.273-.625.625-.625h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H11a.617.617 0 0 1-.625-.625m6.875 0c0-.312.273-.625.625-.625H21c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.125a.617.617 0 0 1-.625-.625m6.875 0c0-.312.273-.625.625-.625h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H24.75a.617.617 0 0 1-.625-.625' })));
exports.StandaloneHorizontalRuleDashedRegularIcon = StandaloneHorizontalRuleDashedRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneHorizontalRuleDashedRegularIcon);
exports.default = ForwardRef;
