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
exports.StandaloneArrowsRotateBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowsRotateBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M9.672 13.844a.976.976 0 0 1-1.25.469.935.935 0 0 1-.508-1.211C9.242 9.977 12.367 7.75 16 7.75c2.031 0 3.984.82 5.43 2.266l2.07 2.07V9.937c0-.507.39-.937.938-.937a.95.95 0 0 1 .937.938v4.374c0 .547-.43.938-.937.938h-4.375c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h2.109l-2.07-2.031A5.83 5.83 0 0 0 16 9.625a6.86 6.86 0 0 0-6.328 4.219m14.375 6.133C22.68 23.062 19.594 25.25 16 25.25c-2.07 0-4.023-.781-5.469-2.266L8.5 20.954v2.108c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937v-4.375c0-.508.39-.938.938-.938h4.375a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H9.789l2.07 2.07c1.094 1.094 2.579 1.68 4.141 1.68 2.813 0 5.273-1.68 6.29-4.14.233-.508.78-.704 1.25-.508.468.195.702.742.507 1.25' })));
exports.StandaloneArrowsRotateBoldIcon = StandaloneArrowsRotateBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowsRotateBoldIcon);
exports.default = ForwardRef;
