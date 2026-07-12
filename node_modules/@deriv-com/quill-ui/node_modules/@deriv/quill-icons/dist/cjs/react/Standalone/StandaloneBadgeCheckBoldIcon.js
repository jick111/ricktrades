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
exports.StandaloneBadgeCheckBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBadgeCheckBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M13.813 9.703c-.235.39-.665.586-1.094.469a2.5 2.5 0 0 0-2.5.586 2.43 2.43 0 0 0-.586 2.46c.117.43-.078.9-.469 1.134-.781.39-1.289 1.21-1.289 2.148 0 .977.508 1.797 1.29 2.188.39.234.585.664.468 1.093-.274.86-.04 1.797.625 2.461.664.664 1.601.899 2.46.625.43-.117.9.078 1.095.469.43.781 1.25 1.289 2.187 1.289.938 0 1.758-.508 2.148-1.29.235-.39.704-.585 1.133-.468.82.274 1.797.04 2.461-.625.664-.664.86-1.601.586-2.46-.117-.43.078-.9.469-1.094.781-.43 1.328-1.25 1.328-2.188 0-.937-.547-1.758-1.328-2.148a1.02 1.02 0 0 1-.469-1.133 2.43 2.43 0 0 0-.586-2.461 2.43 2.43 0 0 0-2.46-.586 1.02 1.02 0 0 1-1.134-.469A2.41 2.41 0 0 0 16 8.375c-.977 0-1.797.547-2.187 1.328M16 6.5c1.367 0 2.617.664 3.438 1.719 1.289-.196 2.617.234 3.632 1.21a4.43 4.43 0 0 1 1.211 3.633c1.055.82 1.719 2.07 1.719 3.438a4.26 4.26 0 0 1-1.719 3.438 4.26 4.26 0 0 1-1.21 3.632 4.33 4.33 0 0 1-3.634 1.25c-.82 1.016-2.07 1.68-3.437 1.68a4.33 4.33 0 0 1-3.437-1.68c-1.29.157-2.657-.234-3.633-1.21a4.33 4.33 0 0 1-1.25-3.633A4.47 4.47 0 0 1 6 16.5c0-1.367.664-2.617 1.68-3.437A4.43 4.43 0 0 1 8.89 9.43a4.43 4.43 0 0 1 3.633-1.211C13.343 7.164 14.593 6.5 16 6.5m4.414 8.164-5 5c-.39.39-.976.39-1.328 0l-2.5-2.5a.856.856 0 0 1 0-1.289c.351-.39.937-.39 1.328 0l1.836 1.836 4.336-4.336c.352-.39.937-.39 1.328 0a.92.92 0 0 1 0 1.29' })));
exports.StandaloneBadgeCheckBoldIcon = StandaloneBadgeCheckBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBadgeCheckBoldIcon);
exports.default = ForwardRef;
