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
const LabelPairedTwoXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.938 9c-1.36 0-2.672.563-3.657 1.5l-1.265 1.313c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079L2.25 9.47C3.469 8.203 5.156 7.5 6.938 7.5c3.562 0 6.562 2.906 6.562 6.516 0 1.828-.75 3.515-2.062 4.78L2.624 27H14.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75c-.328 0-.61-.187-.703-.469a.65.65 0 0 1 .187-.797l10.172-9.562c.985-.938 1.594-2.25 1.594-3.656C12 11.25 9.703 9 6.938 9' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c1cca68b615d00f41605baf3658fbd82__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTwoXlRegularIcon);
exports.default = ForwardRef;
