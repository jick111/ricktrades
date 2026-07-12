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
const LabelPairedExpandSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.313 4.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H1.25v3.063A.45.45 0 0 1 .813 9a.43.43 0 0 1-.438-.437v-3.5a.45.45 0 0 1 .438-.438zM.374 12.938a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438V16h3.063a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-3.5a.43.43 0 0 1-.438-.437zm11.813-8.313a.47.47 0 0 1 .437.438v3.5a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V5.5H8.688a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438zm-.438 8.313a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v3.5a.45.45 0 0 1-.437.437h-3.5a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h3.062z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '718f9ae017ba3e634ef0d799655fbe79__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExpandSmRegularIcon);
exports.default = ForwardRef;
