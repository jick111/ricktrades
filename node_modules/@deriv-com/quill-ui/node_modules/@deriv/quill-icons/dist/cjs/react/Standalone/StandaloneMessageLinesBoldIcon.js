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
exports.StandaloneMessageLinesBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneMessageLinesBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M14.125 22.75v.625l2.813-2.11a1.9 1.9 0 0 1 1.132-.39h5.43a.64.64 0 0 0 .625-.625V9c0-.312-.312-.625-.625-.625h-15A.64.64 0 0 0 7.875 9v11.25c0 .352.273.625.625.625h3.75c1.016 0 1.875.86 1.875 1.875m-.04 3.008-.194.117-.664.508c-.196.156-.43.156-.665.078-.195-.117-.312-.313-.312-.586V22.75H8.5a2.47 2.47 0 0 1-2.5-2.5V9c0-1.367 1.094-2.5 2.5-2.5h15C24.867 6.5 26 7.633 26 9v11.25c0 1.406-1.133 2.5-2.5 2.5h-5.43l-3.945 2.969zm-2.148-13.633h8.126a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-8.125c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938m0 3.75h4.376a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-4.375c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938' })));
exports.StandaloneMessageLinesBoldIcon = StandaloneMessageLinesBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneMessageLinesBoldIcon);
exports.default = ForwardRef;
