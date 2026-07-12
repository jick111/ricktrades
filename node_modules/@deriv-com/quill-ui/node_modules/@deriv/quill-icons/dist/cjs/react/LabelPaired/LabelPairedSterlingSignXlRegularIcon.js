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
const LabelPairedSterlingSignXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.75 13.125V18h7.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3.703A18.7 18.7 0 0 1 1.97 27H14.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75a.82.82 0 0 1-.656-.328.72.72 0 0 1 0-.75l.047-.094A16.8 16.8 0 0 0 2.203 19.5H.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h1.5v-4.875A5.61 5.61 0 0 1 7.875 7.5h.328c.61 0 1.172.14 1.781.328l3.75 1.219c.375.14.563.562.47.984-.142.375-.563.563-.985.469l-3.75-1.266A3.8 3.8 0 0 0 8.203 9h-.328a4.13 4.13 0 0 0-4.125 4.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9d4447fd98904a9645a95cb3de4ef919__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSterlingSignXlRegularIcon);
exports.default = ForwardRef;
