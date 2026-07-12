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
const LabelPairedKeyboardSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 6.375A.88.88 0 0 0 1 7.25v7c0 .492.383.875.875.875h12.25A.88.88 0 0 0 15 14.25v-7a.9.9 0 0 0-.875-.875zm-1.75.875c0-.957.766-1.75 1.75-1.75h12.25c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75zm2.406.219h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H2.53a.43.43 0 0 1-.437-.437v-.438a.45.45 0 0 1 .437-.437m-.437 3.062a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H2.53a.43.43 0 0 1-.437-.437zm.437 2.188h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H2.53a.43.43 0 0 1-.437-.437v-.438a.45.45 0 0 1 .437-.437M4.72 7.906a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437zm.437 2.188h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437v-.438a.45.45 0 0 1 .437-.437m2.188-2.188a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H7.78a.43.43 0 0 1-.437-.437zm.437 2.188h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H7.78a.43.43 0 0 1-.437-.437v-.438a.45.45 0 0 1 .437-.437M9.97 7.906a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437zm.437 2.188h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437v-.438a.45.45 0 0 1 .437-.437m2.188-2.188a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437zm.437 2.188h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437v-.438a.45.45 0 0 1 .437-.437m-.437 3.062a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437zm-7.656-.219h6.125a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.438H4.937a.43.43 0 0 1-.437-.438.45.45 0 0 1 .438-.437' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '455db14f83d0614001a12ba6f0389de7__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedKeyboardSmRegularIcon);
exports.default = ForwardRef;
