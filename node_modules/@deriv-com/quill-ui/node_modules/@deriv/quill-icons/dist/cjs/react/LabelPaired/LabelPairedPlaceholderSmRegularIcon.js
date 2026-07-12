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
const LabelPairedPlaceholderSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.781 4.625h.656a.47.47 0 0 1 .438.438.45.45 0 0 1-.437.437H2.78c-.847 0-1.531.71-1.531 1.531v.657a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V7.03a2.41 2.41 0 0 1 2.406-2.406M.812 9a.47.47 0 0 1 .438.438v2.624a.45.45 0 0 1-.437.438.43.43 0 0 1-.438-.437V9.437A.45.45 0 0 1 .813 9m11.376 0a.47.47 0 0 1 .437.438v2.624a.45.45 0 0 1-.437.438.43.43 0 0 1-.438-.437V9.437A.45.45 0 0 1 12.188 9m0-.875a.43.43 0 0 1-.438-.437V7.03c0-.82-.71-1.531-1.531-1.531h-.656a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h.656a2.43 2.43 0 0 1 2.406 2.406v.657a.45.45 0 0 1-.437.437m.437 5.688v.656a2.41 2.41 0 0 1-2.406 2.406h-.656a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h.656c.82 0 1.531-.684 1.531-1.531v-.656a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438m-11.375 0v.656c0 .847.684 1.531 1.531 1.531h.656a.47.47 0 0 1 .438.438.45.45 0 0 1-.437.437H2.78a2.39 2.39 0 0 1-2.406-2.406v-.656a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438m3.938 3.062a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h2.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437zM4.75 5.063a.45.45 0 0 1 .438-.438h2.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H5.188a.43.43 0 0 1-.438-.437' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '69013276a90f5adeba948b728f0d3dc0__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPlaceholderSmRegularIcon);
exports.default = ForwardRef;
