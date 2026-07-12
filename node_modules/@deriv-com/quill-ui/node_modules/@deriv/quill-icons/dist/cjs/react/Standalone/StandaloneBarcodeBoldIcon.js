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
exports.StandaloneBarcodeBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBarcodeBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M6.938 7.75a.95.95 0 0 1 .937.938v15.625c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V8.688c0-.508.39-.938.938-.938m3.437 0c.313 0 .625.313.625.625v16.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V8.375c0-.312.273-.625.625-.625m2.813 0a.95.95 0 0 1 .937.938v15.625c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V8.688c0-.508.39-.938.938-.938m4.374 0a.95.95 0 0 1 .938.938v15.625c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V8.688c0-.508.39-.938.938-.938m6.563.938c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v15.625c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937zm-2.5-.313c0-.312.273-.625.625-.625.313 0 .625.313.625.625v16.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625z' })));
exports.StandaloneBarcodeBoldIcon = StandaloneBarcodeBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBarcodeBoldIcon);
exports.default = ForwardRef;
