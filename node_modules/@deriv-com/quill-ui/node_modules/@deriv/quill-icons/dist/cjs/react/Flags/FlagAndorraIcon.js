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
exports.FlagAndorraIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagAndorraIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#D20636', d: 'M16 0h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6z' }),
    React.createElement("path", { fill: '#FFE100', d: 'M16 0H8v16h8z' }),
    React.createElement("path", { fill: '#0006AB', d: 'M2 0h6v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2' }),
    React.createElement("path", { fill: '#C8B47C', fillRule: 'evenodd', d: 'M13.436 10.435A1.5 1.5 0 0 0 14.5 9V6c0-.835-.672-1.5-1.5-1.5h-2A1.5 1.5 0 0 0 9.5 6v3c0 .682.448 1.25 1.064 1.436.186.62.758 1.064 1.436 1.064.682 0 1.25-.45 1.436-1.065', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#D20636', fillRule: 'evenodd', d: 'M10.5 5.5h1V7h-1zm2 2h1V9h-1z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#FFE100', fillRule: 'evenodd', d: 'M12.5 5.5h1V7h-1zm-2 2h1V9h-1z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagAndorraIcon = FlagAndorraIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagAndorraIcon);
exports.default = ForwardRef;
