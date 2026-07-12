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
const LabelPairedBasketShoppingSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.066 3.832a.433.433 0 0 1 .602.137L12.621 9h2.817a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-.657l-1.64 6.563a1.756 1.756 0 0 1-1.696 1.312h-6.89c-.82 0-1.504-.547-1.723-1.312L1.219 9.875H.562a.43.43 0 0 1-.437-.437A.45.45 0 0 1 .563 9h2.789l2.953-5.031a.433.433 0 0 1 .601-.137c.192.11.274.383.137.602L4.363 9h7.246L8.93 4.434a.433.433 0 0 1 .137-.602M2.121 9.875l1.586 6.344c.082.383.438.656.848.656h6.89a.9.9 0 0 0 .848-.656l1.586-6.344zm4.129 2.188v2.624a.45.45 0 0 1-.437.438.43.43 0 0 1-.438-.437v-2.626a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438M8 11.625a.47.47 0 0 1 .438.438v2.624a.45.45 0 0 1-.438.438.43.43 0 0 1-.437-.437v-2.626A.45.45 0 0 1 8 11.626m2.625.438v2.624a.45.45 0 0 1-.437.438.43.43 0 0 1-.438-.437v-2.626a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1d42fd29118776466d06be1527446a46__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBasketShoppingSmRegularIcon);
exports.default = ForwardRef;
