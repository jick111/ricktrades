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
const LabelPairedCircleStarSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7 5.063c-2.05 0-3.91 1.093-4.95 2.843a5.71 5.71 0 0 0 0 5.688A5.7 5.7 0 0 0 7 16.438a5.68 5.68 0 0 0 4.922-2.844 5.71 5.71 0 0 0 0-5.688C10.882 6.156 9.023 5.063 7 5.063M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M7 7.059c.164 0 .3.109.383.246l.847 1.75 1.915.273c.164.027.3.137.355.3a.43.43 0 0 1-.11.438l-1.394 1.34.328 1.914a.45.45 0 0 1-.164.438c-.137.082-.328.11-.465.027L7 12.883l-1.723.902c-.136.082-.328.055-.465-.027a.45.45 0 0 1-.164-.438l.329-1.914-1.395-1.34c-.11-.109-.164-.273-.11-.437a.45.45 0 0 1 .356-.3l1.914-.274.848-1.75A.47.47 0 0 1 7 7.059' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '085b5c5280f24ffec4f7c2479cc2f607__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleStarSmBoldIcon);
exports.default = ForwardRef;
