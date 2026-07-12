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
exports.LegacySellManualSoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacySellManualSoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#e97d6817e890ac04ca53f2e0baba036f__a)' },
        React.createElement("path", { fill: '#333', d: 'M8 3a1.5 1.5 0 0 1 1.5 1.5V8h.675a3 3 0 0 1 .95.154l1.191.397a2.49 2.49 0 0 1 1.576 3.151c-.024.07-.024.07-.05.137l-.91 2.275A3 3 0 0 1 10.145 16H8.5a3 3 0 0 1-2.4-1.2l-2.6-3.467V11a1.535 1.535 0 0 1 2.387-1.277l.613.409V4.5A1.5 1.5 0 0 1 8 3m0 1a.5.5 0 0 0-.5.5v5.697A.965.965 0 0 1 6 11l-.668-.445A.535.535 0 0 0 4.5 11l2.4 3.2a2 2 0 0 0 1.6.8h1.646a2 2 0 0 0 1.857-1.257l.91-2.275.03-.082A1.49 1.49 0 0 0 12 9.5l-1.192-.397A2 2 0 0 0 10.175 9H8.5V4.5A.5.5 0 0 0 8 4m4.5-4A1.5 1.5 0 0 1 14 1.5v4A1.5 1.5 0 0 1 12.5 7H11V6h1.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5H5v1H3.5A1.5 1.5 0 0 1 2 5.5v-4A1.5 1.5 0 0 1 3.5 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e97d6817e890ac04ca53f2e0baba036f__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacySellManualSoldIcon = LegacySellManualSoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacySellManualSoldIcon);
exports.default = ForwardRef;
