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
exports.StandaloneCalendarRangeBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCalendarRangeBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M13.188 7.438V9h5.624V7.438c0-.508.391-.938.938-.938a.95.95 0 0 1 .938.938V9h1.562c1.367 0 2.5 1.133 2.5 2.5V24c0 1.406-1.133 2.5-2.5 2.5H9.75a2.47 2.47 0 0 1-2.5-2.5V11.5c0-1.367 1.094-2.5 2.5-2.5h1.563V7.438c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938M9.125 14v10c0 .352.273.625.625.625h12.5a.64.64 0 0 0 .625-.625V14zM11 17.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25m8.75 2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25m-5-2.5c0-.508.39-.937.938-.937h4.374a.95.95 0 0 1 .938.937c0 .547-.43.938-.937.938h-4.375c-.547 0-.938-.391-.938-.938m1.563 2.813a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-4.375c-.547 0-.938-.391-.938-.938 0-.508.39-.937.938-.937z' })));
exports.StandaloneCalendarRangeBoldIcon = StandaloneCalendarRangeBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCalendarRangeBoldIcon);
exports.default = ForwardRef;
