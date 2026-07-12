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
exports.FlagCentralAfricanRepublicIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagCentralAfricanRepublicIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#002D84', d: 'M10 0H2a2 2 0 0 0-2 2v2h10zM14 0v4h10V2a2 2 0 0 0-2-2z' }),
    React.createElement("path", { fill: '#fff', d: 'M14 4h10v4H14zM10 4H0v4h10z' }),
    React.createElement("path", { fill: '#20981D', d: 'M14 8h10v4H14zM10 8H0v4h10z' }),
    React.createElement("path", { fill: '#FDD200', d: 'M10 12H0v2a2 2 0 0 0 2 2h8zM14 12v4h8a2 2 0 0 0 2-2v-2z' }),
    React.createElement("path", { fill: '#FFCF00', fillRule: 'evenodd', d: 'M3.833 1.833h.834v.834h-.834z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#A7972D', fillRule: 'evenodd', d: 'M3 1.833h.833v.834H3zm1.667 0H5.5v.834h-.833zm-.834.834h.834V3.5h-.834zm0-1.667h.834v.833h-.834z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#D4062E', d: 'M10 0h4v16h-4z' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagCentralAfricanRepublicIcon = FlagCentralAfricanRepublicIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagCentralAfricanRepublicIcon);
exports.default = ForwardRef;
