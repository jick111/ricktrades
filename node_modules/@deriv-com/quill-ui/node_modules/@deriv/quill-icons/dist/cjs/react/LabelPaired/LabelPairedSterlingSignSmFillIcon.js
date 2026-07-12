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
const React = __importStar(require("react"));
const react_1 = require("react");
const LabelPairedSterlingSignSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.188 8.152v1.723H6.25a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H3.188v1.23c0 .793-.22 1.56-.63 2.243l-.027.027H8a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H1c-.328 0-.629-.164-.766-.437a.84.84 0 0 1 0-.875l.82-1.368c.247-.41.383-.875.383-1.34v-1.23H1a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h.438V8.152c0-1.941 1.558-3.527 3.5-3.527.382 0 .738.082 1.12.191l2.215.739c.465.164.711.656.547 1.12a.903.903 0 0 1-1.093.548l-2.243-.739a1.8 1.8 0 0 0-.546-.109c-.985 0-1.75.793-1.75 1.777' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c1353cca85f26ac2a21e34d57d9c1d0d__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSterlingSignSmFillIcon);
exports.default = ForwardRef;
