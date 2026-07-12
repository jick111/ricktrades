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
exports.LegacyRayIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyRayIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#85ACB0', d: 'M19.5 19.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0V20a.5.5 0 0 1 .5-.5m0-2.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5m0-2.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0V15a.5.5 0 0 1 .5-.5m0-2.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5m0-2.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0V10a.5.5 0 0 1 .5-.5m0-2.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5m0-2.5a.5.5 0 0 1 .492.41L20 5h.5a.5.5 0 0 1 0 1H20a.5.5 0 0 1-.25-.067A.5.5 0 0 1 19 5.5V5a.5.5 0 0 1 .5-.5M18 5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1 0-1zm-2.5 0a.5.5 0 0 1 0 1H15a.5.5 0 0 1 0-1zM13 5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1 0-1zm-2.5 0a.5.5 0 0 1 0 1H10a.5.5 0 0 1 0-1zM8 5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1 0-1zM5.5 5a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zM3 5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1 0-1zm16.5-3a.5.5 0 0 1 .5.5V3a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5' }),
    React.createElement("path", { fill: '#FF444F', d: 'M4 21a1 1 0 0 1-.71-1.71l14-14a1.004 1.004 0 0 1 1.42 1.42l-14 14A1 1 0 0 1 4 21' })));
exports.LegacyRayIcon = LegacyRayIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyRayIcon);
exports.default = ForwardRef;
