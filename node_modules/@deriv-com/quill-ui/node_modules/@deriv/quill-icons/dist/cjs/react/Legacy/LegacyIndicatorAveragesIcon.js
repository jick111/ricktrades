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
exports.LegacyIndicatorAveragesIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyIndicatorAveragesIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', d: 'M2.494 10.575c.026-.172.088-.484.19-.89.173-.675.4-1.35.689-1.976C4.164 5.992 5.235 5 6.62 5c1.507 0 2.034.756 2.75 3.275l.103.363C10.355 11.71 11.373 13 14 13a.5.5 0 0 0 0-1c-2.046 0-2.794-.947-3.566-3.638l-.102-.36C9.502 5.084 8.747 4 6.62 4 4.759 4 3.401 5.258 2.465 7.29a12.6 12.6 0 0 0-.75 2.15 13 13 0 0 0-.21.985.5.5 0 0 0 .99.15' })));
exports.LegacyIndicatorAveragesIcon = LegacyIndicatorAveragesIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyIndicatorAveragesIcon);
exports.default = ForwardRef;
