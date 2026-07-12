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
const LabelPairedFiveXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.25 8.11c.094-.376.375-.61.75-.61h9.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3.563l-1.876 7.5H9c3.281 0 6 2.719 6 6 0 3.328-2.719 6-6 6H3.938c-1.547 0-3-.844-3.704-2.25l-.187-.375c-.188-.375 0-.844.328-1.031a.77.77 0 0 1 1.031.328l.188.422c.468.89 1.36 1.453 2.343 1.453H9a4.501 4.501 0 0 0 0-9H.75c-.234 0-.469-.14-.61-.328a.75.75 0 0 1-.14-.61z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '103450b6a71f84cf6630b81230747100__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFiveXlRegularIcon);
exports.default = ForwardRef;
