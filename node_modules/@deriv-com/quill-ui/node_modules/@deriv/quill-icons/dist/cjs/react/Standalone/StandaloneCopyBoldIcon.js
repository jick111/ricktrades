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
exports.StandaloneCopyBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCopyBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M22.25 19.625a.64.64 0 0 0 .625-.625v-7.969l-2.656-2.656H14.75a.64.64 0 0 0-.625.625v10c0 .352.273.625.625.625zm-7.5 1.875a2.47 2.47 0 0 1-2.5-2.5V9c0-1.367 1.094-2.5 2.5-2.5h5.469c.468 0 .976.234 1.328.586l2.617 2.617c.352.352.586.86.586 1.328V19c0 1.406-1.133 2.5-2.5 2.5zm-5-10H11v1.875H9.75a.64.64 0 0 0-.625.625v10c0 .352.273.625.625.625h7.5a.64.64 0 0 0 .625-.625v-1.25h1.875V24c0 1.406-1.133 2.5-2.5 2.5h-7.5a2.47 2.47 0 0 1-2.5-2.5V14c0-1.367 1.094-2.5 2.5-2.5' })));
exports.StandaloneCopyBoldIcon = StandaloneCopyBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCopyBoldIcon);
exports.default = ForwardRef;
