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
exports.StandaloneSignalRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneSignalRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M26.625 7.125v18.75A.64.64 0 0 1 26 26.5a.617.617 0 0 1-.625-.625V7.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625M21 10.25c.313 0 .625.313.625.625v15A.64.64 0 0 1 21 26.5a.617.617 0 0 1-.625-.625v-15c0-.312.273-.625.625-.625m-4.375 4.375v11.25A.64.64 0 0 1 16 26.5a.617.617 0 0 1-.625-.625v-11.25c0-.312.273-.625.625-.625.313 0 .625.313.625.625M11 17.75c.313 0 .625.313.625.625v7.5A.64.64 0 0 1 11 26.5a.617.617 0 0 1-.625-.625v-7.5c0-.312.273-.625.625-.625M6 21.5c.313 0 .625.313.625.625v3.75A.64.64 0 0 1 6 26.5a.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625' })));
exports.StandaloneSignalRegularIcon = StandaloneSignalRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneSignalRegularIcon);
exports.default = ForwardRef;
