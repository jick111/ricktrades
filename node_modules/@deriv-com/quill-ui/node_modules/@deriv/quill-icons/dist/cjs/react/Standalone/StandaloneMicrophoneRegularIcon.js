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
exports.StandaloneMicrophoneRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneMicrophoneRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M18.5 10.25c0-1.367-1.133-2.5-2.5-2.5a2.49 2.49 0 0 0-2.5 2.5v6.25c0 1.406 1.094 2.5 2.5 2.5 1.367 0 2.5-1.094 2.5-2.5zm-6.25 0a3.751 3.751 0 0 1 7.5 0v6.25a3.751 3.751 0 0 1-7.5 0zM11 14.625V16.5c0 2.773 2.227 5 5 5 2.734 0 5-2.227 5-5v-1.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625V16.5c0 3.242-2.5 5.938-5.625 6.25v2.5h2.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-6.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h2.5v-2.5c-3.164-.312-5.625-3.008-5.625-6.25v-1.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625' })));
exports.StandaloneMicrophoneRegularIcon = StandaloneMicrophoneRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneMicrophoneRegularIcon);
exports.default = ForwardRef;
