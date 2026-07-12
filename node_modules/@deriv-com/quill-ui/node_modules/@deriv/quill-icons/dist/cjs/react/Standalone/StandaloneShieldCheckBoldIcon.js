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
exports.StandaloneShieldCheckBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneShieldCheckBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M8.852 11.46c-.235.118-.352.313-.352.509 0 3.594 1.484 9.726 7.266 12.5a.42.42 0 0 0 .43 0c5.78-2.735 7.265-8.907 7.304-12.5 0-.196-.156-.39-.352-.508L16 8.453zm15-1.718c.859.39 1.523 1.211 1.523 2.227-.04 3.906-1.64 10.976-8.36 14.219a2.4 2.4 0 0 1-2.07 0c-6.718-3.243-8.32-10.313-8.32-14.22-.04-1.015.625-1.835 1.484-2.226l7.344-3.125a1.25 1.25 0 0 1 1.055 0zm-5.664 4.883c0 .898-.547 1.64-1.25 1.992v2.695c0 .547-.43.938-.938.938-.547 0-.937-.39-.937-.937v-2.696a2.18 2.18 0 0 1-1.25-1.992c0-1.172.976-2.187 2.187-2.187 1.172 0 2.188 1.015 2.188 2.187' })));
exports.StandaloneShieldCheckBoldIcon = StandaloneShieldCheckBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneShieldCheckBoldIcon);
exports.default = ForwardRef;
