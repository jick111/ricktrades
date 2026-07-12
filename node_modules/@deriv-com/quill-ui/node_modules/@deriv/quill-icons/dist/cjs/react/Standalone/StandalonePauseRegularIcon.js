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
exports.StandalonePauseRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePauseRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11.625 10.25a.64.64 0 0 0-.625.625v11.25c0 .352.273.625.625.625H13.5a.64.64 0 0 0 .625-.625v-11.25c0-.312-.312-.625-.625-.625zm-1.875.625C9.75 9.859 10.57 9 11.625 9H13.5c1.016 0 1.875.86 1.875 1.875v11.25c0 1.055-.86 1.875-1.875 1.875h-1.875a1.85 1.85 0 0 1-1.875-1.875zm8.75-.625a.64.64 0 0 0-.625.625v11.25c0 .352.273.625.625.625h1.875a.64.64 0 0 0 .625-.625v-11.25c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h1.875c1.016 0 1.875.86 1.875 1.875v11.25c0 1.055-.86 1.875-1.875 1.875H18.5a1.85 1.85 0 0 1-1.875-1.875z' })));
exports.StandalonePauseRegularIcon = StandalonePauseRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePauseRegularIcon);
exports.default = ForwardRef;
