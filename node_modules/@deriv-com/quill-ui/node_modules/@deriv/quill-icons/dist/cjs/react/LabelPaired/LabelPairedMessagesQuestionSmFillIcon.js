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
const LabelPairedMessagesQuestionSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 5.5c0-.957.766-1.75 1.75-1.75h7.875c.957 0 1.75.793 1.75 1.75v5.25c0 .984-.793 1.75-1.75 1.75H5.773L3.56 14.168c-.137.11-.301.11-.465.055a.45.45 0 0 1-.219-.41V12.5H2c-.984 0-1.75-.766-1.75-1.75zm7 7.875h2.625A2.626 2.626 0 0 0 12.5 10.75v-3.5H16c.957 0 1.75.793 1.75 1.75v5.25c0 .984-.793 1.75-1.75 1.75h-.875v1.313c0 .19-.11.328-.246.41-.164.054-.328.054-.465-.055L12.2 16H9c-.984 0-1.75-.766-1.75-1.75zM3.969 6.293l-.028.027c-.082.274.055.602.356.684.273.11.574-.027.683-.328v-.028c.028-.082.11-.109.192-.109h1.312c.192 0 .356.137.356.328a.37.37 0 0 1-.164.301l-1.012.602c-.191.082-.273.273-.273.464v.301c0 .3.246.547.547.547.273 0 .519-.246.546-.547l.711-.41c.465-.246.739-.738.739-1.258 0-.793-.657-1.422-1.45-1.422H5.172c-.547 0-1.04.328-1.203.848m2.68 4.238a.69.69 0 0 0-.356-.656.72.72 0 0 0-.738 0 .69.69 0 0 0-.356.656.7.7 0 0 0 .356.684c.218.137.52.137.738 0a.7.7 0 0 0 .355-.684' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '93536a5d8d353678ca2db0ea1bfb46a4__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMessagesQuestionSmFillIcon);
exports.default = ForwardRef;
