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
exports.StandaloneKeyboardBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneKeyboardBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 10.875a.64.64 0 0 0-.625.625v10c0 .352.273.625.625.625h17.5a.64.64 0 0 0 .625-.625v-10c0-.312-.312-.625-.625-.625zm-2.5.625c0-1.367 1.094-2.5 2.5-2.5h17.5c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5H7.25a2.47 2.47 0 0 1-2.5-2.5zm6.875 7.5h8.75c.313 0 .625.313.625.625v.625a.64.64 0 0 1-.625.625h-8.75A.617.617 0 0 1 11 20.25v-.625c0-.312.273-.625.625-.625m-2.812-2.812c0-.313.273-.625.624-.625h.626c.312 0 .624.312.624.624v.625a.64.64 0 0 1-.624.625h-.626a.617.617 0 0 1-.624-.625zm.624-3.75h.626c.312 0 .624.312.624.624v.626a.64.64 0 0 1-.624.624h-.626a.617.617 0 0 1-.624-.624v-.626c0-.312.273-.624.624-.624m2.5 3.75c0-.313.274-.625.626-.625h.624c.313 0 .626.312.626.624v.625a.64.64 0 0 1-.626.625h-.624a.617.617 0 0 1-.626-.625zm.626-3.75h.624c.313 0 .626.312.626.624v.626a.64.64 0 0 1-.626.624h-.624a.617.617 0 0 1-.626-.624v-.626c0-.312.274-.624.626-.624m2.5 3.75c0-.313.273-.625.624-.625h.626c.312 0 .625.312.625.624v.625a.64.64 0 0 1-.625.625h-.625a.617.617 0 0 1-.626-.625zm.624-3.75h.626c.312 0 .625.312.625.624v.626a.64.64 0 0 1-.625.624h-.625a.617.617 0 0 1-.626-.624v-.626c0-.312.274-.624.626-.624m2.5 3.75c0-.313.274-.625.625-.625h.625c.313 0 .625.312.625.624v.625a.64.64 0 0 1-.625.625h-.625a.617.617 0 0 1-.625-.625zm.625-3.75h.625c.313 0 .625.312.625.624v.626a.64.64 0 0 1-.625.624h-.625a.617.617 0 0 1-.625-.624v-.626c0-.312.274-.624.625-.624m2.5 3.75c0-.313.274-.625.625-.625h.625c.313 0 .625.312.625.624v.625a.64.64 0 0 1-.625.625h-.625a.617.617 0 0 1-.625-.625zm.625-3.75h.625c.313 0 .625.312.625.624v.626a.64.64 0 0 1-.625.624h-.625a.617.617 0 0 1-.625-.624v-.626c0-.312.274-.624.625-.624' })));
exports.StandaloneKeyboardBoldIcon = StandaloneKeyboardBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneKeyboardBoldIcon);
exports.default = ForwardRef;
