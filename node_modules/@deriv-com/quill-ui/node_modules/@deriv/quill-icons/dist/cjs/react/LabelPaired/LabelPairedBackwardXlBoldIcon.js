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
const LabelPairedBackwardXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.5 10.406v4.688l8.25-5.813c.234-.187.516-.281.797-.281A1.46 1.46 0 0 1 24 10.453v15.14A1.41 1.41 0 0 1 22.594 27c-.328 0-.61-.047-.844-.234l-8.297-5.813v4.64c0 .798-.61 1.407-1.406 1.407a1.6 1.6 0 0 1-.797-.234L.422 18.938A1.18 1.18 0 0 1 0 18c0-.328.14-.656.422-.89L11.25 9.28q.351-.28.844-.281c.75 0 1.406.656 1.406 1.406m0 7.406v.422L21.75 24V12.047zM3 18l8.25 5.953v-11.86z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4e76f1798e5e9b07ab4a6b8656a42f29__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBackwardXlBoldIcon);
exports.default = ForwardRef;
