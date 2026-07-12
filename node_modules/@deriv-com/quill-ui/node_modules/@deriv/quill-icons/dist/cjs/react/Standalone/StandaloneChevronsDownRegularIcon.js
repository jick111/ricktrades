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
exports.StandaloneChevronsDownRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneChevronsDownRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M8.031 9.469a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0L16 15.64l7.031-7.07a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0zm0 7.5a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0L16 23.14l7.031-7.07a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0z' })));
exports.StandaloneChevronsDownRegularIcon = StandaloneChevronsDownRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneChevronsDownRegularIcon);
exports.default = ForwardRef;
