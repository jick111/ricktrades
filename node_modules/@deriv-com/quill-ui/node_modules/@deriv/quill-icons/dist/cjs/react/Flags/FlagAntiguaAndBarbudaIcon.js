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
exports.FlagAntiguaAndBarbudaIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagAntiguaAndBarbudaIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#fff', d: 'M15.692 9H8.308L12 13z' }),
    React.createElement("path", { fill: '#D0091E', d: 'M.563.61C.214.97 0 1.46 0 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2c0-.54-.214-1.03-.562-1.39L12 13z' }),
    React.createElement("path", { fill: '#0070C9', d: 'M19.385 5H4.615l3.693 4h7.384z' }),
    React.createElement("path", { fill: '#333', d: 'M23.438.61A2 2 0 0 0 22 0H2C1.436 0 .926.234.563.61L4.615 5h14.77z' }),
    React.createElement("path", { fill: '#FDD200', d: 'M8.535 5h6.93q.035-.245.035-.5a3.5 3.5 0 1 0-6.965.5' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagAntiguaAndBarbudaIcon = FlagAntiguaAndBarbudaIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagAntiguaAndBarbudaIcon);
exports.default = ForwardRef;
