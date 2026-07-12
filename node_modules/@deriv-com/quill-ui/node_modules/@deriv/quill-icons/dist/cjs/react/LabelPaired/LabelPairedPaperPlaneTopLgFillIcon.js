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
const LabelPairedPaperPlaneTopLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 30, viewBox: '0 0 21 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm2.414 6.594 17.266 7.5c1.25.547 1.25 2.304 0 2.851l-17.266 7.5c-1.328.586-2.695-.898-1.992-2.187l2.734-5.04c.156-.312.469-.546.86-.585l6.875-.86c.117 0 .234-.117.234-.273a.25.25 0 0 0-.234-.234l-6.875-.86c-.391-.078-.703-.273-.86-.586L.422 8.781c-.703-1.289.664-2.773 1.992-2.187' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '93db72e320c735eeea9530de828c9ac0__a' },
            React.createElement("path", { d: 'M0 0h21v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPaperPlaneTopLgFillIcon);
exports.default = ForwardRef;
