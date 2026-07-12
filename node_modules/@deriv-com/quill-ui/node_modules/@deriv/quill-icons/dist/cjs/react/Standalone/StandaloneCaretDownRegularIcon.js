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
exports.StandaloneCaretDownRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCaretDownRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm16.195 20.172 4.688-4.414c.078-.078.078-.117.078-.195 0-.157-.117-.313-.273-.313h-9.415c-.156 0-.273.156-.273.313 0 .078 0 .117.078.195l4.688 4.414c.039.078.117.078.234.078.078 0 .156 0 .195-.078m.86.937c-.274.274-.664.391-1.055.391-.43 0-.82-.117-1.094-.39l-4.687-4.454c-.313-.273-.469-.703-.469-1.093 0-.86.664-1.563 1.523-1.563l9.415.04c.859 0 1.562.663 1.562 1.523 0 .39-.195.82-.508 1.093z' })));
exports.StandaloneCaretDownRegularIcon = StandaloneCaretDownRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCaretDownRegularIcon);
exports.default = ForwardRef;
