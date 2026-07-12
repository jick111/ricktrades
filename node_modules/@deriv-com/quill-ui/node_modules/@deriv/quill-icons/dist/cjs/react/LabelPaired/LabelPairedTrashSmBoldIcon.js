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
const LabelPairedTrashSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.215 5.063c-.082 0-.137.054-.192.109l-.52.766H8.47l-.52-.766a.23.23 0 0 0-.191-.11zm4.84.875h1.914c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-.328l-.657 8.887c-.082.93-.82 1.613-1.75 1.613H3.738c-.93 0-1.668-.684-1.75-1.613L1.332 7.25h-.3a.63.63 0 0 1-.657-.656c0-.356.273-.657.656-.657h1.887L3.93 4.435c.273-.41.765-.684 1.285-.684h2.543c.52 0 1.012.273 1.285.684zm.273 1.312H2.645l.656 8.805a.44.44 0 0 0 .437.383h5.496c.22 0 .41-.165.438-.383z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '37761d061ab97ff7ace70ce39cb40eb6__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTrashSmBoldIcon);
exports.default = ForwardRef;
