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
exports.StandaloneRectangleBarcodeBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneRectangleBarcodeBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 9.625a.64.64 0 0 0-.625.625v12.5c0 .352.273.625.625.625h17.5a.64.64 0 0 0 .625-.625v-12.5c0-.312-.312-.625-.625-.625zm-2.5.625c0-1.367 1.094-2.5 2.5-2.5h17.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H7.25a2.47 2.47 0 0 1-2.5-2.5zm4.688 1.25a.95.95 0 0 1 .937.938v8.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937v-8.125c0-.508.39-.938.938-.938m2.812 0c.313 0 .625.313.625.625v8.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-8.75c0-.312.273-.625.625-.625m1.875.938c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v8.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937zm5.313-.938a.95.95 0 0 1 .937.938v8.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937v-8.125c0-.508.39-.938.938-.938m2.812.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625v8.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625z' })));
exports.StandaloneRectangleBarcodeBoldIcon = StandaloneRectangleBarcodeBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneRectangleBarcodeBoldIcon);
exports.default = ForwardRef;
