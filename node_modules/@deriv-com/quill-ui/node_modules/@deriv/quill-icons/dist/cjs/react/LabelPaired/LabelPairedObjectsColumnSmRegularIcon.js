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
const LabelPairedObjectsColumnSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.688 5.5a.45.45 0 0 0-.438.438v4.375c0 .246.191.437.438.437h2.625a.45.45 0 0 0 .437-.437V5.937a.47.47 0 0 0-.437-.437zm-1.313.438c0-.711.574-1.313 1.313-1.313h2.625c.71 0 1.312.602 1.312 1.313v4.375c0 .738-.602 1.312-1.312 1.312H1.688a1.296 1.296 0 0 1-1.313-1.312zm8.313 4.812a.45.45 0 0 0-.438.438v4.374c0 .247.191.438.438.438h2.624a.45.45 0 0 0 .438-.437v-4.376a.47.47 0 0 0-.437-.437zm-1.313.438c0-.711.574-1.313 1.313-1.313h2.624c.711 0 1.313.602 1.313 1.313v4.374c0 .739-.602 1.313-1.312 1.313H8.687a1.296 1.296 0 0 1-1.312-1.312zm-3.062 2.187H1.688a.45.45 0 0 0-.438.438v1.75c0 .246.191.437.438.437h2.625a.45.45 0 0 0 .437-.437v-1.75a.47.47 0 0 0-.437-.438M1.688 12.5h2.625c.71 0 1.312.602 1.312 1.313v1.75c0 .738-.602 1.312-1.312 1.312H1.688a1.296 1.296 0 0 1-1.313-1.312v-1.75c0-.711.574-1.313 1.313-1.313m7-7a.45.45 0 0 0-.438.438v1.75c0 .246.191.437.438.437h2.624a.45.45 0 0 0 .438-.437v-1.75a.47.47 0 0 0-.437-.438zm-1.313.438c0-.711.574-1.313 1.313-1.313h2.624c.711 0 1.313.602 1.313 1.313v1.75c0 .738-.602 1.312-1.312 1.312H8.687a1.296 1.296 0 0 1-1.312-1.312z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7cb1cb6bf4a75fcba49a68ecf62c9acf__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedObjectsColumnSmRegularIcon);
exports.default = ForwardRef;
