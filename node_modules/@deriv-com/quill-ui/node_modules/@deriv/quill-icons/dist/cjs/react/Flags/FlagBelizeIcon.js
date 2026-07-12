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
exports.FlagBelizeIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagBelizeIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#D0091E', d: 'M0 13h24v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' }),
    React.createElement("path", { fill: '#003D89', fillRule: 'evenodd', d: 'M0 3h24v10H0zm16.5 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M16.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-7-2.5h1v1h-1zm4 1v2h.5v1h.5v1h-1v-1h-3v1h-1v-1h.5v-1h.5v-2h1v2h1v-2zm0 0v-1h1v1zm-2-1v-1h1v1zm3 2h1v1h-1zm-2 4v-1h-1v1zm-3-4h-1v1h1z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#CBCBCB', fillRule: 'evenodd', d: 'M10 8.5h4v1h-4z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#5E9F47', fillRule: 'evenodd', d: 'M9.5 5.5h1v1h-1zm2-1h1v1h-1zm2 1h1v1h-1zm1 2h1v1h-1zm-1 2h1v1h-1z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#580A00', fillRule: 'evenodd', d: 'M12.5 6.5h1v1h-1z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#B54B00', fillRule: 'evenodd', d: 'M12.5 7.5h1v1h-1z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#BD6100', fillRule: 'evenodd', d: 'M10.5 6.5h1v1h-1z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#F9B626', fillRule: 'evenodd', d: 'M10.5 7.5h1v1h-1z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#5E9F47', fillRule: 'evenodd', d: 'M11.5 10.5h1v1h-1zm-2-1h1v1h-1zm-1-2h1v1h-1z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#D0091E', d: 'M2 0h20a2 2 0 0 1 2 2v1H0V2a2 2 0 0 1 2-2' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagBelizeIcon = FlagBelizeIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagBelizeIcon);
exports.default = ForwardRef;
