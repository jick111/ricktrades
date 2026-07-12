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
const LabelPairedFolderOpenMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M14 9c0-.531-.469-1-1-1H9.313a3.03 3.03 0 0 1-2.126-.875l-.812-.812.688-.72-.688.72A1.02 1.02 0 0 0 5.656 6H2c-.562 0-1 .469-1 1v8.969l1.594-4A1.49 1.49 0 0 1 4 11h12.5c.469 0 .938.25 1.219.688.281.406.343.906.156 1.374l-2 5c-.219.594-.781.938-1.375.938H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2h3.656c.532 0 1.032.219 1.407.594l.843.843c.375.375.875.563 1.407.563H13c1.094 0 2 .906 2 2v1h-1zm-2 9h2.5a.47.47 0 0 0 .438-.312l2-5a.5.5 0 0 0-.032-.47A.53.53 0 0 0 16.5 12H4a.47.47 0 0 0-.469.344l-2 5a.44.44 0 0 0 .032.437c.093.157.25.219.437.219z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a4010b3ec346c175c1aecbbec14db9de__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFolderOpenMdRegularIcon);
exports.default = ForwardRef;
