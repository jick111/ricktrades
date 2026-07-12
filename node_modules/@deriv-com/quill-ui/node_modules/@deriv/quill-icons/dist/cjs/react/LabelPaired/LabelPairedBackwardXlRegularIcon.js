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
const LabelPairedBackwardXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.734 18 12 25.453v-14.86zm10.36-9c.75 0 1.406.656 1.406 1.406v4.875l8.25-6q.352-.28.844-.281c.75 0 1.406.656 1.406 1.406v15.188A1.41 1.41 0 0 1 22.594 27c-.328 0-.61-.094-.844-.234l-8.25-6v4.828A1.41 1.41 0 0 1 12.094 27c-.328 0-.61-.094-.844-.234L.422 18.938A1.18 1.18 0 0 1 0 18c0-.328.14-.656.422-.89L11.25 9.28q.351-.28.844-.281m1.406 9.938 9 6.515v-14.86l-9 6.516z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c8a50a3e68808ba3a77ea7b19ac0e03c__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBackwardXlRegularIcon);
exports.default = ForwardRef;
