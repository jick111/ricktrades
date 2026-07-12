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
exports.StandaloneSignalFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneSignalFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M26 6.5c.664 0 1.25.586 1.25 1.25v17.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V7.75c0-.664.547-1.25 1.25-1.25m-5 3.75c.664 0 1.25.586 1.25 1.25v13.75c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V11.5c0-.664.547-1.25 1.25-1.25m-3.75 5v10c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-10c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25M11 17.75c.664 0 1.25.586 1.25 1.25v6.25c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V19c0-.664.547-1.25 1.25-1.25m-3.75 5v2.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25' })));
exports.StandaloneSignalFillIcon = StandaloneSignalFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneSignalFillIcon);
exports.default = ForwardRef;
