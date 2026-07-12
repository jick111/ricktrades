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
exports.LegacyIndicatorActiveIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyIndicatorActiveIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', d: 'm8.888 5.95 2.12-2.98c.206-.34.202-.726.01-1.03a.95.95 0 0 0-.898-.438L7.84 1.5a.99.99 0 0 0-.861.46l-4 6.23c-.185.343-.167.718.027 1.009a.95.95 0 0 0 .882.419l2.725.002-1.573 3.684c-.218.512.437.944.822.541l6.07-6.36.06-.076a.95.95 0 0 0-.887-1.457zm2.172 1-4.017 4.209.787-1.843a.5.5 0 0 0-.46-.696H3.89L7.82 2.5h2.296L7.512 6.16a.5.5 0 0 0 .408.79z' })));
exports.LegacyIndicatorActiveIcon = LegacyIndicatorActiveIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyIndicatorActiveIcon);
exports.default = ForwardRef;
