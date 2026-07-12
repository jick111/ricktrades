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
exports.LegacyResponsibleTradingIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyResponsibleTradingIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#62cbce9918deb154882cbecd22bd8553__a)' },
        React.createElement("path", { fill: '#333', d: 'M7.79.046a.5.5 0 0 1 .42 0l6.5 3A.5.5 0 0 1 15 3.5c0 6.865-2.278 11.07-6.853 12.478a.5.5 0 0 1-.294 0C3.278 14.57 1 10.365 1 3.5a.5.5 0 0 1 .29-.454zM8 1.05 2.002 3.818l.009.469c.159 5.863 2.127 9.376 5.888 10.655l.101.032.1-.032c3.846-1.307 5.817-4.95 5.897-11.05l.001-.074zm3.354 4.596a.5.5 0 0 1 .057.638l-.057.07-4 4a.5.5 0 0 1-.638.057l-.07-.057-2-2a.5.5 0 0 1 .638-.765l.07.057L7 9.293l3.646-3.647a.5.5 0 0 1 .708 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '62cbce9918deb154882cbecd22bd8553__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyResponsibleTradingIcon = LegacyResponsibleTradingIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyResponsibleTradingIcon);
exports.default = ForwardRef;
