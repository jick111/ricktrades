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
exports.LegacyParabolicIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyParabolicIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#85ACB0', d: 'm9.976 17.651 2.122 2.122-2.122 2.12-2.12-2.12zm3.18-3.187 2.122 2.121-2.122 2.122-2.12-2.122zm3.18-3.177 2.122 2.121-2.122 2.122-2.12-2.122zm-5.157-.727 2.122 2.122-2.122 2.12-2.121-2.12zm8.347-2.45 2.122 2.121-2.122 2.121-2.12-2.121zM8 7.383l2.122 2.121-2.122 2.122-2.121-2.122zM4.82 4.196l2.122 2.121-2.122 2.121-2.121-2.12z' })));
exports.LegacyParabolicIcon = LegacyParabolicIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyParabolicIcon);
exports.default = ForwardRef;
