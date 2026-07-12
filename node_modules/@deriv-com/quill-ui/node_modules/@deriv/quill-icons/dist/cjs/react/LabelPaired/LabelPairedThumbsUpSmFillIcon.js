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
const LabelPairedThumbsUpSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.559 4.652c.71.164 1.175.848 1.039 1.559l-.082.3a6.6 6.6 0 0 1-.766 2.052h3.938c.71 0 1.312.601 1.312 1.312 0 .52-.3.957-.71 1.176.3.246.491.601.491 1.011 0 .657-.465 1.176-1.066 1.313.11.191.191.41.191.656 0 .602-.383 1.094-.93 1.258a1 1 0 0 1 .055.274c0 .738-.601 1.312-1.312 1.312h-2.68a2.5 2.5 0 0 1-1.45-.437l-1.066-.684a2.67 2.67 0 0 1-1.148-2.188v-3.035c0-.82.355-1.558.984-2.05l.192-.165c.71-.601 1.23-1.394 1.394-2.324l.055-.3c.164-.712.848-1.176 1.559-1.04M.875 9h1.75a.9.9 0 0 1 .875.875V16c0 .492-.41.875-.875.875H.875A.864.864 0 0 1 0 16V9.875C0 9.41.383 9 .875 9' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ac52a728a9ae30aaf885d9dc4ef8998b__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedThumbsUpSmFillIcon);
exports.default = ForwardRef;
