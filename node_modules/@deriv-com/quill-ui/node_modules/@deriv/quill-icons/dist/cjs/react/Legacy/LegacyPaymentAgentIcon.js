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
exports.LegacyPaymentAgentIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyPaymentAgentIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#a6876e0cd604460c311e5d0ff25bbd35__a)' },
        React.createElement("path", { fill: '#333', d: 'M4 4a2 2 0 0 1 2 2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m-5 .5a.5.5 0 0 1 .5.5v.463A2 2 0 0 1 11 10.4a.5.5 0 0 1-1 0 1 1 0 0 0-1.96-.283l2.69 1.389A.5.5 0 0 1 11 12a2 2 0 0 1-1.5 1.937V14a.5.5 0 0 1-1 0v-.063A2 2 0 0 1 7 12a.5.5 0 0 1 1 0 1 1 0 0 0 1.971.24L7.28 10.85a.5.5 0 0 1-.207-.19.5.5 0 0 1-.073-.272 2 2 0 0 1 1.5-1.925V8a.5.5 0 0 1 .5-.5M4 5H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1 2 2 0 0 1 2-2h1a1 1 0 0 0-1-1M3 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a6876e0cd604460c311e5d0ff25bbd35__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyPaymentAgentIcon = LegacyPaymentAgentIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyPaymentAgentIcon);
exports.default = ForwardRef;
