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
const LabelPairedSquareListSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.125 5.5a.88.88 0 0 0-.875.875v8.75c0 .492.383.875.875.875h8.75a.88.88 0 0 0 .875-.875v-8.75a.9.9 0 0 0-.875-.875zm-1.75.875c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75zm2.844 1.75c0-.355.273-.656.656-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656m2.406 0a.45.45 0 0 1 .438-.437h3.5a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438h-3.5a.43.43 0 0 1-.438-.438m0 2.625a.45.45 0 0 1 .438-.437h3.5a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438h-3.5a.43.43 0 0 1-.438-.438m0 2.625a.45.45 0 0 1 .438-.437h3.5a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438h-3.5a.43.43 0 0 1-.438-.438m-1.75-1.969a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656m-.656 1.969c0-.355.273-.656.656-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '845ec197957bb30fdd2c40afdb826c9f__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSquareListSmRegularIcon);
exports.default = ForwardRef;
