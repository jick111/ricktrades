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
const React = __importStar(require("react"));
const react_1 = require("react");
const LabelPairedClapperboardPlayLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M18.75 13H1.25v8.75c0 .703.547 1.25 1.25 1.25h15c.664 0 1.25-.547 1.25-1.25zm0-1.25v-2.5c0-.352-.156-.664-.43-.898l-3.398 3.398zm-9.766 0h4.18L16.914 8h-4.18zm-1.757 0L10.977 8h-4.18l-3.75 3.75zM2.5 8c-.703 0-1.25.586-1.25 1.25v2.5h.04L5.04 8zM20 11.75v10c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5h15c1.367 0 2.5 1.133 2.5 2.5zM8.438 14.367l5.312 3.125a.61.61 0 0 1 .313.508c0 .234-.118.43-.313.547l-5.312 3.125a.6.6 0 0 1-.626 0c-.195-.117-.351-.313-.351-.547v-6.25c0-.195.156-.43.351-.508a.6.6 0 0 1 .625 0M12.188 18 8.75 15.969v4.062z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6275f54e9195960c548286fdc27a2a2f__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedClapperboardPlayLgRegularIcon);
exports.default = ForwardRef;
