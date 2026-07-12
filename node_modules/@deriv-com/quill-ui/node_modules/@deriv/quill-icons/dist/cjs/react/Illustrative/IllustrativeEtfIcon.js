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
exports.IllustrativeEtfIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeEtfIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fillRule: 'evenodd', d: 'M4.667 5.333c0-1.101.898-2 2-2H20c1.102 0 2 .899 2 2v2h3.333c1.102 0 2 .899 2 2v17.334c0 1.101-.898 2-2 2H12c-1.102 0-2-.899-2-2V24H6.667c-1.102 0-2-.898-2-2zm6.666 21.334a.67.67 0 0 0 .667.666h13.333a.67.67 0 0 0 .667-.666V9.333a.67.67 0 0 0-.667-.666H12a.67.67 0 0 0-.667.666zm9.334-19.334H12c-1.102 0-2 .899-2 2v13.334H6.667A.67.67 0 0 1 6 22V5.333a.67.67 0 0 1 .667-.666H20a.67.67 0 0 1 .667.666zM14 14.667c0-.368.298-.667.667-.667H20a.667.667 0 0 1 0 1.333h-5.333a.667.667 0 0 1-.667-.666M14 20c0-.368.298-.667.667-.667H20a.667.667 0 0 1 0 1.334h-5.333A.667.667 0 0 1 14 20m0 2.667c0-.369.298-.667.667-.667h2.666a.667.667 0 0 1 0 1.333h-2.666a.667.667 0 0 1-.667-.666', clipRule: 'evenodd' })));
exports.IllustrativeEtfIcon = IllustrativeEtfIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeEtfIcon);
exports.default = ForwardRef;
