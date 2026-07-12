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
const LabelPairedFloppyDiskPenSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 4.625h6.617c.465 0 .93.191 1.258.52l2.105 2.105c.329.328.52.793.52 1.258v1.695l-4.348 4.348a1.75 1.75 0 0 0-.464.82l-.383 1.504H1.875c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75m0 2.625V9c0 .492.383.875.875.875H8A.88.88 0 0 0 8.875 9V7.25A.9.9 0 0 0 8 6.375H2.75a.88.88 0 0 0-.875.875m4.375 4.375c-.629 0-1.203.355-1.531.875-.301.547-.301 1.23 0 1.75.328.547.902.875 1.531.875.602 0 1.176-.328 1.504-.875.3-.52.3-1.203 0-1.75-.328-.52-.902-.875-1.504-.875m8.887-1.422.41.41c.41.41.41 1.121 0 1.532l-.82.82-1.942-1.942.82-.82c.41-.41 1.122-.41 1.532 0M8.629 15.18l3.555-3.555 1.941 1.941-3.555 3.555a.8.8 0 0 1-.383.219l-1.667.41c-.137.027-.301 0-.41-.11-.11-.109-.137-.273-.11-.41l.41-1.668a.8.8 0 0 1 .219-.382' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '53aaf9614110cee35f99825e6164fc46__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFloppyDiskPenSmFillIcon);
exports.default = ForwardRef;
