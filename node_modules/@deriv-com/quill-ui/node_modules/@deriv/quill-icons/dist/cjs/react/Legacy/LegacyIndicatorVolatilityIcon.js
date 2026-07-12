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
exports.LegacyIndicatorVolatilityIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyIndicatorVolatilityIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', d: 'M3.5 13a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 3.5 14h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 5.5 14h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 7.5 14h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 9.5 14h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09a.5.5 0 0 1-.492.41h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM9.071 4.243a.5.5 0 0 1 .876.033l1.615 3.23 1.522-2.283a.5.5 0 0 1 .832.554l-2 3a.5.5 0 0 1-.863-.053L9.46 5.538 6.93 9.758a.5.5 0 0 1-.783.096l-1.509-1.51-1.69 3.38a.5.5 0 1 1-.894-.448l2-4a.5.5 0 0 1 .8-.13l1.548 1.548zM3.5 2a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 3.5 3h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 5.5 3h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 7.5 3h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 9.5 3h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 11.5 3h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1z' })));
exports.LegacyIndicatorVolatilityIcon = LegacyIndicatorVolatilityIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyIndicatorVolatilityIcon);
exports.default = ForwardRef;
