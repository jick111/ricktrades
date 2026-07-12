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
const LabelPairedSterlingSignSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.75 8.125v1.75h3.719c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H2.75v1.75c0 .684-.191 1.368-.52 1.997l-.355.629h6.344c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H.78c-.246 0-.465-.11-.574-.3-.11-.22-.137-.466-.027-.657l.902-1.613c.219-.438.355-.903.355-1.367v-1.75H.782a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656h.657v-1.75c0-1.941 1.558-3.5 3.472-3.5.356 0 .738.082 1.094.191l2.187.739c.356.11.547.465.41.82-.109.355-.464.52-.82.41l-2.187-.71a2 2 0 0 0-.684-.138c-1.203 0-2.16.985-2.16 2.188' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '71a1e89537ff16b5de941d0b1087f9dc__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSterlingSignSmBoldIcon);
exports.default = ForwardRef;
