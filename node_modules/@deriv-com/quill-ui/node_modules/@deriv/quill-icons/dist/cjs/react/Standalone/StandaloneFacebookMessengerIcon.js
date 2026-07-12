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
exports.StandaloneFacebookMessengerIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFacebookMessengerIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16 6.813c5.469 0 9.688 4.023 9.688 9.414 0 6.836-6.524 10.664-12.5 9.023-.352-.078-.391 0-2.422.898-.274.079-.547.079-.743-.078-.234-.117-.351-.351-.351-.625-.078-1.797 0-1.953-.313-2.265-1.914-1.68-3.046-4.14-3.046-6.953 0-5.391 4.218-9.414 9.687-9.414m5.82 7.265c.274-.43-.234-.937-.664-.625l-3.047 2.305c-.234.156-.507.156-.703 0l-2.265-1.68c-.352-.234-.743-.351-1.133-.273-.43.078-.781.312-.977.664L10.18 18.96c-.274.43.234.937.664.625l3.047-2.305c.234-.156.507-.156.703 0l2.265 1.68c.352.234.743.352 1.172.273.39-.078.742-.312.938-.664z' })));
exports.StandaloneFacebookMessengerIcon = StandaloneFacebookMessengerIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFacebookMessengerIcon);
exports.default = ForwardRef;
