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
exports.StandaloneArrowDownToBracketFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowDownToBracketFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm21.86 14.898-5 5a1.205 1.205 0 0 1-1.758 0l-5-5a1.204 1.204 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l2.891 2.851V7.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v8.242l2.852-2.851a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757M9.75 20.25v2.5c0 .703.547 1.25 1.25 1.25h10c.664 0 1.25-.547 1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v2.5c0 2.07-1.68 3.75-3.75 3.75H11c-2.07 0-3.75-1.68-3.75-3.75v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25' })));
exports.StandaloneArrowDownToBracketFillIcon = StandaloneArrowDownToBracketFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowDownToBracketFillIcon);
exports.default = ForwardRef;
