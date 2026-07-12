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
exports.StandaloneChartAreaRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneChartAreaRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 8.375v13.75C7.25 23.18 8.07 24 9.125 24h16.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H9.125C7.367 25.25 6 23.883 6 22.125V8.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625m10.352 6.523-2.852-2.851-3.594 3.555a.59.59 0 0 0-.156.43v4.218h12.5v-3.672c0-.156-.078-.273-.156-.39l-2.422-2.852-1.563 1.562a1.21 1.21 0 0 1-.859.352c-.352 0-.664-.117-.898-.352m0-1.757L18.5 14l.86-.86.663-.663a1.264 1.264 0 0 1 1.836.078l2.422 2.812c.274.352.469.781.469 1.211v3.672c0 .703-.586 1.25-1.25 1.25H11c-.703 0-1.25-.547-1.25-1.25v-4.219c0-.468.195-.976.547-1.328l3.555-3.555c.468-.468 1.289-.468 1.757 0z' })));
exports.StandaloneChartAreaRegularIcon = StandaloneChartAreaRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneChartAreaRegularIcon);
exports.default = ForwardRef;
