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
const LabelPairedPasskeyMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.313 11.719a3.1 3.1 0 0 1-1.938-.656c-.125-.094-.219-.188-.344-.282A3.14 3.14 0 0 1 6.094 8.5c0-.906.312-1.656.937-2.281a3.14 3.14 0 0 1 2.282-.938c.906 0 1.656.313 2.28.938.657.625.97 1.406.97 2.281s-.313 1.656-.97 2.281l-.28.281c-.126.094-.25.157-.376.25-.25.157-.53.25-.843.344-.25.031-.5.063-.781.063m1.218-2c.375-.344.531-.719.531-1.219 0-.469-.156-.844-.53-1.219-.344-.343-.72-.5-1.22-.5s-.874.157-1.218.5c-.344.344-.5.719-.5 1.219 0 .469.156.875.5 1.219s.75.5 1.219.5c.5 0 .874-.156 1.218-.5m-3.5 2.969.032-.032a10.5 10.5 0 0 1 2.218-.25h.188c.187 0 .375 0 .562.031.25 0 .5.032.75.063-.031.188-.031.344-.031.5.031.563.188 1.063.406 1.563.344.624.813 1.156 1.406 1.53v2.095H3.406v-2.47q0-.702.375-1.312c.281-.406.594-.719 1.031-.937a11 11 0 0 1 2.22-.813zm2.282 1.218c-.657 0-1.313.063-1.938.219a8.7 8.7 0 0 0-1.906.688 1.5 1.5 0 0 0-.407.374c-.093.188-.156.344-.156.532v.969h6c-.437-.407-.781-.907-1.062-1.47a5 5 0 0 1-.469-1.312zm5.718 5.875-1.125-1.093V15.28a2.57 2.57 0 0 1-1.312-.906 2.52 2.52 0 0 1-.5-1.562c0-.72.25-1.313.75-1.813s1.094-.75 1.812-.75c.719 0 1.313.25 1.813.75s.75 1.125.75 1.813a2.6 2.6 0 0 1-.438 1.468c-.312.406-.687.719-1.187.906l.906.938-1.125 1.094 1.125 1.093zm-.375-6.593c.281 0 .531-.126.656-.344a.71.71 0 0 0 0-.781.68.68 0 0 0-.656-.344c-.281-.031-.531.125-.687.344a.86.86 0 0 0 0 .78.83.83 0 0 0 .687.345' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8d449a71f826157e64815f4e71c2b248__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPasskeyMdBoldIcon);
exports.default = ForwardRef;
