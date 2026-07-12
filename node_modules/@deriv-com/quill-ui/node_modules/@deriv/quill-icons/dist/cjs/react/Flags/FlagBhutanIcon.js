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
exports.FlagBhutanIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagBhutanIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#FF4D00', d: 'M2 16h20a2 2 0 0 0 2-2V2c0-.612-.275-1.16-.709-1.527L.71 15.527c.348.295.799.473 1.291.473' }),
    React.createElement("path", { fill: 'gold', d: 'M22 0H2a2 2 0 0 0-2 2v12c0 .612.275 1.16.709 1.527L23.29.473A2 2 0 0 0 22 0' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M2 1h20a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m20-1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'm5 10.5.5 1.5 2 .5.5-1 4 .5-1-2.5h2l3 1 1-1-3-1 1-1h3l.5-1H16v-1h2l1-1-4-1-3 3 1 1-3-.5-2 3.5-1.004.785z', clipRule: 'evenodd' })));
exports.FlagBhutanIcon = FlagBhutanIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagBhutanIcon);
exports.default = ForwardRef;
