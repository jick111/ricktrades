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
const LabelPairedBadgeCheckSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7 3.75c.984 0 1.86.574 2.297 1.422a2.6 2.6 0 0 1 2.652.629 2.6 2.6 0 0 1 .63 2.652C13.425 8.891 14 9.766 14 10.75a2.61 2.61 0 0 1-1.422 2.324c.3.903.082 1.914-.629 2.625-.71.711-1.75.93-2.652.656A2.58 2.58 0 0 1 7 17.75a2.59 2.59 0 0 1-2.324-1.395A2.62 2.62 0 0 1 2.05 15.7a2.62 2.62 0 0 1-.656-2.625A2.59 2.59 0 0 1 0 10.75c0-.984.547-1.86 1.395-2.297a2.67 2.67 0 0 1 .656-2.652c.71-.711 1.722-.93 2.625-.63A2.61 2.61 0 0 1 7 3.75m3.09 5.715a.644.644 0 0 0 0-.902c-.274-.274-.684-.274-.93 0l-3.035 3.035-1.285-1.286c-.274-.273-.684-.273-.93 0a.6.6 0 0 0 0 .903l1.75 1.75c.246.273.656.273.93 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4f3beb6945a3e2cea0779205e3ac2710__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBadgeCheckSmFillIcon);
exports.default = ForwardRef;
