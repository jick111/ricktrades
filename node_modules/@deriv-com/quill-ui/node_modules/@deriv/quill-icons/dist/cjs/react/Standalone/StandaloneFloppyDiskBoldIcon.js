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
exports.StandaloneFloppyDiskBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFloppyDiskBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M9.125 10.25v12.5c0 .352.273.625.625.625h12.5a.64.64 0 0 0 .625-.625v-9.57a.63.63 0 0 0-.195-.43l1.328-1.328c.469.469.703 1.094.703 1.758v9.57c0 1.406-1.094 2.5-2.5 2.5H9.75a2.47 2.47 0 0 1-2.5-2.5v-12.5c0-1.367 1.094-2.5 2.5-2.5h9.57c.664 0 1.29.273 1.758.742l2.93 2.93-1.328 1.328-2.93-2.93v-.039 3.906c0 .547-.43.938-.937.938h-7.5c-.547 0-.938-.39-.938-.937V9.625H9.75a.64.64 0 0 0-.625.625m3.125-.625v3.125h5.625V9.625zM13.5 19c0-.86.469-1.68 1.25-2.148.742-.43 1.719-.43 2.5 0 .742.468 1.25 1.289 1.25 2.148 0 .898-.508 1.719-1.25 2.188-.781.43-1.758.43-2.5 0A2.54 2.54 0 0 1 13.5 19' })));
exports.StandaloneFloppyDiskBoldIcon = StandaloneFloppyDiskBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFloppyDiskBoldIcon);
exports.default = ForwardRef;
