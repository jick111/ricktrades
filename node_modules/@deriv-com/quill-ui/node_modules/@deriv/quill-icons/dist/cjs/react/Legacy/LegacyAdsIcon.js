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
exports.LegacyAdsIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyAdsIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', fillRule: 'evenodd', clipRule: 'evenodd' },
        React.createElement("path", { d: 'M1.5 7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM0 7.5A1.5 1.5 0 0 1 1.5 6h13A1.5 1.5 0 0 1 16 7.5v7a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5z' }),
        React.createElement("path", { d: 'M5.5 9a.5.5 0 0 1 .416.223l2 3A.5.5 0 0 1 7.5 13h-4a.5.5 0 0 1-.416-.777l2-3A.5.5 0 0 1 5.5 9m-1.066 3h2.132L5.5 10.401zM8 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M1 4.5A1.5 1.5 0 0 1 2.5 3h11A1.5 1.5 0 0 1 15 4.5V5h-1v-.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V5H1zM3 1.5A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5V2h-1v-.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V2H3z' }))));
exports.LegacyAdsIcon = LegacyAdsIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyAdsIcon);
exports.default = ForwardRef;
