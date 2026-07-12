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
exports.StandaloneSearchFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneSearchFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M22.25 14.625a8.12 8.12 0 0 1-1.562 4.805l4.921 4.96c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0l-4.961-4.96c-1.328 1.015-3.008 1.562-4.766 1.562A8.12 8.12 0 0 1 6 14.625C6 10.172 9.633 6.5 14.125 6.5c4.453 0 8.125 3.672 8.125 8.125m-8.125 5.625a5.58 5.58 0 0 0 4.844-2.812c1.015-1.72 1.015-3.868 0-5.625C17.953 10.093 16.117 9 14.125 9c-2.031 0-3.867 1.094-4.883 2.813-1.015 1.757-1.015 3.906 0 5.624a5.6 5.6 0 0 0 4.883 2.813' })));
exports.StandaloneSearchFillIcon = StandaloneSearchFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneSearchFillIcon);
exports.default = ForwardRef;
