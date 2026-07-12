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
const LabelPairedPenSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.8 4.844 9.325 6.348l2.078 2.078 1.504-1.477c.246-.273.246-.683 0-.93L11.73 4.845c-.246-.246-.656-.246-.93 0M8.696 6.949 2.27 13.402a1.6 1.6 0 0 0-.465.739l-.739 2.543 2.543-.766c.274-.082.547-.219.739-.437L10.8 9.055zm3.664-2.734 1.176 1.176a1.57 1.57 0 0 1 0 2.16l-8.558 8.558c-.329.301-.711.547-1.122.657l-3.308.984c-.164.027-.328 0-.438-.11-.109-.109-.136-.273-.109-.437l.984-3.308c.11-.41.356-.793.657-1.122l8.558-8.558a1.57 1.57 0 0 1 2.16 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ca09799f102558a11bd56574e7d655d6__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPenSmRegularIcon);
exports.default = ForwardRef;
