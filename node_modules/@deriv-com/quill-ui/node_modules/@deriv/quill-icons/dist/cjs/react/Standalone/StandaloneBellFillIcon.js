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
exports.StandaloneBellFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBellFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16 6.5c.664 0 1.25.586 1.25 1.25v.781c2.852.547 5 3.086 5 6.094v.742c0 1.836.664 3.633 1.875 5l.273.313c.352.39.43.898.235 1.367-.195.43-.664.703-1.133.703h-15c-.508 0-.977-.273-1.172-.703a1.26 1.26 0 0 1 .234-1.367l.274-.313a7.6 7.6 0 0 0 1.914-5v-.742c0-3.008 2.148-5.547 5-6.094V7.75c0-.664.547-1.25 1.25-1.25m1.758 19.297c-.469.469-1.094.703-1.758.703s-1.328-.234-1.797-.703S13.5 24.664 13.5 24h5c0 .664-.273 1.328-.742 1.797' })));
exports.StandaloneBellFillIcon = StandaloneBellFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBellFillIcon);
exports.default = ForwardRef;
