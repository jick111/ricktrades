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
const LabelPairedTakeProfitMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.469 16.719v-6.75h2.25V7.344H2.375v2.625h2.25v6.75zm2.5-9.375h4.469c.437 0 .874.093 1.25.25.374.156.687.375.968.656.282.281.469.625.625 1.031.125.375.188.813.188 1.25s-.063.875-.188 1.25a3.1 3.1 0 0 1-.625 1.031c-.281.282-.593.5-.968.657-.376.156-.813.219-1.25.219h-1.626v3.03H9.97zM14.5 10c-.031-.031-.094-.062-.281-.062h-1.406v1.187h1.406c.187 0 .281-.062.312-.094.031-.031.063-.062.063-.25v-.531c0-.156-.031-.219-.063-.219z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b14ddbd94f8045840338c5cd70aa09f7__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTakeProfitMdFillIcon);
exports.default = ForwardRef;
