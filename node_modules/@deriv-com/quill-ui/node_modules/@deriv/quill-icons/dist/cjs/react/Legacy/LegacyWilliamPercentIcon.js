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
exports.LegacyWilliamPercentIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyWilliamPercentIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#FF444F', d: 'M3 5h4a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2' }),
    React.createElement("path", { fill: '#85ACB0', d: 'M10.037 2.732c.268-.966 1.633-.98 1.92-.02l2.35 7.833 1.766-2.94a1 1 0 0 1 1.745.056l4.07 7.88a1 1 0 0 1-1.777.918l-3.247-6.287-2.007 3.343c-.447.744-1.565.604-1.815-.228l-2.005-6.684-4.073 14.665c-.278.999-1.705.967-1.938-.043l-3-13a1 1 0 1 1 1.948-.45l2.116 9.166zM21 19a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2z' })));
exports.LegacyWilliamPercentIcon = LegacyWilliamPercentIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyWilliamPercentIcon);
exports.default = ForwardRef;
