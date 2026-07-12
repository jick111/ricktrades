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
const LabelPairedBriefcaseSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.813 5.281v1.094h4.375V5.281c0-.11-.11-.218-.22-.218H5.032a.216.216 0 0 0-.218.218M3.5 6.375V5.281c0-.82.684-1.531 1.531-1.531H8.97c.82 0 1.531.71 1.531 1.531v1.094h1.75c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75zm-2.187 5.688v3.062c0 .246.19.438.437.438h10.5a.45.45 0 0 0 .438-.438v-3.062H8.75v.437c0 .492-.41.875-.875.875h-1.75a.864.864 0 0 1-.875-.875v-.437zM5.25 10.75h7.438V8.125a.47.47 0 0 0-.438-.437H1.75a.45.45 0 0 0-.437.437v2.625z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'db14d6f093cff52d35e94cb5dc6ea64a__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBriefcaseSmBoldIcon);
exports.default = ForwardRef;
