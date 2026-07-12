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
const LabelPairedHandGestureSwipeLeftRightCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.477 5.914a.83.83 0 0 1 .82.82v1.829a.9.9 0 0 1 .351-.07c.352 0 .657.21.82.491.071-.023.165-.023.235-.023.352 0 .656.21.82.469h.118a.94.94 0 0 1 .937.937v1.406c0 .915-.75 1.641-1.64 1.641H7.945c-.351 0-.68-.07-.984-.258l-.14-.047a2.12 2.12 0 0 1-1.102-1.875v-.28c0-.376.164-.704.468-.938l.329-.235c.046-.047.093-.07.14-.117v-2.93a.83.83 0 0 1 .82-.82m-.352.82v4.22a.25.25 0 0 1-.234.233.25.25 0 0 1-.235-.234v-.703l-.187.14c-.164.141-.282.329-.282.563v.281c0 .61.329 1.172.868 1.454l.117.07c.234.117.492.187.773.187h1.992a1.16 1.16 0 0 0 1.172-1.172v-1.406a.47.47 0 0 0-.468-.469c-.047 0-.118 0-.164.047-.07 0-.141 0-.188-.023-.07-.024-.117-.094-.117-.14a.5.5 0 0 0-.469-.352.4.4 0 0 0-.234.07.28.28 0 0 1-.235.023c-.07-.046-.117-.117-.117-.187a.48.48 0 0 0-.469-.375.52.52 0 0 0-.398.21c-.047.095-.164.118-.258.095a.225.225 0 0 1-.164-.211v-2.32a.36.36 0 0 0-.351-.352.345.345 0 0 0-.352.351m4.313 1.524 1.43-1.43a.227.227 0 0 0 0-.328l-1.43-1.43a.28.28 0 0 0-.329 0c-.093.094-.07.235 0 .328l1.055 1.055H9.422a.21.21 0 0 0-.211.211c0 .117.094.234.21.234h2.743L11.11 7.93a.28.28 0 0 0 0 .328.227.227 0 0 0 .329 0m-7.5 0-1.43-1.43a.28.28 0 0 1 0-.328l1.43-1.43a.227.227 0 0 1 .328 0 .227.227 0 0 1 0 .328L3.21 6.43h2.742c.117 0 .234.117.234.234a.25.25 0 0 1-.234.234H3.211L4.266 7.93a.227.227 0 0 1 0 .328.227.227 0 0 1-.328 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7dd91097b3c1919cb2adb23e1ca159c9__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedHandGestureSwipeLeftRightCaptionRegularIcon);
exports.default = ForwardRef;
