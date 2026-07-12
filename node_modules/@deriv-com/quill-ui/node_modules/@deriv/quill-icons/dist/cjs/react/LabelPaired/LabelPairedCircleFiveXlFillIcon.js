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
const LabelPairedCircleFiveXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M9.75 12h-.047c-.515 0-.984.422-1.078.938l-.75 4.124c-.047.329 0 .61.188.891.187.235.468.375.796.422l4.079.469c.75.093 1.312.703 1.312 1.453 0 .797-.656 1.453-1.5 1.453h-1.687a1.65 1.65 0 0 1-1.36-.703l-.187-.281c-.328-.516-1.032-.657-1.547-.328-.516.375-.657 1.078-.282 1.593l.188.282C8.578 23.39 9.797 24 11.063 24h1.687c2.063 0 3.75-1.64 3.75-3.703 0-1.875-1.453-3.469-3.328-3.703l-2.86-.328.376-2.016h3.937a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 14.625 12z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b701cc2c024cbc1f0504b813062e7002__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleFiveXlFillIcon);
exports.default = ForwardRef;
