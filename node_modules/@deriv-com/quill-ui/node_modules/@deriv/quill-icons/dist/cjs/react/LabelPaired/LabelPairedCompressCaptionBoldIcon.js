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
const LabelPairedCompressCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4 4.813v2.625A.555.555 0 0 1 3.438 8H.813a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h2.062V4.813c0-.305.234-.563.563-.563A.57.57 0 0 1 4 4.813M.813 11h2.625a.57.57 0 0 1 .562.563v2.624a.555.555 0 0 1-.562.563.54.54 0 0 1-.563-.562v-2.063H.813a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563m7.312-6.187v2.062h2.063a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H7.562A.54.54 0 0 1 7 7.438V4.813c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563M7.563 11h2.625a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H8.124v2.063a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562v-2.626c0-.304.234-.562.563-.562' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '20f71c60ebb914c77953486ef0149395__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCompressCaptionBoldIcon);
exports.default = ForwardRef;
