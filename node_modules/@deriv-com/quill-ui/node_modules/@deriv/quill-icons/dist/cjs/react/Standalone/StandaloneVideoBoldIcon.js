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
exports.StandaloneVideoBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneVideoBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 10.875a.64.64 0 0 0-.625.625v10c0 .352.273.625.625.625h10a.64.64 0 0 0 .625-.625v-10c0-.312-.312-.625-.625-.625zm-2.5.625c0-1.367 1.094-2.5 2.5-2.5h10c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-10a2.47 2.47 0 0 1-2.5-2.5zm20.625 9.219V12.32L21 14.273v-2.03l4.063-1.837c.195-.078.39-.156.625-.156.859 0 1.562.703 1.562 1.563v9.414c0 .859-.703 1.523-1.562 1.523-.235 0-.43-.04-.625-.117L21 20.797v-2.07z' })));
exports.StandaloneVideoBoldIcon = StandaloneVideoBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneVideoBoldIcon);
exports.default = ForwardRef;
