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
exports.LegacyCommoditiesIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyCommoditiesIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M12.403 9.301A.5.5 0 0 1 12.862 9h6.276a.5.5 0 0 1 .46.301l2.6 6a.5.5 0 0 1-.46.699h2.9a.5.5 0 0 1 .46.301l2.6 6a.5.5 0 0 1-.46.699H4.762a.5.5 0 0 1-.46-.699l2.6-6a.5.5 0 0 1 .46-.301h2.9a.5.5 0 0 1-.46-.699zM13.638 16a.5.5 0 0 1 .46.301L16 20.692l1.903-4.39a.5.5 0 0 1 .459-.302z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#33658A', d: 'M14.097 16.301a.5.5 0 0 0-.459-.301h4.724a.5.5 0 0 0-.46.301L16 20.692z' }),
    React.createElement("path", { fill: '#33658A', fillRule: 'evenodd', d: 'M6 0a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6zm6.862 9a.5.5 0 0 0-.46.301l-2.6 6a.5.5 0 0 0 .46.699h-2.9a.5.5 0 0 0-.46.301l-2.6 6a.5.5 0 0 0 .46.699h22.476a.5.5 0 0 0 .46-.699l-2.6-6a.5.5 0 0 0-.46-.301h-2.9a.5.5 0 0 0 .46-.699l-2.6-6a.5.5 0 0 0-.46-.301z', clipRule: 'evenodd' })));
exports.LegacyCommoditiesIcon = LegacyCommoditiesIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyCommoditiesIcon);
exports.default = ForwardRef;
