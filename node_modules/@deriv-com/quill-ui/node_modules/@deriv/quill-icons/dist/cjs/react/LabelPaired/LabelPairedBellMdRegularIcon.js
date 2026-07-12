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
const LabelPairedBellMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.5 4.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v.531C10 5.281 12 7.406 12 10v.938c0 1.343.531 2.656 1.5 3.624l.094.094c.25.25.406.625.406.969a1.4 1.4 0 0 1-1.406 1.406H1.375C.594 17 0 16.406 0 15.625c0-.375.125-.719.406-.969l.063-.094C1.438 13.595 2 12.283 2 10.939V10a4.99 4.99 0 0 1 4.5-4.969zM7 6c-2.219 0-4 1.813-4 4v.938a6.15 6.15 0 0 1-1.812 4.343l-.094.063a.5.5 0 0 0-.094.281c0 .219.156.375.375.375h11.219c.219 0 .406-.156.406-.375 0-.094-.062-.187-.125-.281l-.094-.063a6.17 6.17 0 0 1-1.812-4.375V10c0-2.187-1.781-4-4-4zm-.969 12.344c.157.406.532.656.969.656.406 0 .781-.25.938-.656.093-.25.375-.407.625-.313s.406.375.312.657A1.99 1.99 0 0 1 7 20a2.005 2.005 0 0 1-1.906-1.312.524.524 0 0 1 .312-.657c.25-.093.532.063.625.313' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '84d5be3555d72a0098fa050d60167f7f__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBellMdRegularIcon);
exports.default = ForwardRef;
