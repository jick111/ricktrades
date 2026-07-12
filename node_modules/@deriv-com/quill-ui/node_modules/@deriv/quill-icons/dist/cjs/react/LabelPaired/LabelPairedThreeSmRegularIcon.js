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
const LabelPairedThreeSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.125 5.063a.45.45 0 0 1 .438-.438H8c.164 0 .328.11.383.3a.38.38 0 0 1-.11.466L3.406 9.875h1.969c1.914 0 3.5 1.586 3.5 3.5 0 1.941-1.586 3.5-3.5 3.5H2.559c-.985 0-1.914-.547-2.352-1.45l-.055-.081a.45.45 0 0 1 .192-.602.45.45 0 0 1 .601.192l.055.109c.3.602.902.957 1.559.957h2.816a2.626 2.626 0 0 0 0-5.25H2.313a.42.42 0 0 1-.41-.273.38.38 0 0 1 .109-.465L6.879 5.5H.563a.43.43 0 0 1-.438-.437' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4a6bd880cf8aa4e0541129726fab1ea0__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedThreeSmRegularIcon);
exports.default = ForwardRef;
