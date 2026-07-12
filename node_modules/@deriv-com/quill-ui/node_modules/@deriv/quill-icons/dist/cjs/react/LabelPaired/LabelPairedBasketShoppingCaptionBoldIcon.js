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
const LabelPairedBasketShoppingCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.945 3.57c.258.14.375.493.235.774L4.258 8h5.46L7.798 4.344a.595.595 0 0 1 .234-.774.595.595 0 0 1 .774.235L10.985 8h2.203a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-.47l-1.312 5.25A1.505 1.505 0 0 1 9.953 15.5H4.047c-.703 0-1.29-.469-1.477-1.125l-1.289-5.25H.813a.54.54 0 0 1-.563-.562C.25 8.258.484 8 .813 8h2.179l2.18-4.195a.595.595 0 0 1 .773-.235M2.43 9.125l1.242 4.969a.38.38 0 0 0 .375.281h5.906a.37.37 0 0 0 .352-.281l1.242-4.969zm3.07 1.688v1.874a.555.555 0 0 1-.562.563.54.54 0 0 1-.563-.562v-1.876c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563M7 10.25a.57.57 0 0 1 .563.563v1.874A.555.555 0 0 1 7 13.25a.54.54 0 0 1-.562-.562v-1.876c0-.304.234-.562.562-.562m2.625.563v1.874a.555.555 0 0 1-.562.563.54.54 0 0 1-.563-.562v-1.876c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ce99edc8027c5a22582a100dc14d8a36__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBasketShoppingCaptionBoldIcon);
exports.default = ForwardRef;
