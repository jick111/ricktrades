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
const LabelPairedRightFromBracketXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm17.672 10.969 5.765 5.765c.329.328.563.797.563 1.266 0 .516-.234.984-.562 1.313l-5.766 5.765c-.281.281-.703.422-1.125.422A1.56 1.56 0 0 1 15 23.953V21H9a1.48 1.48 0 0 1-1.5-1.5v-3c0-.797.656-1.5 1.5-1.5h6v-2.906c0-.844.703-1.594 1.547-1.594.422 0 .844.188 1.125.469M7.5 10.5h-3c-.844 0-1.5.703-1.5 1.5v12c0 .844.656 1.5 1.5 1.5h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-3A4.5 4.5 0 0 1 0 24V12c0-2.484 2.016-4.5 4.5-4.5h3C8.297 7.5 9 8.203 9 9c0 .844-.703 1.5-1.5 1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '24fa72582d3ae587fe9a57b44ec0f659__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedRightFromBracketXlFillIcon);
exports.default = ForwardRef;
