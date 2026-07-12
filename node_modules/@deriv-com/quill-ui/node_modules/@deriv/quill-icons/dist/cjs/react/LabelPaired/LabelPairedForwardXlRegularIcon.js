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
const LabelPairedForwardXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M22.219 18 12 10.594v14.86zM11.906 9c.281 0 .563.094.797.281l10.828 7.828c.282.235.469.563.469.891 0 .375-.187.703-.469.938l-10.828 7.828a1.6 1.6 0 0 1-.797.234c-.797 0-1.406-.61-1.406-1.406v-4.828l-8.297 6a1.6 1.6 0 0 1-.797.234C.61 27 0 26.39 0 25.594V10.406C0 9.656.61 9 1.406 9c.282 0 .563.094.797.281l8.297 6v-4.875c0-.75.61-1.406 1.406-1.406M10.5 18.938v-1.829l-9-6.515v14.86z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '37a477d6184ad6e4187d80e73c1c20b3__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedForwardXlRegularIcon);
exports.default = ForwardRef;
