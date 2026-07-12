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
exports.IllustrativeLeverageIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeLeverageIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M29.333 6.667a3.335 3.335 0 0 0-6.666 0 3.335 3.335 0 0 0 6.667 0m-3.333 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M12 8a4.67 4.67 0 0 0-4.667-4.667A4.67 4.67 0 0 0 2.667 8a4.67 4.67 0 0 0 4.666 4.667A4.67 4.67 0 0 0 12 8m-4.667 3.333a3.335 3.335 0 0 1 0-6.666 3.335 3.335 0 0 1 0 6.666M14.667 11.613v2.394c0 .366.3.666.666.666s.667-.3.667-.666v-4a.66.66 0 0 0-.413-.614.66.66 0 0 0-.727.147l-1.333 1.333a.664.664 0 1 0 .94.94zM17.747 14.613a.66.66 0 0 0 .726-.14l1.334-1.333a.664.664 0 1 0-.94-.94l-.194.193V10c0-.367-.3-.667-.666-.667s-.667.3-.667.667v4c0 .267.16.513.413.613z' }),
        React.createElement("path", { d: 'M28.667 10h-5.334C22.6 10 22 10.6 22 11.333V12c0 1.1.9 2 2 2h1.333v4c0 .367-.3.667-.666.667H19.24c-.3-1.147-1.333-2-2.573-2s-2.274.853-2.574 2H8.667A.67.67 0 0 1 8 18v-1.333h1.333c1.1 0 2-.9 2-2V14c0-.733-.6-1.333-1.333-1.333H4.667c-.734 0-1.334.6-1.334 1.333v.667c0 1.1.9 2 2 2h1.334V18c0 1.1.9 2 2 2h5.426c.24.933.974 1.66 1.907 1.907v1.426h-3.333c-1.1 0-2 .9-2 2V28c0 .367.3.667.666.667H22c.367 0 .667-.3.667-.667v-2.667c0-1.1-.9-2-2-2h-3.334v-1.426A2.67 2.67 0 0 0 19.24 20h5.427c1.1 0 2-.9 2-2v-4H28c1.1 0 2-.9 2-2v-.667C30 10.6 29.4 10 28.667 10m-24 4.667V14H10v.667c0 .366-.3.666-.667.666h-4a.67.67 0 0 1-.666-.666m16.666 10.666v2H12v-2c0-.366.3-.666.667-.666h8c.366 0 .666.3.666.666m-4.666-4.666c-.734 0-1.334-.6-1.334-1.334 0-.733.6-1.333 1.334-1.333.733 0 1.333.6 1.333 1.333 0 .734-.6 1.334-1.333 1.334m12-8.667c0 .367-.3.667-.667.667h-4a.67.67 0 0 1-.667-.667v-.667h5.334z' }))));
exports.IllustrativeLeverageIcon = IllustrativeLeverageIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeLeverageIcon);
exports.default = ForwardRef;
