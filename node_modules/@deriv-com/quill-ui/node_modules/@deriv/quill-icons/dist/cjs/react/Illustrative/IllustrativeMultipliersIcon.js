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
exports.IllustrativeMultipliersIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeMultipliersIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.76 26.627a2.32 2.32 0 0 1-1.667-.694c-.946-.946-.946-2.44-.026-3.36l6.413-6.413a.233.233 0 0 0 0-.333L6.067 9.413a2.36 2.36 0 0 1 0-3.333c.946-.947 2.44-.947 3.36-.027l6.413 6.414c.08.08.267.08.347 0L22.6 6.053c.92-.92 2.413-.92 3.333 0 .947.947.947 2.44.027 3.36l-6.413 6.414a.233.233 0 0 0 0 .333l6.413 6.413c.92.92.92 2.414 0 3.334-.947.946-2.44.946-3.36.026l-6.413-6.413c-.08-.08-.267-.08-.347 0l-6.413 6.413a2.38 2.38 0 0 1-1.667.694M16 18.213c.4 0 .773.16 1.053.44l6.414 6.414a1.11 1.11 0 0 0 1.56 0c.453-.454.453-1.16.026-1.587l-6.413-6.413a1.48 1.48 0 0 1 0-2.107l6.413-6.413a1.11 1.11 0 0 0 0-1.56c-.453-.454-1.16-.454-1.586-.027l-6.414 6.413c-.56.56-1.546.56-2.106 0L8.533 6.96a1.11 1.11 0 0 0-1.56 0c-.453.453-.453 1.16-.026 1.587l6.413 6.413a1.48 1.48 0 0 1 0 2.107L6.947 23.48a1.11 1.11 0 0 0 0 1.56c.453.453 1.16.453 1.586.027l6.414-6.414c.28-.28.653-.44 1.053-.44' })));
exports.IllustrativeMultipliersIcon = IllustrativeMultipliersIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeMultipliersIcon);
exports.default = ForwardRef;
