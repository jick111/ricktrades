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
const LabelPairedPhoneXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm17.578 18.938 5.25 2.25a1.84 1.84 0 0 1 1.125 2.109l-1.125 5.25c-.187.844-.984 1.5-1.828 1.5-.328 0-.61-.047-.89-.047-.47 0-.938-.047-1.36-.094C8.203 28.781 0 19.875 0 9c0-.844.61-1.64 1.453-1.828l5.25-1.125a1.84 1.84 0 0 1 2.11 1.125l2.25 5.25c.328.75.14 1.64-.516 2.156l-1.922 1.594a14.57 14.57 0 0 0 5.203 5.203l1.594-1.922c.515-.656 1.406-.844 2.156-.515m3.094 8.812.984-4.64-4.687-2.016-1.36 1.687a2.294 2.294 0 0 1-2.906.516 16.73 16.73 0 0 1-6-6 2.294 2.294 0 0 1 .516-2.906l1.687-1.36-2.015-4.687-4.641.984c.14 10.125 8.297 18.281 18.422 18.422' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f03b7e32dbf9be9329a70bc2413e0eda__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPhoneXlBoldIcon);
exports.default = ForwardRef;
