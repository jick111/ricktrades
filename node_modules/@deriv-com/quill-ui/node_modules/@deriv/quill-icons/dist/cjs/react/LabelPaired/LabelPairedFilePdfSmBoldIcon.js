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
const LabelPairedFilePdfSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 16.438h1.313v1.312H1.75C.766 17.75 0 16.984 0 16V5.5c0-.957.766-1.75 1.75-1.75h4.512c.465 0 .902.191 1.23.52L9.98 6.758c.329.328.52.765.52 1.23v4.074H9.188V8.126H7a.864.864 0 0 1-.875-.875V5.063H1.75a.45.45 0 0 0-.437.437V16c0 .246.19.438.437.438m3.063-3.063h.875c.82 0 1.53.71 1.53 1.531 0 .848-.71 1.531-1.53 1.531H5.25v.875a.45.45 0 0 1-.437.438.43.43 0 0 1-.438-.437v-3.5a.45.45 0 0 1 .438-.438m.875 2.188a.65.65 0 0 0 .656-.657c0-.355-.301-.656-.657-.656H5.25v1.313zm2.625-2.188h.874c.711 0 1.313.602 1.313 1.313v1.75c0 .738-.602 1.312-1.312 1.312h-.876a.43.43 0 0 1-.437-.437v-3.5a.45.45 0 0 1 .438-.438m.874 3.5a.45.45 0 0 0 .438-.437v-1.75a.47.47 0 0 0-.437-.438H8.75v2.625zm2.188-3.062a.45.45 0 0 1 .438-.438h1.312a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437h-.875v.875h.875a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437h-.875v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-3.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '34b001d158c5b34b5c05f2a9c1f62b95__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFilePdfSmBoldIcon);
exports.default = ForwardRef;
