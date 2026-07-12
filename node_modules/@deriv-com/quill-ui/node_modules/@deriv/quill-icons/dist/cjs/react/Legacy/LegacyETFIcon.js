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
exports.LegacyETFIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyETFIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M23.665 22.667h-2.89v-12H28v2.999h-4.335v1.5H28v3h-4.335zM11.804 10.667h8.67v2.999h-2.89v9h-2.89v-9h-2.89z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#fff', d: 'M6.884 18.159h3.605V15.91H6.884v-2.247h4.613l.007-2.997H4v11.988h7.497l.007-2.997h-4.62z' }),
    React.createElement("path", { fill: '#33658A', fillRule: 'evenodd', d: 'M6 0a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6zm4.489 18.159H6.884v1.499h4.62l-.007 2.996H4V10.667h7.504l-.007 2.996H6.884v2.247h3.605zm1.315-7.492h8.67v2.999h-2.89v9h-2.89v-9h-2.89zm11.861 12h-2.89v-12H28v2.999h-4.335v1.5H28v3h-4.335z', clipRule: 'evenodd' })));
exports.LegacyETFIcon = LegacyETFIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyETFIcon);
exports.default = ForwardRef;
