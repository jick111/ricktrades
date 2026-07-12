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
const LabelPairedCashRegisterSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 3.75h6.125a.9.9 0 0 1 .875.875v1.75c0 .492-.41.875-.875.875H5.688v.875h5.906a1.74 1.74 0 0 1 1.722 1.504l.657 4.512c0 .082.027.164.027.246V16c0 .984-.793 1.75-1.75 1.75H1.75C.766 17.75 0 16.984 0 16v-1.859l.656-4.512A1.74 1.74 0 0 1 2.38 8.125h1.559V7.25H1.75a.864.864 0 0 1-.875-.875v-1.75c0-.465.383-.875.875-.875m.875 1.313a.45.45 0 0 0-.437.437c0 .246.19.438.437.438H7a.45.45 0 0 0 .438-.438A.47.47 0 0 0 7 5.063zM1.313 16c0 .246.19.438.437.438h10.5a.45.45 0 0 0 .438-.438v-.437H1.313zM12.03 9.82a.44.44 0 0 0-.437-.383H2.379a.44.44 0 0 0-.438.383l-.629 4.43H12.66zm-8.968.274c.355 0 .656.3.656.656 0 .383-.301.656-.656.656a.63.63 0 0 1-.657-.656c0-.355.274-.656.656-.656m1.968.656c0-.355.274-.656.657-.656.355 0 .656.3.656.656 0 .383-.301.656-.657.656a.63.63 0 0 1-.656-.656m-.656 1.531c.355 0 .656.301.656.656 0 .383-.3.657-.656.657a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657m3.281-1.531c0-.355.274-.656.657-.656.355 0 .656.3.656.656 0 .383-.301.656-.656.656a.63.63 0 0 1-.657-.656M7 12.281c.355 0 .656.301.656.656 0 .383-.3.657-.656.657a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657m3.281-1.531c0-.355.274-.656.656-.656.356 0 .657.3.657.656 0 .383-.301.656-.656.656a.63.63 0 0 1-.657-.656m-.656 1.531c.355 0 .656.301.656.656 0 .383-.3.657-.656.657a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'df6e6c22075fde73ee469d92720a2874__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCashRegisterSmBoldIcon);
exports.default = ForwardRef;
