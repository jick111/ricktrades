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
exports.StandaloneChartAreaBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneChartAreaBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.875 8.688v13.75c0 .546.39.937.938.937h16.25a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H8.813A2.8 2.8 0 0 1 6 22.438V8.688c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m9.297 6.64-2.422-2.422-3.125 3.125v3.594h11.25v-3.047l-1.992-2.305-1.094 1.055a1.84 1.84 0 0 1-2.617 0M18.5 14l1.29-1.29.233-.233a1.264 1.264 0 0 1 1.836.078l2.422 2.812c.274.352.469.781.469 1.211v3.672c0 .703-.586 1.25-1.25 1.25H11c-.703 0-1.25-.547-1.25-1.25v-4.219c0-.468.195-.976.547-1.328l3.555-3.555c.468-.468 1.289-.468 1.757 0l1.563 1.563z' })));
exports.StandaloneChartAreaBoldIcon = StandaloneChartAreaBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneChartAreaBoldIcon);
exports.default = ForwardRef;
