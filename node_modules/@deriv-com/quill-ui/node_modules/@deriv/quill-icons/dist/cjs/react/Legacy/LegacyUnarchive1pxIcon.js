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
exports.LegacyUnarchive1pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyUnarchive1pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#e1841451fe870b17689531da47f21f63__a)' },
        React.createElement("path", { fill: '#333', d: 'M14 0a.5.5 0 0 1 .398.197l.05.08 1.435 2.869a.5.5 0 0 1 .081.172l-.017-.042c.044.089.06.184.05.276.006.103.004.218.003.339V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3.891l-.001-.207q0-.07.004-.137A.5.5 0 0 1 .02 3.36l.016-.042a.5.5 0 0 1 .081-.172L1.553.276A.5.5 0 0 1 1.907.01L2 0zm1 4H1v11h14zM8 6l.072.005.056.012.063.02.059.03.062.042.042.037 2 2 .057.07a.5.5 0 0 1-.057.638l-.07.057a.5.5 0 0 1-.638-.057L8.5 7.707V12.5l-.008.09a.5.5 0 0 1-.992-.09V7.707L6.354 8.854l-.07.057a.5.5 0 0 1-.638-.765L7.66 6.135l.057-.046.093-.051.063-.021.075-.014zm5.69-5H2.309l-1 2H14.69z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e1841451fe870b17689531da47f21f63__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyUnarchive1pxIcon = LegacyUnarchive1pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyUnarchive1pxIcon);
exports.default = ForwardRef;
