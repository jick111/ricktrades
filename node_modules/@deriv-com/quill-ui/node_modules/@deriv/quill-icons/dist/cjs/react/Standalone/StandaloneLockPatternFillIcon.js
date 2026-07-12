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
exports.StandaloneLockPatternFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneLockPatternFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M6 9c0-1.367 1.094-2.5 2.5-2.5.898 0 1.719.508 2.148 1.25h3.165A2.53 2.53 0 0 1 16 6.5c.898 0 1.719.508 2.148 1.25h3.165A2.53 2.53 0 0 1 23.5 6.5C24.867 6.5 26 7.633 26 9c0 1.406-1.133 2.5-2.5 2.5-.234 0-.469 0-.664-.078l-4.453 4.453c.078.195.117.43.117.625 0 1.406-1.133 2.5-2.5 2.5-.234 0-.469 0-.664-.078l-3.828 3.828h2.305A2.53 2.53 0 0 1 16 21.5c.898 0 1.719.508 2.148 1.25h3.165a2.51 2.51 0 0 1 2.148-1.25c1.406 0 2.5 1.133 2.5 2.5 0 1.406-1.094 2.5-2.5 2.5a2.43 2.43 0 0 1-2.148-1.25h-3.165c-.43.781-1.25 1.25-2.187 1.25a2.43 2.43 0 0 1-2.149-1.25h-3.164A2.43 2.43 0 0 1 8.5 26.5 2.47 2.47 0 0 1 6 24c0-1.367 1.094-2.5 2.5-2.5.195 0 .43.04.625.117l4.453-4.453a1.8 1.8 0 0 1-.117-.664c0-1.367 1.133-2.5 2.5-2.5.234 0 .469.04.664.117l3.828-3.867h-2.305c-.43.781-1.25 1.25-2.187 1.25a2.43 2.43 0 0 1-2.149-1.25h-3.164A2.43 2.43 0 0 1 8.5 11.5 2.47 2.47 0 0 1 6 9m0 7.5a2.54 2.54 0 0 0 1.25 2.188c.742.43 1.719.43 2.5 0 .742-.47 1.25-1.29 1.25-2.188 0-.86-.508-1.68-1.25-2.148-.781-.43-1.758-.43-2.5 0C6.469 14.82 6 15.64 6 16.5m15 0a2.54 2.54 0 0 0 1.25 2.188c.742.43 1.719.43 2.5 0 .742-.47 1.25-1.29 1.25-2.188 0-.86-.508-1.68-1.25-2.148-.781-.43-1.758-.43-2.5 0C21.469 14.82 21 15.64 21 16.5' })));
exports.StandaloneLockPatternFillIcon = StandaloneLockPatternFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneLockPatternFillIcon);
exports.default = ForwardRef;
