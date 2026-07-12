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
exports.StandalonePasteBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePasteBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M10.063 8.375A2.195 2.195 0 0 1 12.25 6.5c1.094 0 1.992.82 2.148 1.875H16c1.133 0 2.11.82 2.422 1.875H16c-1.133 0-2.11.508-2.812 1.25h-2.813c-.703 0-1.25-.547-1.25-1.25H8.5a.64.64 0 0 0-.625.625V21.5c0 .352.273.625.625.625h3.75V24H8.5A2.47 2.47 0 0 1 6 21.5V10.875c0-1.367 1.094-2.5 2.5-2.5zm1.562.313c0 .351.273.624.625.624a.64.64 0 0 0 .625-.624c0-.313-.312-.626-.625-.626a.64.64 0 0 0-.625.626M23.5 24.624a.64.64 0 0 0 .625-.625v-7.969l-2.656-2.656H16a.64.64 0 0 0-.625.625v10c0 .352.273.625.625.625zM16 26.5a2.47 2.47 0 0 1-2.5-2.5V14c0-1.367 1.094-2.5 2.5-2.5h5.469c.468 0 .976.234 1.328.586l2.617 2.617c.352.352.586.86.586 1.328V24c0 1.406-1.133 2.5-2.5 2.5z' })));
exports.StandalonePasteBoldIcon = StandalonePasteBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePasteBoldIcon);
exports.default = ForwardRef;
