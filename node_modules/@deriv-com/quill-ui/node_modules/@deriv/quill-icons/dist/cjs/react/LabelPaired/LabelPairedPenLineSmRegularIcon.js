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
const LabelPairedPenLineSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M11.856 4.844c-.247-.246-.657-.246-.93 0L9.449 6.348l2.078 2.078 1.504-1.477c.246-.273.246-.683 0-.93zm-9.461 8.558c-.22.192-.356.465-.438.739l-.766 2.543 2.543-.739c.274-.082.547-.246.739-.465l6.453-6.425L8.82 6.949zm7.93-9.187a1.57 1.57 0 0 1 2.16 0L13.66 5.39a1.57 1.57 0 0 1 0 2.16l-8.558 8.558c-.329.301-.711.547-1.122.657l-3.308.984a.43.43 0 0 1-.438-.11c-.109-.109-.136-.273-.109-.437l.984-3.308c.11-.41.356-.793.657-1.122zm-3.637 12.66h8.75a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-8.75a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f8ae0e5f8ff3749e754d5d2f9e5f1023__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPenLineSmRegularIcon);
exports.default = ForwardRef;
