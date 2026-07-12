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
exports.LegacyIndicatorTrendIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyIndicatorTrendIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#D6DADB', d: 'm4 2 2.073 6.166L8 6l2.38.41L12 2h1.5l.5.5v11l-.28.15L12 11.5l-1.5 1-2-3-2 2-.852-1.702L2.5 14l-.5-.5V2.46L2.52 2z' }),
    React.createElement("path", { fill: '#333', d: 'M4.5 2a.5.5 0 0 1 .488.392l1.193 5.367L8.1 5.2a.5.5 0 0 1 .54-.18l.084.033 1.442.721.849-3.395A.5.5 0 0 1 11.5 2h2a.5.5 0 0 1 0 1h-1.61l-.905 3.621a.5.5 0 0 1-.709.326L8.65 6.134l-2.184 2.91.325 1.458 1.355-1.356a.5.5 0 0 1 .77.077l1.723 2.584 1.084-.723a.5.5 0 0 1 .677.116l1.5 2a.5.5 0 0 1-.8.6l-1.216-1.622-1.107.738a.5.5 0 0 1-.693-.139l-1.662-2.492-1.568 1.569a.5.5 0 0 1-.842-.245l-.336-1.511L2.9 13.8a.5.5 0 0 1-.623.147L2.2 13.9a.5.5 0 0 1-.1-.7l3.29-4.387L4.099 3H2.5a.5.5 0 0 1 0-1z' })));
exports.LegacyIndicatorTrendIcon = LegacyIndicatorTrendIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyIndicatorTrendIcon);
exports.default = ForwardRef;
