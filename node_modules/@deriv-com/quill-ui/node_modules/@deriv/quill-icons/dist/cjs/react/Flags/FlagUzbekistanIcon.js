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
exports.FlagUzbekistanIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagUzbekistanIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#20BD42', d: 'M0 12h24v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' }),
    React.createElement("path", { fill: '#D4112A', d: 'M24 11H0v1h24z' }),
    React.createElement("path", { fill: '#fff', d: 'M24 5H0v6h24z' }),
    React.createElement("path", { fill: '#D4112A', d: 'M24 4H0v1h24z' }),
    React.createElement("path", { fill: '#02A3BD', d: 'M2 0h20a2 2 0 0 1 2 2v2H0V2a2 2 0 0 1 2-2' }),
    React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M5 3.915a1.5 1.5 0 1 1 0-2.83 1.5 1.5 0 0 0 0 2.83', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#78CDDB', fillRule: 'evenodd', d: 'M6 2h1v1H6zm1-1h1v1H7zm1 1h1v1H8zm1-1h1v1H9zm1 1h1v1h-1zM9 3h1v1H9zM7 3h1v1H7z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagUzbekistanIcon = FlagUzbekistanIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagUzbekistanIcon);
exports.default = ForwardRef;
