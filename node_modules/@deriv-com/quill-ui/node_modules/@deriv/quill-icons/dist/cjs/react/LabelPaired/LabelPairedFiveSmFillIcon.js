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
const LabelPairedFiveSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1 5.363c.082-.41.438-.738.875-.738h5.25A.9.9 0 0 1 8 5.5c0 .492-.41.875-.875.875h-4.54L2.04 9.438h3.117a3.723 3.723 0 0 1 3.719 3.718 3.705 3.705 0 0 1-3.719 3.719H2.86a2.87 2.87 0 0 1-2.543-1.559l-.109-.218a.867.867 0 0 1 .383-1.176.866.866 0 0 1 1.176.383l.109.218c.191.383.574.602.984.602h2.297a1.98 1.98 0 0 0 1.969-1.969c0-1.066-.902-1.969-1.969-1.969H1a.89.89 0 0 1-.684-.3.84.84 0 0 1-.191-.711z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '320167c82cbaaf39b45055c7ed1ca0ce__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFiveSmFillIcon);
exports.default = ForwardRef;
