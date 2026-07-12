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
exports.StandaloneSquareListFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneSquareListFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 10.25c0-1.367 1.094-2.5 2.5-2.5h12.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H9.75a2.47 2.47 0 0 1-2.5-2.5zm3.75 7.5c.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25m1.25-5c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25M11 21.5c.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25m3.75-9.687a.925.925 0 0 0-.937.937c0 .547.39.938.937.938H21c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937zm0 3.75a.925.925 0 0 0-.937.937c0 .547.39.938.937.938H21c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937zm0 3.75a.925.925 0 0 0-.937.937c0 .547.39.938.937.938H21c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937z' })));
exports.StandaloneSquareListFillIcon = StandaloneSquareListFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneSquareListFillIcon);
exports.default = ForwardRef;
