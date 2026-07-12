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
exports.LegacyCommodityChannelIndexIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyCommodityChannelIndexIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#85ACB0', d: 'M16.126 2.514a1 1 0 0 1 1.742-.01l4 7a1 1 0 1 1-1.736.992l-3.12-5.459-9.138 16.449a1 1 0 0 1-1.655.139l-4-5a1 1 0 0 1 1.562-1.25l3.069 3.836zM12.75 3a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z' }),
    React.createElement("path", { fill: '#FF444F', d: 'M21 19h-9.75a1 1 0 1 0 0 2H21a1 1 0 1 0 0-2' })));
exports.LegacyCommodityChannelIndexIcon = LegacyCommodityChannelIndexIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyCommodityChannelIndexIcon);
exports.default = ForwardRef;
