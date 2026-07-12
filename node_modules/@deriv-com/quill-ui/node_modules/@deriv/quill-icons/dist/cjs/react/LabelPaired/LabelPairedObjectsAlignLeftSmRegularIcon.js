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
const LabelPairedObjectsAlignLeftSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 4.188a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v13.125a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437zm4.375 4.375c0 .246.191.437.438.437h7.875a.45.45 0 0 0 .437-.437v-1.75a.47.47 0 0 0-.437-.438H4.812a.45.45 0 0 0-.437.438zM3.5 6.813c0-.711.574-1.313 1.313-1.313h7.875c.71 0 1.312.602 1.312 1.313v1.75c0 .738-.602 1.312-1.312 1.312H4.812A1.296 1.296 0 0 1 3.5 8.563zm.875 7.875c0 .246.191.437.438.437h4.375a.45.45 0 0 0 .437-.437v-1.75a.47.47 0 0 0-.437-.438H4.812a.45.45 0 0 0-.437.438zm-.875-1.75c0-.711.574-1.313 1.313-1.313h4.375c.71 0 1.312.602 1.312 1.313v1.75c0 .738-.602 1.312-1.312 1.312H4.812A1.296 1.296 0 0 1 3.5 14.688z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '36c4529c35f9be1b471dd9ef94ece2eb__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedObjectsAlignLeftSmRegularIcon);
exports.default = ForwardRef;
