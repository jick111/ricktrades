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
exports.StandaloneLinkSimpleRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneLinkSimpleRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M4.75 16.5A6.243 6.243 0 0 1 11 10.25h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H11c-2.773 0-5 2.266-5 5 0 2.773 2.227 5 5 5h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H11a6.22 6.22 0 0 1-6.25-6.25m22.5 0A6.243 6.243 0 0 1 21 22.75h-3.125a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625H21c2.734 0 5-2.227 5-5 0-2.734-2.266-5-5-5h-3.125a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625H21c3.438 0 6.25 2.813 6.25 6.25m-16.562-.625h10.625c.312 0 .625.313.625.625a.64.64 0 0 1-.625.625H10.688a.617.617 0 0 1-.626-.625c0-.312.274-.625.626-.625' })));
exports.StandaloneLinkSimpleRegularIcon = StandaloneLinkSimpleRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneLinkSimpleRegularIcon);
exports.default = ForwardRef;
