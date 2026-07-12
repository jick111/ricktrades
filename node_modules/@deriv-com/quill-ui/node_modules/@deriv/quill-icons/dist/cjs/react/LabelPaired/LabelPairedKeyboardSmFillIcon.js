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
const LabelPairedKeyboardSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 5.5h12.25c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75m.438 1.75a.45.45 0 0 0-.438.438v.875c0 .246.191.437.438.437h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437zm-.438 3.063v.874c0 .247.191.438.438.438h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437h-.876a.45.45 0 0 0-.437.438m.438 2.187a.45.45 0 0 0-.438.438v.874c0 .247.191.438.438.438h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437zM4.5 7.688v.875c0 .246.191.437.438.437h.875a.45.45 0 0 0 .437-.437v-.876a.47.47 0 0 0-.437-.437h-.875a.45.45 0 0 0-.438.438m.438 2.187a.45.45 0 0 0-.438.438v.874c0 .247.191.438.438.438h.875a.45.45 0 0 0 .437-.437v-.876a.47.47 0 0 0-.437-.437zM4.5 12.938v.874c0 .247.191.438.438.438h6.125a.45.45 0 0 0 .437-.437v-.876a.47.47 0 0 0-.437-.437H4.937a.45.45 0 0 0-.437.438M7.563 7.25a.45.45 0 0 0-.438.438v.875c0 .246.191.437.438.437h.875a.45.45 0 0 0 .437-.437v-.876a.47.47 0 0 0-.437-.437zm-.438 3.063v.874c0 .247.191.438.438.438h.875a.45.45 0 0 0 .437-.437v-.876a.47.47 0 0 0-.437-.437h-.876a.45.45 0 0 0-.437.438m3.063-3.063a.45.45 0 0 0-.438.438v.875c0 .246.191.437.438.437h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437zm-.438 3.063v.874c0 .247.191.438.438.438h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437h-.876a.45.45 0 0 0-.437.438m3.063-3.063a.45.45 0 0 0-.438.438v.875c0 .246.191.437.438.437h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437zm-.438 3.063v.874c0 .247.191.438.438.438h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437h-.876a.45.45 0 0 0-.437.438m.438 2.187a.45.45 0 0 0-.438.438v.874c0 .247.191.438.438.438h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1fba24e9bbfc0ea5e2fff8255f703e19__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedKeyboardSmFillIcon);
exports.default = ForwardRef;
