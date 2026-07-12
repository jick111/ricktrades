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
const LabelPairedFlagCheckeredCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1 3.5c.398 0 .75.352.75.75v.375l1.617-.398a3.84 3.84 0 0 1 2.649.304c1.078.54 2.367.54 3.445 0l.234-.117a.738.738 0 0 1 1.055.656v6.54c0 .328-.21.609-.492.703l-.82.304a4.12 4.12 0 0 1-3.329-.164 4.17 4.17 0 0 0-2.859-.328l-1.5.375v2.25c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V4.25c0-.398.328-.75.75-.75m.75 4.406 1.5-.328v1.524l-1.5.328v1.523l1.125-.281c.117-.024.234-.047.375-.07v-1.5l.89-.188c.212-.047.4-.07.61-.047v-1.5c.305 0 .633.047.938.14l.562.165v1.57l-.984-.305a2 2 0 0 0-.516-.07v1.664a7 7 0 0 1 1.5.328V9.242l.516.14c.328.095.656.165.984.188V8.047c-.187 0-.375-.047-.562-.094l-.938-.281V6.219a7 7 0 0 1-.914-.352 3 3 0 0 0-.586-.21v1.71q-.458-.035-.914.07l-.586.141V5.797l-1.5.375zm6 3.469c.375.047.773-.023 1.172-.164l.328-.117V9.406l-.187.047c-.446.094-.891.14-1.313.117zm1.5-3.492V6.219c-.492.14-1.008.21-1.5.21v1.618c.305.047.656.023.96-.047z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3a3c12d455e549b46fcc0f41294c78ba__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFlagCheckeredCaptionFillIcon);
exports.default = ForwardRef;
