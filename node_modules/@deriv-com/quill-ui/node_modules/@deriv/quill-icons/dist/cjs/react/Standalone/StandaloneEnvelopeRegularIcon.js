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
exports.StandaloneEnvelopeRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneEnvelopeRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M8.5 10.25c-.703 0-1.25.586-1.25 1.25v1.563l7.617 5.624a1.94 1.94 0 0 0 2.227 0l7.656-5.625V11.5c0-.664-.586-1.25-1.25-1.25zm-1.25 4.375V21.5c0 .703.547 1.25 1.25 1.25h15c.664 0 1.25-.547 1.25-1.25v-6.875l-6.914 5.078a3.23 3.23 0 0 1-3.711 0zM6 11.5C6 10.133 7.094 9 8.5 9h15c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-15A2.47 2.47 0 0 1 6 21.5z' })));
exports.StandaloneEnvelopeRegularIcon = StandaloneEnvelopeRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneEnvelopeRegularIcon);
exports.default = ForwardRef;
