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
const LabelPairedForwardXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.5 10.406c0-.75.61-1.406 1.406-1.406.281 0 .563.094.797.281l10.828 7.828c.282.235.469.563.469.891 0 .375-.187.703-.469.938l-10.828 7.828a1.6 1.6 0 0 1-.797.234c-.797 0-1.406-.61-1.406-1.406v-4.64l-8.297 5.812c-.234.187-.515.234-.797.234C.61 27 0 26.39 0 25.594v-15.14C0 9.655.61 9 1.406 9c.282 0 .563.094.797.281l8.297 5.813zm0 7.406-8.25-5.765V24l8.25-5.766zM20.953 18l-8.203-5.906v11.86z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7a7fb7afeb4adfd97416a2c9386f63f1__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedForwardXlBoldIcon);
exports.default = ForwardRef;
