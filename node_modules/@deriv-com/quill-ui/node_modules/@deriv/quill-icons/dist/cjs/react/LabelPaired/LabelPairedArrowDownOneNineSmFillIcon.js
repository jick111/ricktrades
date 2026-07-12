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
const LabelPairedArrowDownOneNineSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.43 4.79c.246.19.383.437.383.71v2.625h.437a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-2.625A.864.864 0 0 1 9.75 9c0-.465.383-.875.875-.875h.438V6.73l-.165.055a.92.92 0 0 1-1.12-.547.92.92 0 0 1 .546-1.12l1.313-.438c.273-.082.574-.055.793.11M4.5 16.874c-.246 0-.492-.082-.656-.273l-2.406-2.625a.867.867 0 0 1 .054-1.23.867.867 0 0 1 1.23.054l.903.957V5.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v8.258l.875-.957a.867.867 0 0 1 1.23-.055.867.867 0 0 1 .055 1.23L5.13 16.603a.8.8 0 0 1-.629.273m7.055-4.73a.877.877 0 0 0-.41 1.175.84.84 0 0 0 1.148.41.84.84 0 0 0 .41-1.148.87.87 0 0 0-1.148-.437m-.356 3.09a2.355 2.355 0 0 1-1.668-2.27 2.39 2.39 0 0 1 2.406-2.406 2.41 2.41 0 0 1 2.407 2.406c0 .629-.219 1.258-.602 1.777l-1.34 1.805a.84.84 0 0 1-1.203.164c-.41-.273-.492-.82-.191-1.23z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f15dd074770914fd41eff2a10ef840d0__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownOneNineSmFillIcon);
exports.default = ForwardRef;
