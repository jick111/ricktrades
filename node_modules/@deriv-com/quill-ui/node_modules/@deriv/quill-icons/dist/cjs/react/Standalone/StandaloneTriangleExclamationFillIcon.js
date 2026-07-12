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
exports.StandaloneTriangleExclamationFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneTriangleExclamationFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16 7.75a1.56 1.56 0 0 1 1.328.781l8.438 14.375c.273.508.273 1.094 0 1.563a1.48 1.48 0 0 1-1.328.781H7.563c-.586 0-1.094-.273-1.368-.781-.273-.469-.273-1.055 0-1.563l8.438-14.375A1.58 1.58 0 0 1 16 7.75m0 5a.925.925 0 0 0-.937.938v4.374c0 .547.39.938.937.938.508 0 .938-.39.938-.937v-4.375A.95.95 0 0 0 16 12.75m1.25 8.75c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25' })));
exports.StandaloneTriangleExclamationFillIcon = StandaloneTriangleExclamationFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneTriangleExclamationFillIcon);
exports.default = ForwardRef;
